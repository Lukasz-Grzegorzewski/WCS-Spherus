import React, { useState } from "react";
import PropTypes from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";
import ChoiceHero from "./ChoiceHero";

function ActuallyHeroSlider({ title, url, cat }) {
  const videoUrl = `http://localhost:${
    import.meta.env.VITE_PORT_BACKEND
  }/${url}`;

  const [choice, setChoice] = useState(false);

  return (
    <div className="ActuallyHeroSlider">
      <div className="ActuallyHeroSlider_video">
        <HoverVideoPlayer
          videoClassName="ActuallyHeroSlider_video"
          className="ActuallyHeroSlider_video"
          videoSrc={videoUrl}
          muted
        />
      </div>
      <p>Category : {cat}</p>
      <p>Title : {title}</p>
      <button
        type="button"
        onClick={() => {
          setChoice(!choice);
        }}
      >
        Modify
      </button>
      <div className="admin_menu_comp_users">
        {choice === true && <ChoiceHero />}
      </div>
    </div>
  );
}

export default ActuallyHeroSlider;

ActuallyHeroSlider.propTypes = {
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
