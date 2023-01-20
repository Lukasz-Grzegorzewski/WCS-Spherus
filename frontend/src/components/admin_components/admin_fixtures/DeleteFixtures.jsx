import React, { useState } from "react";
import axios from "axios";
import { FaPenFancy } from "react-icons/fa";
import PropTypes from "prop-types";
import ChoiceHero from "../admin_heroSlider/ChoiceHero";
import VideoCard from "../../category_video/VideoCard";

function DeleteFixtures({ el, getHeroInfo }) {
  const [choice, setChoice] = useState(false);

  const deleteFromFixture = (id) => {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/fixtures/${id}`)
      .then(() => getHeroInfo())
      .catch((err) => console.error(err));
  };

  const classButton = () => {
    if (choice === true) {
      return "actuallyHeroSlider_btn_activ";
    }
    return "actuallyHeroSlider_btn_inactiv";
  };

  return (
    <li className="fixtures-map">
      <VideoCard classname="fixtures-vid-slot" {...el} />
      <div className="actuallyHeroSlider_btn">
        <button
          type="button"
          className={classButton()}
          onClick={() => setChoice(!choice)}
        >
          Modify <FaPenFancy className="svg" />
        </button>
        <div className="actuallyHeroSlider_btn_delete">
          <button onClick={() => deleteFromFixture(el.id)} type="button">
            <span>Delete</span>
            <i />
          </button>
        </div>
      </div>
      {choice === true && (
        <ChoiceHero
          id={el.id}
          choice={choice}
          setChoice={setChoice}
          getHeroInfo={getHeroInfo}
          type={2}
        />
      )}
    </li>
  );
}

export default DeleteFixtures;

DeleteFixtures.propTypes = {
  getFixtures: PropTypes.func.isRequired,
  getHeroInfo: PropTypes.func.isRequired,
  el: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
