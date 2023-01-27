import React from "react";
import PropTypes from "prop-types";

function MessageConfirmation({ setConfirmationMessageDelete, setCatId }) {
  return (
    <div className="message-confirmation">
      <div className="box-message-confirmation">
        <button
          type="button"
          className="close-message-button"
          onClick={() => {
            setConfirmationMessageDelete(false);
            setCatId("Search category");
          }}
        >
          X
        </button>{" "}
        <p>Done !</p>
      </div>
    </div>
  );
}

export default MessageConfirmation;

MessageConfirmation.propTypes = {
  setConfirmationMessageDelete: PropTypes.func.isRequired,
  setCatId: PropTypes.func.isRequired,
};
