import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import PropTypes from "prop-types";

function VideoCard({ elem, setShowVideoCard }) {
  const concat = `${import.meta.env.VITE_PORT_BACKEND}`;

const numAleat = Math.floor(Math.random() * 10) 
console.log(numAleat);
  return (
    <div className="delete_popup_box">
      <div className="popup_box videocard">
      <button onClick={setShowVideoCard}>X</button>
        <HoverVideoPlayer
          videoClassName="videocard_video"
          className="videocard_video"
          videoSrc={concat + elem.url}
          muted
          playbackRangeStart={numAleat}
          playbackRangeEnd={numAleat + 6}
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
