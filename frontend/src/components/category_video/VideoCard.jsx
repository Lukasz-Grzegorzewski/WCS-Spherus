import React from "react";
import PropTypes from "prop-types";
import HoverVideoPlayer from "react-hover-video-player";
import { CiLock } from "react-icons/ci";

function VideoCard({ url, title, description, display }) {
  const videoUrl = `http://localhost:5000/${url}`;

  return display ? (
    <div className="videocard">
      <HoverVideoPlayer
        videoClassName="videocard_video"
        className="videocard_video"
        videoSrc={videoUrl}
        muted
        playbackRangeStart={0}
        playbackRangeEnd={6}
      />
      <div>{title}</div>
      <div>{description}</div>
    </div>
  ) : (
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
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

VideoCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  display: PropTypes.number.isRequired,
};

export default VideoCard;
