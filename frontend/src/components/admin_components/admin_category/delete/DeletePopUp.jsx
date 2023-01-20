import React from "react";
import PropTypes from "prop-types";

function DeletePopUp({ deleteCategory, setOpenDeletePopUp }) {
  return (
    <div className="delete-popup-box">
      <div className="popup-box">
        Do you really want to delete this category?
        <button
          className="button-yes"
          type="button"
          onClick={() => deleteCategory()}
        >
          YES
        </button>
        <button
          className="button-no"
          type="button"
          onClick={() => setOpenDeletePopUp(false)}
        >
          NO
        </button>
      </div>
    </div>
  );
}
export default DeletePopUp;

DeletePopUp.propTypes = {
  deleteCategory: PropTypes.func.isRequired,
  setOpenDeletePopUp: PropTypes.func.isRequired,
};
