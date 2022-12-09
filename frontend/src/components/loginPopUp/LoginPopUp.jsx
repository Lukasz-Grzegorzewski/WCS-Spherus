import React from "react";

function LoginPopUp() {
  return (
    <div className="login-pop-up">
      <div className="login-card">
        <h2>Connexion</h2>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre adresse mail"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
            />
          </label>
          <label htmlFor="submit">
            <input
              id="btn-submit"
              name="submit"
              type="submit"
              value="Envoyer"
            />
          </label>
          <label htmlFor="redirecting">
            <input
              id="btn-registration"
              type="submit"
              value="Créez votre compte"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default LoginPopUp;
