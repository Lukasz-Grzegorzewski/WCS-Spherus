import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";

function AddFixtures({ getFixtures, getAllCategories, setAdd }) {
  const [allVideos, setAllVideos] = useState(null);
  const [valueVideo, setValueVideo] = useState({ fkVideo: null });

  const postFixture = () => {
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/fixtures`, valueVideo)
      .then(() => {
        getFixtures();
        setAdd(false);
      })
      .catch((err) => console.error(err));
  };

  function getVideos(id) {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/videos/categories/${id}`)
      .then((res) => setAllVideos(res.data))
      .catch((err) => console.error(err));
  }

  function handleChange(e) {
    getVideos(e.target.value);
  }

  function handleChange2(e) {
    setValueVideo({ fkVideo: e.target.value });
  }

  return (
    <div className="fixtures-add-selector">
      <h1 className="addhero_title">Add new video</h1>
      <select
        className="addhero_cat_name_select"
        onChange={(e) => handleChange(e)}
      >
        <option value="">---</option>
        {getAllCategories.map((el) => {
          return (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
      {allVideos && (
        <select
          className="addhero_cat_name_select"
          onChange={(e) => handleChange2(e)}
        >
          <option value="">---</option>
          {allVideos.map((el) => {
            return (
              <option key={el.id} value={el.id}>
                {el.title}
              </option>
            );
          })}
        </select>
      )}
      {valueVideo.fkVideo !== null && (
        <button
          className="addhero_button"
          type="button"
          onClick={() => postFixture()}
        >
          Upload
        </button>
      )}
    </div>
  );
}

export default AddFixtures;

AddFixtures.propTypes = {
  setAdd: PropTypes.bool.isRequired,
  getFixtures: PropTypes.func.isRequired,
  getAllCategories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};
