import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import MenuButton from "./MenuButton";
import MenuButtonHandler from "./MenuButtonHandler";

function Navbar({ handlePopUpLogIn }) {
  const [menu, setMenu] = useState(false);

  function test() {
    console.warn("onclick");
  }

  const buttonList = [
    {
      name: "Why Subscribe?",
      buttonid: 1,
      urlLink: "/registration",
      onclick: test,
    },
    {
      name: "Log in",
      buttonid: 2,
      onclick: handlePopUpLogIn,
      urlLink: "/registration",
    },
    {
      name: "Sing In",
      buttonid: 3,
      urlLink: "/registration",
      onclick: test,
    },
    {
      name: "Light Mode",
      buttonid: 4,
      urlLink: "/registration",
      onclick: test,
    },
  ];

  function handleChange() {
    setMenu(!menu);
  }

  return (
    <div className="navbar">
      <div className="navbar_container_logo">
        <NavLink to="/">
          <img
            className="navbar_logo"
            src="/src/assets/images/logo_sphereus.png"
            alt="sphereus"
          />
        </NavLink>
      </div>

      <div className="navbar_container_logo">
        <MenuButtonHandler menu={menu} handleChange={() => handleChange()} />
      </div>

      <div className={menu ? "menuOn" : "menuOff"}>
        {buttonList.map((button) => (
          <MenuButton
            name={button.name}
            id={button.buttonid}
            key={button.buttonid}
            onclick={button.onclick}
            urlLink={button.urlLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  handlePopUpLogIn: PropTypes.func.isRequired,
};
