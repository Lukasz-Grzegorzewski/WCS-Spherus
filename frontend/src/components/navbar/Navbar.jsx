import React, { useState } from "react";
import "./Navbar.css";
import MenuButton from "./MenuButton";
import MenuButtonHandler from "./MenuButtonHandler";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const buttonList = [
    {
      name: "link1",
      id: 1,
    },
    {
      name: "link2",
      id: 2,
    },
    {
      name: "link3",
      id: 3,
    },
    {
      name: "link4",
      id: 4,
    },
  ];

  function handleChange() {
    setMenu(!menu);
  }

  return (
    <div className="navbar">
      <MenuButtonHandler menu={menu} handleChange={() => handleChange()} />
      <div className={menu ? "menuOn" : "menuOff"}>
        {buttonList.map((button) => (
          <MenuButton name={button.name} id={button.id} key={button.id} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
