import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import NavbarMobile from "./navbarMobile/NavbarMobile";
import ThemeContext from "../../ThemeContext";
import NavbarDesktop from "./navbarDesktop/NavbarDesktop";

function Navbar({ handlePopUpLogIn }) {
  const [size, setSize] = useState(false);
  const { themeToggle } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 600) {
        setSize(true);
      } else {
        setSize(false);
      }
    });
    if (window.innerWidth >= 600) {
      setSize(true);
    } else {
      setSize(false);
    }
  }, [window.innerWidth]);

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
        <NavbarDesktop handlePopUpLogIn={() => handlePopUpLogIn()} />
      )}
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  handlePopUpLogIn: PropTypes.func.isRequired,
};
