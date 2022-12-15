import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";
import { FaPenFancy } from "react-icons/fa";
import ChoiceHero from "./ChoiceHero";

function ActuallyHeroSlider({ id, idVid, title, url, refresh, setRefresh }) {
  const videoUrl = `http://localhost:${
    import.meta.env.VITE_PORT_BACKEND
  }/${url}`;

  const [choice, setChoice] = useState(false);
  const [response, setResponse] = useState("");
  const [cat, setCat] = useState([]);

  const getCat = () => {
    axios
      .get(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/hero_slider/catname/${idVid}`
      )
      .then((res) => {
        setCat(res.data);
      });
  };

  useEffect(() => {
    getCat();
  }, []);

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
      <p className="actuallyHeroSlider_cat">
        Category :{" "}
        {cat.length >= 1 &&
          cat
            .map((infos) => `${infos.name}, `)
            .join("")
            .slice(0, -2)}{" "}
      </p>
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
            choice={choice}
            setChoice={setChoice}
            refresh={refresh}
            setRefresh={setRefresh}
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
  id: PropTypes.number.isRequired,
  idVid: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  setRefresh: PropTypes.func.isRequired,
  refresh: PropTypes.bool.isRequired,
};
