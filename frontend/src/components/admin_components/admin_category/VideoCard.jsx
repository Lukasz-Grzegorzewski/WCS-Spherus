import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import PropTypes from "prop-types";

function VideoCard({ elem }) {
  const concat = `${import.meta.env.VITE_PORT_BACKEND}`;

  return (
    <div>
      <div className="videocard">
        <HoverVideoPlayer
          videoClassName="videocard_video"
          className="videocard_video"
          videoSrc={concat + elem.url}
          muted
          playbackRangeStart={0}
          playbackRangeEnd={6}
        />

        <div className="videocard_video_description">
          <p>{elem.title}</p>
          <p>{elem.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

VideoCard.propTypes = {
  elem: PropTypes.node.isRequired,
};
