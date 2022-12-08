import React from "react";
import PropTypes from "prop-types";

function VideoCard({ url, title, description, display }) {
  const videoUrl = `http://localhost:5000/${url}`;

  return display ? (
    <div className="videocard">
      <video className="videocard_video">
        <source src={videoUrl} type="video/mp4" />
        <track
          source={title}
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </video>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  ) : (
    <div className="videocard_veil">
      <video className="videocard_video">
        <source src={videoUrl} type="video/mp4" />
        <track
          source={title}
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </video>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

VideoCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
};

export default VideoCard;
