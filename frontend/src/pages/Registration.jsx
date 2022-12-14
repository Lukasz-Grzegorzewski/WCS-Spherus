import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PasswordStrengthMeter from "../components/password_strength_meter/PasswordStrengthMeter";

function Registration() {
  const [password, setPassword] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    nickname: "",
    birthday: "",
    email: "",
    password: "",
  });

  function onChange(field, value) {
    setNewUser({ ...newUser, [field]: value });
  }

  function clearEmailInput() {
    setNewUser({
      ...newUser,
      email: "",
    });
  }

  function clearInputs() {
    setNewUser({
      firstname: "",
      lastname: "",
      nickname: "",
      birthday: "",
      email: "",
      password: "",
    });
  }

  const postNewUser = (e, data) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/users`, data)
      .then(() => {
        clearInputs();
        setIsUserCreated(true);
        setTimeout(() => setIsUserCreated(false), 5000);
        console.warn("Victoire");
      })
      .catch((err) => {
        console.error(err);
        clearEmailInput();
        setCheckEmail(true);
      });
  };

  return (
    <div className="registration-page">
      <div className="registration-box">
        <form
          action="http://localhost:5000/users"
          method="post"
          onSubmit={(e) => {
            postNewUser(e, newUser);
          }}
        >
          <input
            value={newUser.firstname}
            type="text"
            placeholder="Enter your firstname"
            onChange={(e) => onChange("firstname", e.target.value)}
          />
          <input
            value={newUser.lastname}
            type="text"
            placeholder="Enter your lastname"
            onChange={(e) => onChange("lastname", e.target.value)}
          />
          <input
            // Si la value de l'input === un email présent dans la DBB, on demande d'en choisir un autre
            value={newUser.nickname}
            type="text"
            placeholder="Enter your nickname"
            onChange={(e) => onChange("nickname", e.target.value)}
          />
          <input
            value={newUser.birthday}
            type="date"
            placeholder="Select your birthday"
            onChange={(e) => onChange("birthday", e.target.value)}
          />
          <input
            id="email"
            className={checkEmail ? "email-input" : ""}
            value={newUser.email}
            type="email"
            placeholder={
              checkEmail
                ? "This adress is already used. Enter a new email adress"
                : "Enter your email"
            }
            onClick={() => setCheckEmail(false)}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <input
            id="password"
            className="password-input"
            value={newUser.password}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              onChange("password", e.target.value);
              setPassword(e.target.value);
            }}
          />
          <PasswordStrengthMeter password={password} />
          {/* <input
            value={newUser.password}
            type="password"
            placeholder="Repeat your password"
            onChange={(e) => onChange("password", e.target.value)}
          /> */}
          <p>
            I accept the{" "}
            <NavLink className="link-to-terms" to="/termsofservices">
              general terms and conditions
            </NavLink>
          </p>
          {/* <input
            className={isUserCreated ? "green-submit-button" : "submit-button"}
            type="submit"
            value="Créez votre compte"
          /> */}
          {isUserCreated ? (
            <h3>Congratulations ! Your account is created.</h3>
          ) : (
            <h3>...</h3>
          )}
          <button id="btn-submit" type="submit" className="button-78">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
