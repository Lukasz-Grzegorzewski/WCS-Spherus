import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import NavbarMobile from "./navbarMobile/NavbarMobile";
import ThemeContext from "../../ThemeContext";

function Navbar({ handlePopUpLogIn }) {
  const [size, setSize] = useState(false);
  const { themeToggle } = useContext(ThemeContext);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
      setSize(true);
    } else {
      setSize(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth >= 600) {
      setSize(true);
    } else {
      setSize(false);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="logo-container">
        {themeToggle ? (
          <NavLink to="/">
            <img
              className="logo"
              src={
                size
                  ? "/src/assets/images/logoLongDark.png"
                  : "/src/assets/images/logoShort.png"
              }
              alt="spherus"
            />
          </NavLink>
        ) : (
          <NavLink to="/">
            <img
              className="logo"
              src={
                size
                  ? "/src/assets/images/logoLongLight.png"
                  : "/src/assets/images/logoShort.png"
              }
              alt="spherus"
            />
          </NavLink>
        )}
      </div>
      {!size ? (
        <NavbarMobile handlePopUpLogIn={() => handlePopUpLogIn()} />
      ) : (
        <p>LALALAL</p>
      )}
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  handlePopUpLogIn: PropTypes.func.isRequired,
};
