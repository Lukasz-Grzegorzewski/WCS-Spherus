import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPopUp() {
  const navigate = useNavigate();

  function navigateToRegistration() {
    navigate("/registration");
  }

  return (
    <div className="login-pop-up">
      <div className="login-card">
        <h2>Connexion</h2>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              className="email"
              name="email"
              placeholder="Votre adresse mail"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Votre mot de passe"
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

export default LoginPopUp;
