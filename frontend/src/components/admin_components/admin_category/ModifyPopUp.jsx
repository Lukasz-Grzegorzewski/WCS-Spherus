import React from "react";
import PropTypes from "prop-types";

function ModifyPopUp({ modifyCategory, handleModifyPopUp }) {
  return (
    <div className="delete-popup-box">
      <div className="popup-box">
        Do you really want to delete this category?
        <form onSubmit={modifyCategory}>
          <input type="submit" value="YES" />
        </form>
        <button
          className="button-no"
          type="button"
          onClick={(e) => handleModifyPopUp(e)}
        >
          NO
        </button>
      </div>
    </div>
  );
}

export default ModifyPopUp;
ModifyPopUp.propTypes = {
  modifyCategory: PropTypes.func.isRequired,
  handleModifyPopUp: PropTypes.func.isRequired,
};
