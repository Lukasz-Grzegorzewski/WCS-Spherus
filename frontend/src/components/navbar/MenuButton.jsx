import React from "react";
import PropTypes from "prop-types";

function MenuButton({ name, id }) {
  return (
    <div className="menubutton">
      <button id={id} type="button">
        {name}
      </button>
    </div>
  );
}

export default MenuButton;

MenuButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
