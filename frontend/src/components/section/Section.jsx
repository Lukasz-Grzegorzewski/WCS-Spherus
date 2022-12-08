import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import VideoCard from "@components/category_video/VideoCard";

function Section({ id }) {
  const [video, setVideo] = useState([]);

  const getVideo = () => {
    axios
      .get(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/videos/categories/${id}`
      )
      .then((res) => {
        setVideo(res.data);
      });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="section_container">
      {video.map((v) => (
        <div className="section_card" key={v.id}>
          <VideoCard
            id={v.id}
            url={v.url}
            title={v.title}
            description={v.description}
            display={v.display}
          />
        </div>
      ))}
    </div>
  );
}
Section.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Section;
