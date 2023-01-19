import React, { useState, useEffect } from "react";
import axios from "axios";
import C from "react-multi-carousel";
import VideoCard from "../category_video/VideoCard";
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

function Fixtures() {
  const Carousel = C.default ? C.default : C;

  const [fixtures, setFixtures] = useState([]);
  const [displayFixtures, setDisplayFixtures] = useState({});

  const getInfos = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/fixtures`)
      .then((res) => setFixtures(res.data))
      .catch((err) => console.error(err));
  };

  const getFixturesName = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/display_fixtures`)
      .then((res) => setDisplayFixtures(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getInfos();
    getFixturesName();
  }, []);

  return (
    <div className="section_container">
      {fixtures?.length >= 0 && (
        <div>
          <div className="section_navigation">
            {fixtures.length !== 0 && (
              <div className="section_name">{displayFixtures.name}</div>
            )}
          </div>

          <Carousel containerClass="section_carousel" responsive={responsive}>
            {fixtures.map((infos) => (
              <div className="section_card" key={infos.id}>
                <VideoCard
                  id={infos.id}
                  url={infos.url}
                  title={infos.title}
                  description={infos.description}
                  display={infos.display}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default Fixtures;
