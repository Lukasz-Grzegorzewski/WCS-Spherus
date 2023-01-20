import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import VideoCard from "../VideoCard";

function ShowVideos({ catId, getVideosByCategorie }) {
  const [showVids, setShowVids] = useState(false);
  const [getVideosForAdd, setGetVideosForAdd] = useState([]);
  const [showVideoCard, setShowVideoCard] = useState(null);
  const [pushArray, setPushArray] = useState([]);

  const getVideos = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/videos`)
      .then((res) => {
        setGetVideosForAdd(res.data);
        console.warn("gdhsgy", res.data);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getVideos();
  }, []);

  function handleshowVids() {
    setShowVids(!showVids);
  }

  const handleCheckBox = (id) => {
    const found = pushArray.findIndex((elem) => elem === id);
    if (found === -1) {
      setPushArray([...pushArray, id]);
    } else {
      const tmp = pushArray.filter((elem) => elem !== id);
      setPushArray(tmp);
    }
  };

  function pushVideos() {
    pushArray.forEach((elem) => {
      axios
        .post(`${import.meta.env.VITE_PORT_BACKEND}/category/video`, {
          videoId: elem,
          categoryId: catId,
        })
        .then(() => {
          getVideosByCategorie();
          handleshowVids(false);
          setPushArray([]);
        })
        .catch((err) => console.warn(err));
    });
  }

  return (
    <div>
      <div className="add-videos-buttons">
        <button type="button" onClick={() => handleshowVids()}>
          {showVids ? "CLOSE" : "ADD VIDEOS"}
        </button>
        {showVids && (
          <button type="button" onClick={pushVideos}>
            ADD !
          </button>
        )}
      </div>
      {showVids &&
        getVideosForAdd &&
        getVideosForAdd.map((elem) => (
          <div
            className=""
            key={`${elem.id}-${Math.floor(Math.random() * 100)}`}
          >
            <p>{elem.title}</p>
            <p>{elem.id}</p>
            <button
              type="button"
              onClick={() => setShowVideoCard(showVideoCard ? null : elem.id)}
            >
              Show more
            </button>
            {showVideoCard && showVideoCard === elem.id && (
              <VideoCard elem={elem} />
            )}
            <input
              name={elem.name}
              type="checkbox"
              checked={!!(pushArray.length > 0 && pushArray.includes(elem.id))}
              onChange={() => handleCheckBox(elem.id)}
            />
            <label htmlFor={elem.name}>Add video</label>
          </div>
        ))}
    </div>
  );
}

export default ShowVideos;

ShowVideos.propTypes = {
  getVideosByCategorie: PropTypes.func.isRequired,
  catId: PropTypes.node.isRequired,
};
