import React from "react";
import PropTypes from "prop-types";

function ModifyPopUp({ modifyCategory, handleModifyPopUp }) {
  return (
    <div className="delete_popup_box">
      <div className="popup_box">
        Do you really want to delete this category?
        <div className="buttons_popup">
          <form onSubmit={modifyCategory}>
            <button className="deleteBtn button_yes" type="submit">
              YES
            </button>
          </form>
          <button
            className="deleteBtn button_no"
            type="button"
            onClick={(e) => handleModifyPopUp(e)}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyPopUp;
ModifyPopUp.propTypes = {
  modifyCategory: PropTypes.func.isRequired,
  handleModifyPopUp: PropTypes.func.isRequired,
};
