import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LoginPopUp({ setToken, setControlPopUpLogIn }) {
  const navigate = useNavigate();

  function navigateToRegistration() {
    navigate("/registration");
  }

  function navigateToHome() {
    navigate("/");
  }

  function redirect() {
    navigateToHome();
    setControlPopUpLogIn(false);
  }

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/login`, loginDetails)
      .then((res) => {
        setToken(res.data);
        localStorage.setItem(
          "token",
          JSON.stringify({
            userToken: res.data.token,
            isAdmin: res.data.isAdmin,
            id: res.data.id,
          })
        );
        redirect();
        console.warn("connecté");
      })

      .catch((err) => console.warn(err));
  };

  return (
    <div className="login-pop-up">
      <div className="login-card">
        <h2>Connexion</h2>
        <form onSubmit={login}>
          <label htmlFor="email">
            <input
              type="email"
              className="email"
              name="email"
              placeholder="Votre adresse mail"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Votre mot de passe"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
          </label>

          <label htmlFor="submit">
            <input
              className="btn-submit"
              name="submit"
              type="submit"
              value="Envoyer"
            />
          </label>
          <label htmlFor="redirecting">
            <input
              className="btn-registration"
              type="submit"
              value="Create your account"
              onClick={navigateToRegistration}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
LoginPopUp.propTypes = {
  setToken: PropTypes.func.isRequired,
  setControlPopUpLogIn: PropTypes.func.isRequired,
};
export default LoginPopUp;
