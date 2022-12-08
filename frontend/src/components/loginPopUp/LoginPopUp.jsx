import React from "react";

function LoginPopUp() {
  return (
    <div className="login-pop-up">
      <div className="login-card">
        <h2>Connexion</h2>
        <form>
          <label>
            <input type="email" placeholder="Votre adresse mail" />
          </label>
          <label>
            <input type="password" placeholder="Votre mot de passe" />
          </label>
          <label>
            <input id="btn-submit" type="submit" value="Envoyer" />
          </label>
          <label>
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
