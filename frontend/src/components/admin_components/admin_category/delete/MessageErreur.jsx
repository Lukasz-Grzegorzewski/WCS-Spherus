import React from "react";
import PropTypes from "prop-types";

function MessageErreur({ setErrorMessageDelete }) {
  return (
    <div>
      <button type="button" onClick={() => setErrorMessageDelete(false)}>
        X
      </button>{" "}
      "error message"
    </div>
  );
}

export default MessageErreur;

MessageErreur.propTypes = {
  setErrorMessageDelete: PropTypes.func.isRequired,
};
