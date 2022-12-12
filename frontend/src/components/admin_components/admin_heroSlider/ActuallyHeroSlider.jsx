import React, { useState } from "react";
import PropTypes from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";
import { FaAngleLeft } from "react-icons/fa";
import ChoiceHero from "./ChoiceHero";

function ActuallyHeroSlider({ id, title, url, cat, heroInfo, setHeroInfo }) {
  const videoUrl = `http://localhost:${
    import.meta.env.VITE_PORT_BACKEND
  }/${url}`;

  const [choice, setChoice] = useState(false);

  const classButton = () => {
    if (choice === true) {
      return "actuallyHeroSlider_btn_activ";
    }
    return "actuallyHeroSlider_btn_inactiv";
  };

  return (
    <div className="actuallyHeroSlider">
      <p className="actuallyHeroSlider_number">Video {id}</p>
      <div>
        <HoverVideoPlayer
          videoClassName="actuallyHeroSlider_video"
          videoSrc={videoUrl}
          muted
        />
      </div>
      <p className="actuallyHeroSlider_cat">Category : {cat}</p>
      <p className="actuallyHeroSlider_title">Title : {title}</p>
      <div className="actuallyHeroSlider_btn">
        <button
          className={classButton()}
          type="button"
          onClick={() => {
            setChoice(!choice);
          }}
        >
          Modify <FaAngleLeft className="svg" />
        </button>
      </div>
      <div>
        {choice === true && (
          <ChoiceHero
            id={id}
            heroInfo={heroInfo}
            setHeroInfo={setHeroInfo}
            // setRefresh={setRefresh}
            // refresh={refresh}
          />
        )}
      </div>
    </div>
  );
}

export default ActuallyHeroSlider;

ActuallyHeroSlider.propTypes = {
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  heroInfo: PropTypes.arrayOf(
    PropTypes.shape({
      cat: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      display: PropTypes.number.isRequired,
      hsid: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  setHeroInfo: PropTypes.func.isRequired,
};
