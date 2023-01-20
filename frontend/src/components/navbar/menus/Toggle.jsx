import React, { useContext } from "react";
import ThemeContext from "../../../ThemeContext";

function Toggle() {
  const { themeToggle, setThemeToggle } = useContext(ThemeContext);

  function handleToggle() {
    setThemeToggle(!themeToggle);
  }

  return (
    <div className="toggle">
      <input
        className={
          themeToggle ? "toggle-input-mode light" : "toggle-input-mode dark"
        }
        id="check"
        type="checkbox"
        onChange={() => handleToggle()}
        checked={!themeToggle}
      />
      <label htmlFor="check" className="label-input-mode" aria-controls="check">
        <p className="invis">Theme</p>
      </label>
    </div>
  );
}

export default Toggle;
