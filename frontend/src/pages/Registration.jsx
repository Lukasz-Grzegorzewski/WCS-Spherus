import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Registration() {
  const [checkEmail, setCheckEmail] = useState(false);
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
      .post("http://localhost:5000/users", data)
      .then(() => {
        clearInputs();
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
            value={newUser.password}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => onChange("password", e.target.value)}
          />
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
          <input
            className="submit-button"
            type="submit"
            value="Créez votre compte"
          />
        </form>
      </div>
    </div>
  );
}

export default Registration;
