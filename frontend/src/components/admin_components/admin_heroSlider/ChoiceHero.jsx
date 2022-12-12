import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FaBroom } from "react-icons/fa";

function ChoiceHero({ id, heroInfo, setHeroInfo }) {
  const [cat, setCat] = useState([]);
  const [videos, setVideos] = useState([]);
  const [valueCat, setValueCat] = useState("");
  const [valueVideo, setValueVideo] = useState("");
  const [response, setResponse] = useState("");
  const getCat = () => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/categories`)
      .then((res) => {
        setCat(res.data);
      });
  };
  const getVideos = () => {
    axios
      .get(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/videos/categories/${valueCat}`
      )
      .then((res) => {
        setVideos(res.data);
      });
  };

  const updateHero = () => {
    axios
      .put(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/hero_slider/${id}`,
        {
          fkVideo: `${valueVideo}`,
        }
      )
      .then((res) => {
        const tmp = [...heroInfo];
        const video = videos.find(
          (yop) => yop.id.toString() === valueVideo.toString()
        );
        tmp[id - 1] = {
          cat: video.cat,
          title: video.title,
          id: video.id,
          description: video.description,
          display: video.display,
          url: video.url,
          year: video.year,
          hsid: id,
        };
        setHeroInfo(tmp);
        setResponse(res.data);
      });
  };

  const handleChange = (e) => {
    setValueCat(e.target.value);
  };
  const handleChange2 = (e) => {
    setValueVideo(e.target.value);
  };

  useEffect(() => {
    getCat();
  }, []);
  useEffect(() => {
    if (valueCat !== "") getVideos();
  }, [valueCat]);

  return (
    <div className="choicehero">
      <form className="choicehero_cat">
        <label className="choicehero_cat_name" htmlFor="category-select">
          Category name{" "}
          {cat.length > 1 && (
            <select
              className="choicehero_cat_name_select"
              id="category-select"
              onChange={handleChange}
            >
              <option value="">---</option>
              {cat.map((infos) => {
                return (
                  <option key={infos.id} value={infos.id}>
                    {infos.name}
                  </option>
                );
              })}
            </select>
          )}
        </label>
      </form>
      {videos.length > 1 && (
        <form className="choicehero_video">
          <label className="choicehero_video_name" htmlFor="video-select">
            Video name{" "}
            <select
              className="choicehero_video_name_select"
              id="video-select"
              onChange={handleChange2}
            >
              <option value="">---</option>
              {videos.map((infos) => {
                return (
                  <option key={infos.id} value={infos.id}>
                    {infos.title}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      )}
      {valueVideo !== "" && (
        <button
          className="choicehero_submit"
          type="button"
          onClick={updateHero}
        >
          Apply <FaBroom />
        </button>
      )}
      <p>{response}</p>
    </div>
  );
}

export default ChoiceHero;

ChoiceHero.propTypes = {
  id: PropTypes.number.isRequired,
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
