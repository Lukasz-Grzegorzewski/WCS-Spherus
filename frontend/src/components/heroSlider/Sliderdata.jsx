import React from "react";
import PropTypes from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";
// import { GrResume } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sliderdata({ id, title, date, cat, url }) {
  const year = date?.substring(0, 7);
  const videoUrl = `http://localhost:${
    import.meta.env.VITE_PORT_BACKEND
  }/${url}`;

  return (
    <div className="sliderdata">
      <div className="sliderdata_video">
        <HoverVideoPlayer
          videoClassName="sliderdata_video"
          className="sliderdata_video"
          videoSrc={videoUrl}
          muted
          playbackRangeStart={0}
          playbackRangeEnd={6}
        />
      </div>
      <div className="sliderdata_infos">
        <p className="sliderdata_infos_name">
          {title} - {year}
        </p>
        <p className="sliderdata_infos_cat">Category : {cat}</p>
        <Link to={`/videos/${id}`}>
          <button type="button" className="sliderdata_infos_btn">
            {" "}
            Watch{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Sliderdata;

Sliderdata.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
