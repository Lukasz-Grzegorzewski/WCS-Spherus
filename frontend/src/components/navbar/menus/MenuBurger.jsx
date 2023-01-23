import React from "react";
import PropTypes from "prop-types";
import { FaUser, FaUserPlus, FaQuestion } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";

function MenuBurger({
  isBurgerClicked = false,
  setIsBurgerClicked,
  handlePopUpLogIn,
}) {
  // document.body.addEventListener("click", (e) => {
  //   setIsBurgerClicked(false);
  //   if (isBurgerClicked) {
  //     const menuB = document.querySelector(".menu-burger");
  //     console.log("isBurgerClicked :", isBurgerClicked);
  //     if (!menuB.contains(e.target)) {
  //       // Your code here
  //       setIsBurgerClicked(false);
  //     }
  //   }
  // });
  // useEffect(() => {}, [isBurgerClicked]);

  return (
    <div
      className={
        isBurgerClicked ? "menu-burger active" : "menu-burger inactive"
      }
    >
      <div className="buttons">
        <button
          className="btn btn-login"
          type="button"
          onClick={() => {
            handlePopUpLogIn();
            setIsBurgerClicked(false);
          }}
        >
          <FaUser className="login-icon" /> Login
        </button>
        <NavLink to="/registration">
          <button
            className="btn btn-signin"
            type="button"
            onClick={() => {
              setIsBurgerClicked(false);
            }}
          >
            <FaUserPlus className="signin-icon" /> Signin
          </button>
        </NavLink>
        <NavLink to="#">
          <button
            className="btn btn-why-signin"
            type="button"
            onClick={() => {
              setIsBurgerClicked(false);
            }}
          >
            <FaQuestion className="why-signin-icon" /> Why to sign in?
          </button>
        </NavLink>
      </div>

      <Toggle />
    </div>
  );
}

export default MenuBurger;

MenuBurger.propTypes = {
  isBurgerClicked: PropTypes.bool.isRequired,
  handlePopUpLogIn: PropTypes.func.isRequired,
  setIsBurgerClicked: PropTypes.func.isRequired,
};
