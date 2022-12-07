import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Sliderdata({ id, title, date, cat, url, display }) {
  const year = date?.substring(0, 9);
  const videoUrl = `backend/public${url}`;

  return (
    <div className="sliderdata">
      <video className="sliderdate_video">
        <source src={videoUrl} type="video/mp4" />
        <track
          src={title}
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </video>
      <p>{id}</p>
      <p>{cat}</p>
      <p>{display}</p>
      <p>{year}</p>
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
  display: PropTypes.number.isRequired,
};
