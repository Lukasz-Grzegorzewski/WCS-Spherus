import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import VideoCard from "@components/category_video/VideoCard";
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop2: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop1: {
    breakpoint: { max: 1200, min: 850 },
    items: 3,
    slidesToSlide: 2,
  },
  tablette: {
    breakpoint: { max: 850, min: 570 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 570, min: 320 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Section({ id }) {
  const Carousel = C.default ? C.default : C;

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
      <Carousel
        containerClass="section_carousel"
        responsive={responsive}
        // infinite
      >
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
      </Carousel>
    </div>
  );
}
Section.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Section;
