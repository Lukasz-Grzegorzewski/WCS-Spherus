import React from "react";
import PropTypes from "prop-types";

function PopupAdvertDelete({ setCheck, refresh, setRefresh }) {
  return (
    <div className="popupadvert">
      <p className="popupadvert_done">Done !</p>
      <button
        type="button"
        className="cssbuttons-io-button"
        onClick={() => {
          setCheck(false);
          setRefresh(!refresh);
        }}
      >
        {" "}
        Close
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default PopupAdvertDelete;

PopupAdvertDelete.propTypes = {
  setRefresh: PropTypes.func.isRequired,
  refresh: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired,
};
