import React, { useState, useEffect } from "react";
import axios from "axios";

function ChoiceHero() {
  const [cat, setCat] = useState([]);
  const [videos, setVideos] = useState([]);
  const [valueCat, setValueCat] = useState("");
  const [valueVideo, setValueVideo] = useState("");

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
    getVideos();
  }, [valueCat]);

  return (
    <div>
      <form className="center">
        <label htmlFor="category-select">
          Category name{" "}
          {cat.length > 1 && (
            <select id="category-select" onChange={handleChange}>
              <option value="">---</option>
              {cat.map((infos) => {
                return <option value={infos.id}>{infos.name}</option>;
              })}
            </select>
          )}
        </label>
      </form>
      {videos.length > 1 && (
        <form className="center">
          <label htmlFor="video-select">
            Video name{" "}
            {videos.length > 1 && (
              <select id="video-select" onChange={handleChange2}>
                <option value="">---</option>
                {videos.map((infos) => {
                  return <option value={infos.id}>{infos.title}</option>;
                })}
              </select>
            )}
          </label>
        </form>
      )}
      <p>{valueVideo}</p>
    </div>
  );
}

export default ChoiceHero;
