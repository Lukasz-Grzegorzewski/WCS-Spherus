import React, { useState, useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResetPassword from "./ResetPassword";

function EmailVerification() {
  const [email, setEmail] = useState("");
  const [timerCount, setTimer] = useState(60);
  const [disable, setDisable] = useState(true);
  const [codeInput, setCodeInput] = useState([0, 0, 0, 0]);
  const [codeFromDB, setCodeFromDB] = useState(null);
  const { id } = useParams();

  // Gestion / automatisation des inputs :

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);

  function handleChangeInputs(event, nextInput) {
    if (event.target.value.length === 1) {
      nextInput.current.focus();
    }
  }

  //  Fonctions appelées au montage de ce composant :

  function getEmailById() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`)
      .then((result) => setEmail(result.data.email))
      .catch((err) => console.error(err));
  }

  function getCodeTmp() {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/users/code/${id}`)
      .then((result) => setCodeFromDB(result.data[0].code_tmp))
      .catch((err) => console.error(err));
  }

  const resendCodeTimer = useCallback(() => {
    const interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleResendRandomCode() {
    if (disable) return;
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/send_recovery_email`, {
        OTP: codeFromDB,
        recipientEmail: email,
      })
      .then(() => setDisable(true))
      .then(() =>
        alert("A new OTP has succesfully been sent to your email address")
      )
      .then(() => setTimer(60))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getEmailById();
    getCodeTmp();
    resendCodeTimer();
  }, []);

  return (
    <div className="login-pop-up">
      <div className="login-card">
        <h2>Code verification</h2>
        <h4>We have sent a code to your email : {email}</h4>
        <form className="code-form">
          <div className="_numbers">
            <label htmlFor="first_code">
              <input
                type="string"
                className="code-input"
                ref={firstInput}
                onChange={(e) => {
                  setCodeInput([
                    e.target.value,
                    codeInput[1],
                    codeInput[2],
                    codeInput[3],
                  ]);
                  handleChangeInputs(e, secondInput);
                }}
              />
            </label>
            <label htmlFor="second_code">
              <input
                type="string"
                className="code-input"
                ref={secondInput}
                onChange={(e) => {
                  setCodeInput([
                    codeInput[0],
                    e.target.value,
                    codeInput[2],
                    codeInput[3],
                  ]);
                  handleChangeInputs(e, thirdInput);
                }}
              />
            </label>
            <label htmlFor="third_code">
              <input
                type="string"
                className="code-input"
                ref={thirdInput}
                onChange={(e) => {
                  setCodeInput([
                    codeInput[0],
                    codeInput[1],
                    e.target.value,
                    codeInput[3],
                  ]);
                  handleChangeInputs(e, fourthInput);
                }}
              />
            </label>
            <label htmlFor="fourth_code">
              <input
                type="string"
                className="code-input"
                ref={fourthInput}
                onChange={(e) =>
                  setCodeInput([
                    codeInput[0],
                    codeInput[1],
                    codeInput[2],
                    e.target.value,
                  ])
                }
              />
            </label>
          </div>
          <div className="_resend">
            <p>Didn't receive the code?</p>
            <button
              type="button"
              className="_link"
              style={{
                fontFamily: "$font-text",
                color: disable ? "gray" : "blue",
                cursor: disable ? "none" : "pointer",
                textDecorationLine: disable ? "none" : "underline",
              }}
              onClick={() => handleResendRandomCode()}
            >
              {disable ? `Resend code in ${timerCount}s` : "Resend code"}
            </button>
          </div>
          {parseInt(codeInput.join(""), 10) === codeFromDB ? (
            <ResetPassword />
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default EmailVerification;
