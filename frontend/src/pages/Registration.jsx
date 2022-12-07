import React from "react";

function Registration() {
  return (
    <div className="registration-page">
      <div className="registration-box">
        <h2>Créez votre compte</h2>
        <form>
          <input
            name="firstname"
            type="text"
            placeholder="Enter your firstname"
          />
          <input
            name="lastname"
            type="text"
            placeholder="Enter your lastname"
          />
          <input
            name="nickname"
            type="text"
            placeholder="Enter your nickname"
          />
          <input
            name="birthday"
            type="date"
            placeholder="Select your birthday"
          />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Repeat your password" />
          <p>I accept the general terms and conditions</p>
          <input type="submit" value="Valider" />
        </form>
      </div>
    </div>
  );
}

export default Registration;
