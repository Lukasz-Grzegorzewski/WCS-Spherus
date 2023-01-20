import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import NavbarMobile from "./navbarMobile/NavbarMobile";

function Navbar({ handlePopUpLogIn }) {
  return (
    <div className="navbar">
      <NavbarMobile handlePopUpLogIn={() => handlePopUpLogIn()} />
      <div className="logo-container">
        <NavLink to="/">
          <img
            className="logo"
            src="/src/assets/images/logo_sphereus.png"
            alt="spherus"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  handlePopUpLogIn: PropTypes.func.isRequired,
};
