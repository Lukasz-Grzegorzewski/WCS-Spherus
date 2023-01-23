import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import AvatarEditor from "react-avatar-editor";

import axios from "axios";

function AvatarPicPrompt({ id, setUrl, setCardToggle, getUser }) {
  const [data, setData] = useState(null);
  const [scaleValue, setScaleValue] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpenCropCanvas, setIsOpenCropCanvas] = useState(false);
  const [fileUploadErrors, setFileUploadErrors] = useState([]);
  const [urlIn, setUrlIn] = useState([]);
  const [inputChooseToggle, setInputChooseToggle] = useState(false);

  const inputRef = useRef();

  function onCrop() {
    const url = inputRef.current.getImageScaledToCanvas().toDataURL();
    setUrl(url);
    setUrlIn(url);
    setData({
      id: `${id}`,
      base64: url,
    });
  }

  function onScaleChange(scaleChangeEvent) {
    const scaleVal = parseFloat(scaleChangeEvent.target.value);
    setScaleValue(scaleVal);
  }

  function profilePicChange(fileChangeEvent) {
    const file = fileChangeEvent.target.files[0];
    const { type } = file;
    if (
      !(type.endsWith("jpeg") || type.endsWith("png") || type.endsWith("jpg"))
    ) {
      setFileUploadErrors(["type of file error"]);
      console.warn("fileUploadErrors array :", fileUploadErrors);
    } else {
      setSelectedImage(fileChangeEvent.target.files[0]);
      setFileUploadErrors([]);
      setIsOpenCropCanvas(!isOpenCropCanvas);
    }
  }

  const handleUpload = () => {
    const arr = urlIn.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n > 0) {
      n -= 1;
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], `${id}.jpg`, { type: mime });
    const formD = new FormData();
    formD.append("id", id);
    formD.append("file", file);

    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`, formD)
      .then((response) => {
        setCardToggle(false);
        getUser();
        console.warn("POSTED OK! :", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/users/avatars/${id}`, data)
      .then((response) => {
        setCardToggle(false);
        getUser();
        console.warn("DELETE OK! :", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="avatar-pic-prompt-container">
      <div className="choose-file-container">
        {!inputChooseToggle && (
          <input
            className="btn-choose-file"
            type="file"
            name="profilePicBtn"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              profilePicChange(e);
              setInputChooseToggle(!inputChooseToggle);
              // onCrop();
            }}
          />
        )}
        {isOpenCropCanvas && (
          <div className="cropCnt">
            <AvatarEditor
              className="cropCanvas"
              image={selectedImage}
              height={300}
              width={300}
              border={1}
              scale={scaleValue}
              rotate={0}
              ref={inputRef}
              onImageChange={() => onCrop()}
              onImageReady={() => {
                onCrop();
              }}
            />
            <div className="range-container">
              <input
                className="range"
                // style={{ width: "90%" }}
                type="range"
                value={scaleValue}
                name="points"
                min="1"
                max="10"
                step=".1"
                onChange={(e) => onScaleChange(e)}
              />
            </div>
            {/* <button
              onClick={() => onCrop()}
              className="editorOverlayCloseBtn crpBtn"
            >
              Save
            </button> */}
          </div>
        )}
      </div>
      <div className="btns-container">
        {selectedImage ? (
          <button
            className="btn btn-update"
            onClick={() => handleUpload()}
            type="button"
          >
            Update
          </button>
        ) : (
          <button
            className="deleteBtn btn-delete"
            onClick={() => handleDelete()}
            type="button"
          >
            Delete your avatar
          </button>
        )}
      </div>
      <button
        className="btn btn-cancel"
        onClick={() => setCardToggle(false)}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
}

export default AvatarPicPrompt;

AvatarPicPrompt.propTypes = {
  setUrl: PropTypes.func.isRequired,
  setCardToggle: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
