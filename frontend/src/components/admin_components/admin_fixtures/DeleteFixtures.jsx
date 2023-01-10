import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import VideoCard from "../../category_video/VideoCard";

function DeleteFixtures({ el, getFixtures }) {
  const deleteFromFixture = (id) => {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/fixtures/${id}`)
      .then(() => getFixtures())
      .catch((err) => console.error(err));
  };

  return (
    <li className="fixtures-map">
      <VideoCard classname="fixtures-vid-slot" {...el} />
      <div className="actuallyHeroSlider_btn_delete">
        <button onClick={() => deleteFromFixture(el.id)} type="button">
          <span>Delete</span>
          <i />
        </button>
      </div>
    </li>
  );
}

export default DeleteFixtures;

DeleteFixtures.propTypes = {
  getFixtures: PropTypes.func.isRequired,
  el: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
