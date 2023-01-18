import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";
import { CiLock } from "react-icons/ci";
import { FaStar, FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UserContext from "../../UserContext";

function VideoCard({ id, url, title, description, display }) {
  const videoUrl = `${import.meta.env.VITE_PORT_BACKEND}${url}`;
  const [favBtn, setFavBtn] = useState(false);
  const token = useContext(UserContext);

  const handleClick = () => {
    setFavBtn(!favBtn);
  };

  return (
    <div>
      {token.user_token !== "" ? (
        <div className="main">
          <button
            type="button"
            className="videocard_fav_btn"
            onClick={handleClick}
          >
            {favBtn ? (
              <FaStar className="videocard_fav_btn_on" />
            ) : (
              <FaRegStar className="videocard_fav_btn_off" />
            )}
          </button>
          <NavLink to={`/videos/${id}`}>
            <div className="videocard">
              <HoverVideoPlayer
                videoClassName="videocard_video"
                className="videocard_video"
                videoSrc={videoUrl}
                muted
                playbackRangeStart={0}
                playbackRangeEnd={6}
              />

              <div className="videocard_video_description">
                <div>{title}</div>
                <div>{description}</div>
              </div>
            </div>
          </NavLink>
        </div>
      ) : display === 1 ? (
        <div className="main">
          <button
            type="button"
            className="videocard_fav_btn"
            onClick={handleClick}
          >
            {favBtn ? (
              <FaStar className="videocard_fav_btn_on" />
            ) : (
              <FaRegStar className="videocard_fav_btn_off" />
            )}
          </button>
          <NavLink to={`/videos/${id}`}>
            <div className="videocard">
              <HoverVideoPlayer
                videoClassName="videocard_video"
                className="videocard_video"
                videoSrc={videoUrl}
                muted
                playbackRangeStart={0}
                playbackRangeEnd={6}
              />

              <div className="videocard_video_description">
                <div>{title}</div>
                <div>{description}</div>
              </div>
            </div>
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to={`/videos/${id}`}>
            <div className="videocard_veil">
              <HoverVideoPlayer
                videoClassName="videocard_veil_video"
                className="videocard_veil_video"
                videoSrc={videoUrl}
                muted
                playbackRangeStart={0}
                playbackRangeEnd={6}
              />
              <CiLock className="videocard_veil_lock" />

              <div className="videocard_veil_video_description">
                <div>{title}</div>
                <div>{description}</div>
              </div>
            </div>
          </NavLink>
        </div>
      )}
      {/* display ? (
      <div className="main">
        <button type="button" className="videocard_fav_btn" onClick={handleClick}>
          {favBtn ? (
            <FaStar className="videocard_fav_btn_on" />
          ) : (
            <FaRegStar className="videocard_fav_btn_off" />
          )}
        </button>
        <NavLink to={`/videos/${id}`}>
          <div className="videocard">
            <HoverVideoPlayer
              videoClassName="videocard_video"
              className="videocard_video"
              videoSrc={videoUrl}
              muted
              playbackRangeStart={0}
              playbackRangeEnd={6}
            />

            <div className="videocard_video_description">
              <div>{title}</div>
              <div>{description}</div>
            </div>
          </div>
        </NavLink>
      </div>
      ) : (
      <NavLink to={`/videos/${id}`}>
        <div className="videocard_veil">
          <HoverVideoPlayer
            videoClassName="videocard_veil_video"
            className="videocard_veil_video"
            videoSrc={videoUrl}
            muted
            playbackRangeStart={0}
            playbackRangeEnd={6}
          />
          <CiLock className="videocard_veil_lock" />

          <div className="videocard_veil_video_description">
            <div>{title}</div>
            <div>{description}</div>
          </div>
        </div>
      </NavLink>
      ); */}
    </div>
  );
}

VideoCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  display: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default VideoCard;
