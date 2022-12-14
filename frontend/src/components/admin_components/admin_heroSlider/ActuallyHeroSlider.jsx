import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";
import { FaPenFancy } from "react-icons/fa";
import ChoiceHero from "./ChoiceHero";

function ActuallyHeroSlider({
  id,
  title,
  url,
  cat,
  heroInfo,
  setHeroInfo,
  refresh,
  setRefresh,
}) {
  const videoUrl = `http://localhost:${
    import.meta.env.VITE_PORT_BACKEND
  }/${url}`;

  const [choice, setChoice] = useState(false);
  const [response, setResponse] = useState("");

  const deleteHero = () => {
    axios
      .delete(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/hero_slider/${id}`
      )
      .then((res) => {
        setResponse(res.data);
        setRefresh(!refresh);
      });
  };

  const classButton = () => {
    if (choice === true) {
      return "actuallyHeroSlider_btn_activ";
    }
    return "actuallyHeroSlider_btn_inactiv";
  };

  return (
    <div className="actuallyHeroSlider">
      <div className="actuallyHeroSlider_video">
        <HoverVideoPlayer
          videoClassName="actuallyHeroSlider_video_player"
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
          Modify <FaPenFancy className="svg" />
        </button>
        <div className="actuallyHeroSlider_btn_delete">
          <button
            type="button"
            onClick={() => {
              deleteHero();
            }}
          >
            <span>Delete</span>
            <i />
          </button>
        </div>
      </div>
      <div>
        {choice === true && (
          <ChoiceHero
            id={id}
            refresh={refresh}
            setRefresh={setRefresh}
            heroInfo={heroInfo}
            setHeroInfo={setHeroInfo}
          />
        )}
      </div>
      <p>{response}</p>
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
      hsid: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  setHeroInfo: PropTypes.func.isRequired,
  setRefresh: PropTypes.func.isRequired,
  refresh: PropTypes.bool.isRequired,
};
