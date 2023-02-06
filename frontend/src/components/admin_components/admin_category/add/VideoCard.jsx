import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import PropTypes from "prop-types";

function VideoCard({ elem, showVideoCard, setShowVideoCard }) {
  const concat = `${import.meta.env.VITE_PORT_BACKEND}`;
  const numAleat = Math.floor(Math.random() * 10) 
console.log(elem.id)
  return (
    <div className="video-preview">
      <button
                className="deleteBtn close"
                type="button"
                onClick={() => setShowVideoCard(showVideoCard ? null : elem.id)}
              >
                <p>Show more</p>
              </button>
              {showVideoCard && showVideoCard === elem.id && 
                <HoverVideoPlayer
                  videoClassName="videocard_video"
                  className="videocard_video"
                  videoSrc={concat + elem.url}
                  muted
                  playbackRangeStart={numAleat}
                  playbackRangeEnd={numAleat + 6}
                /> 
              }
      
    </div>
  );
}

export default VideoCard;

VideoCard.propTypes = {
  elem: PropTypes.node.isRequired,
};
