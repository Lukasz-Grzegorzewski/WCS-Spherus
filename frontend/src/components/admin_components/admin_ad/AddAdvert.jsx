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
        <div className="adminvideo_file_container">
          <label className="adminvideo_file_label" htmlFor="file">
            Upload a video
          </label>
          <input
            className="adminvideo_file_input"
            type="file"
            id="file"
            name="file"
            accept=".jpg"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <div className="adminvideo_fields_input">
          <label htmlFor="title">Advertising name</label>
          <input
            type="text"
            id="name"
            value={imgDetails.name}
            placeholder="Enter the advert name"
            onChange={(e) =>
              setImgDetails({ ...imgDetails, name: e.target.value })
            }
          />

          <label htmlFor="description">Advertising description</label>
          <input
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

          <label htmlFor="description">Advertising Link</label>
          <input
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

          <input
            className="adminvideo_upload_btn"
            type="submit"
            value="Upload"
          />
        </div>
      </form>
    </div>
  );
}

export default AddAdvert;
