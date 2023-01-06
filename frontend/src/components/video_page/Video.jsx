import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { CiLock } from "react-icons/ci";
import Section from "@components/section/Section";

function Video({
  arrCatId,
  title,
  description,
  arrCatName,
  date,
  display,
  videoUrl,
}) {

  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const refVideo = useRef();
  const url = `${import.meta.env.VITE_PORT_BACKEND}${videoUrl}`;

  const handleMouseOver = () => {
    setIsHovering(true);
    // setInterval(() => {
    //   setIsHovering(false);
    // }, 3000);
    // console.log("mouseHover-IN");
  };

  const handleMouseOut = () => {
    // if (!isPlaying) {
    //   console.log("isPlaying :", isPlaying);
    //   setIsHovering(false);
    // };
    setIsHovering(false);
    // console.log("mousHover-OUT");
  };

  function handleOnPlay() {
    setIsPlaying(true);
    setInterval(() => {
      setIsPlaying(false);
    }, 3000);
    // console.log("PLAYED");
  }
  function handleOnPause() {
    setIsPlaying(false);
    // setIsHovering(true);
    // setInterval(() => {
    //   setIsHovering(false);
    // }, 3000);
    // console.log("PAUSED");
  }

  const url = `${import.meta.env.VITE_PORT_BACKEND}${videoUrl}`;


  return (
    <div className="video-component">
      {/* VIDEO */}
      <div
        className="video-player"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onBlur={handleMouseOver}
      >
        {display === 1 ? (
          <video
            ref={refVideo}
            onPlay={handleOnPlay}
            onPause={handleOnPause}
            className="video"
            src={url}
            controls
          >
            <track kind="captions" />
          </video>
        ) : (
          <video
            ref={refVideo}
            onPlay={handleOnPlay}
            className="video locked"
            src={url}
          >
            <track kind="captions" />
          </video>
        )}
        {(isHovering || isPlaying) && (
          <div className="info-video">
            <p className="video-title">{title}</p>
            <p className="video-desc">{description}</p>
            <div className="video-categories-container">
              Category :
              {arrCatName?.map((item) => {
                return (
                  <p key={item} className="video-category">
                    {item}
                  </p>
                );
              })}
            </div>

            <p className="video-date">Date : {date}</p>
          </div>
        )}
      </div>
      {/* END VIDEO */}
      {/* DESCRIPTION */}
      <div className="description">
        {display === 0 && (
          <div className="lock-container">
            <CiLock className="lock-icon" />
            <p className="lock-desc">
              Content is not available for non subscribers
            </p>
            <button type="button" className="btn btn-subscribe">
              <NavLink to="/registration">Subscribe</NavLink>
            </button>
          </div>
        )}
        <div className="info_container">
          <hr />
          <h1 className="info">Description</h1>
          <p className="p-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            finibus volutpat nisi eu rhoncus. Ut venenatis vitae velit sed
            vulputate. Etiam pharetra erat massa,vitae tempor erat varius id.
            Praesent non dui ermentum, viverra felis vel, consectetur nulla.
            Donec sodales eros at lorem aliquam, id vehicula nulla aliquam. Sed
            faucibus.
          </p>
        </div>
      </div>
      {/* END DESCRIPTION */}
      <div className="section-container">
        <hr />
        {arrCatId?.map((item) => {
          return <Section key={item} type={1} idLink={item} />;
        })}
      </div>
    </div>
  );
}

export default Video;

Video.propTypes = {
  arrCatId: PropTypes.arrayOf(PropTypes.number).isRequired,
  arrCatName: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  display: PropTypes.number.isRequired,
};
