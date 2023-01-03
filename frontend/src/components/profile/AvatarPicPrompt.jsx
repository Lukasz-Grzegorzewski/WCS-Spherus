import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar-edit";
import axios from "axios";

function AvatarPicPrompt({ id, setUrl, setCardToggle }) {
  const [data, setData] = useState(null);

  function onClose() {
    setCardToggle(false);
  }

  function onCrop(view) {
    setUrl(view);
    setData({
      id: `${id}`,
      base64: view,
    });
  }

  const handleUpload = () => {
    axios
      .post(
        `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/users/${id}`,
        data
      )
      .then((response) => {
        setCardToggle(false);
        console.warn("OK! response.data :", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="avatar-pic-prompt-container">
      <div className="choose-file-container">
        <Avatar
          width={250}
          height={250}
          onClose={() => onClose()}
          //   src={src}
          onCrop={(image) => onCrop(image)}
          lineWidth={10}
          labelStyle={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "3rem",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
          borderStyle={{ borderRadius: "20px" }}
        />
      </div>
      <div className="btns-container">
        <button
          className="btn btn-update"
          onClick={() => handleUpload()}
          type="button"
        >
          Update
        </button>
        <button
          className="btn btn-cancel"
          onClick={() => onClose()}
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AvatarPicPrompt;

AvatarPicPrompt.propTypes = {
  setUrl: PropTypes.func.isRequired,
  setCardToggle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
