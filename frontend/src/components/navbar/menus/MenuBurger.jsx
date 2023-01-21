import React from "react";
import PropTypes from "prop-types";
import { CiLogin, CiCirclePlus } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";

function MenuBurger({ isBurgerClicked, setIsBurgerClicked, handlePopUpLogIn }) {
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
            setIsBurgerClicked(!isBurgerClicked);
          }}
        >
          <CiLogin className="login-icon" /> Login
        </button>
        <NavLink to="/registration">
          <button
            className="btn btn-signin"
            type="button"
            onClick={() => {
              setIsBurgerClicked(!isBurgerClicked);
            }}
          >
            <CiCirclePlus className="signin-icon" /> Sign in
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
