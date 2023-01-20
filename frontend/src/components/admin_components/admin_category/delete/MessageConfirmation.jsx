import React from "react";
import PropTypes from "prop-types";

function MessageConfirmation({ setConfirmationMessageDelete, setCatId }) {
  return (
    <div className="message-confirmation">
      <div className="box-message-confirmation">
        <p>Done !</p>
        <button
          type="button"
          onClick={() => {
            setConfirmationMessageDelete(false);
            setCatId("Search category");
          }}
        >
          X
        </button>{" "}
      </div>
    </div>
  );
}

export default MessageConfirmation;

MessageConfirmation.propTypes = {
  setConfirmationMessageDelete: PropTypes.func.isRequired,
  setCatId: PropTypes.func.isRequired,
};
