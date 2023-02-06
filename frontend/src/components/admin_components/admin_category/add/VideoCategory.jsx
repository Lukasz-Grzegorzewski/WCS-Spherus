import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import PropTypes from "prop-types";

function VideoCategory({ elem }) {
  const concat = `${import.meta.env.VITE_PORT_BACKEND}`;
  const numAleat = Math.floor(Math.random() * 10);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="video-info"
      key={`${elem.id}-${Math.floor(Math.random() * 100)}`}
    >
      <p className="card-title">{elem.title}</p>
      <p className="card-id">{elem.id}</p>
      <button
        className="deleteBtn close"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <p>Show more</p>
      </button>
      {open && (
        <HoverVideoPlayer
          videoClassName="videocard_video"
          className="videocard_video"
          videoSrc={concat + elem.url}
          muted
          playbackRangeStart={numAleat}
          playbackRangeEnd={numAleat + 6}
        />
      )}
    </div>
  );
}

export default VideoCategory;

VideoCategory.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};
