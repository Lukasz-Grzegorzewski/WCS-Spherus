import React, { useState } from "react";
import axios from "axios";

function AddAdvert() {
  const [file, setFile] = useState({});
  const [imgDetails, setImgDetails] = useState({
    description: "",
    urlLink: "",
    name: "",
  });

  const uploadAdd = (data) => {
    axios
      .post(
        `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/publicity`,
        data
      )
      .catch(() => {
        console.error("advertising not uploaded");
      });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", imgDetails.name);
    data.append("description", imgDetails.description);
    data.append("urlLink", imgDetails.urlLink);
    data.append("file", file);
    uploadAdd(data);
  };

  return (
    <div className="addadvert">
      <form action="" onSubmit={handleUpload} className="addadvert_form">
        <div className="addadvert_form_container">
          <input
            className="addadvert_form_container_input"
            type="file"
            id="file"
            name="file"
            accept=".jpg"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <div className="addadvert_form_container">
          <label className="addadvert_form_container_label" htmlFor="title">
            Name
          </label>
          <input
            className="addadvert_form_container_input"
            type="text"
            id="name"
            value={imgDetails.name}
            placeholder="Enter the advert name"
            onChange={(e) =>
              setImgDetails({ ...imgDetails, name: e.target.value })
            }
          />

          <label
            className="addadvert_form_container_label"
            htmlFor="description"
          >
            Text
          </label>
          <input
            className="addadvert_form_container_textarea"
            type="text"
            id="description"
            value={imgDetails.description}
            placeholder="Enter the advertising text description"
            onChange={(e) =>
              setImgDetails({
                ...imgDetails,
                description: e.target.value,
              })
            }
          />

          <label
            className="addadvert_form_container_label"
            htmlFor="description"
          >
            Link to
          </label>
          <input
            className="addadvert_form_container_input"
            type="text"
            id="urlLink"
            value={imgDetails.urlLink}
            placeholder="Enter the link"
            onChange={(e) =>
              setImgDetails({
                ...imgDetails,
                urlLink: e.target.value,
              })
            }
          />
          <button
            className="addadvert_form_container_btn"
            type="submit"
            value="Upload"
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  />
                </svg>
              </div>
            </div>
            <span>Apply</span>
          </button>
          {/* <input
            className="adminvideo_upload_btn"
            type="submit"
            value="Upload"
          /> */}
        </div>
      </form>
    </div>
  );
}

export default AddAdvert;
