import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import VideoCard from "../VideoCard";
import MessageErrorAdding from "./MessageErrorAdding";

function ShowVideos({ catId, getVideosByCategorie, setShowSelectedVideos }) {
  const [showVids, setShowVids] = useState(false);
  const [getVideosForAdd, setGetVideosForAdd] = useState([]);
  const [showVideoCard, setShowVideoCard] = useState(null);
  const [pushArray, setPushArray] = useState([]);
  const [errorMessageSend, setErrorMessageSend] = useState(false);

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
    setShowSelectedVideos();
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
    if (pushArray.length > 0) {
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
            setErrorMessageSend(false);
          })
          .catch((err) => console.warn(err));
      });
    } else {
      setErrorMessageSend(true);
    }
  }

  return (
    <div className="show-videos">
      <div className="open-all-buttons">
        {showVids && (
          <button
            className={showVids ? "submitBtn open" : "submitBtn close"}
            type="button"
            onClick={pushVideos}
          >
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                />
              </svg>
            </div>
            <span>Add videos</span>
          </button>
        )}

        <div className="open-add-videos-button">
          <button
            type="button"
            className={showVids ? "deleteBtn close" : "deleteBtn open"}
            onClick={() => handleshowVids()}
          >
            {showVids ? "X" : "Add videos"}
          </button>
        </div>
      </div>

      {errorMessageSend && (
        <MessageErrorAdding setErrorMessageSend={() => setErrorMessageSend()} />
      )}
      {showVids &&
        getVideosForAdd &&
        getVideosForAdd.map((elem) => (
          <div
            className="video-list-to-add"
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
  setShowSelectedVideos: PropTypes.func.isRequired,
};
