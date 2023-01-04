import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PasswordStrengthMeter from "../components/password_strength_meter/PasswordStrengthMeter";

function Registration() {
  const [checkEmail, setCheckEmail] = useState(null);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    nickname: "",
    birthday: "",
    email: "",
    password: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function fieldsNotEmpty(obj) {
    for (const elements in obj) {
      if (obj[elements] === "") {
        if (elements !== "birthday") {
          setCheckEmail(3);
          return false;
        }
      }
    }
    return true;
  }

  function emailValidator() {
    let ret = "";
    if (checkEmail % 2 !== 0) {
      ret = "This email is already used. Please, enter a new email address.";
    } else if (checkEmail % 2 === 0) {
      ret = "This email is invalid. Are you sure it is correctly spelled?";
    }
    return ret;
  }

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
    if (isValidEmail(newUser.email) && fieldsNotEmpty(newUser)) {
      axios
        .post(
          `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/users`,
          data
        )
        .then(() => {
          clearInputs();
          setIsUserCreated(true);
          setTimeout(() => setIsUserCreated(false), 5000);
          console.warn("Victoire !");
        })
        .catch((err) => {
          console.error("MEEEERDE :", err);
          setError(err.response.data[0]);
          clearEmailInput();
          setCheckEmail(1);
        });
    } else {
      setCheckEmail(2);
      clearEmailInput();
    }
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
            className={checkEmail === null ? "" : "email-input"}
            value={newUser.email}
            type="email"
            placeholder={
              checkEmail === null ? "Enter your email" : emailValidator()
            }
            onClick={() => setCheckEmail(null)}
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
            }}
          />
          <PasswordStrengthMeter
            password={newUser.password}
            className="password-strength-meter"
          />
          <p>
            I accept the{" "}
            <NavLink className="link-to-terms" to="/termsofservices">
              general terms and conditions
            </NavLink>
          </p>
          <p>{error.param === "password" && error.msg}</p>
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
