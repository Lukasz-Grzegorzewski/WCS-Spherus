import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import VideoCard from "@components/category_video/VideoCard";
import Advert from "@components/advert/Advert";
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

function Section({ type, idLink }) {
  const Carousel = C.default ? C.default : C;

  const [category, setCategory] = useState([]);

  const getInfos = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/videos/categories/${idLink}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (type === 1) {
      getInfos();
    }
  }, []);

  return (
    <div className="section_container">
      {type === 1 && (
        <div>
          {category.length >= 1 && (
            <div>
              <div className="section_navigation">
                <NavLink to={`/categories/${idLink}`}>
                  <div className="section_name">{category[0].cat}</div>
                </NavLink>
                <div className="section_seeMoreBtn">
                  <NavLink to={`/categories/${idLink}`}>
                    <div className="section_seeMoreBtn_btn">See more</div>
                  </NavLink>
                </div>
              </div>

              <Carousel
                containerClass="section_carousel"
                responsive={responsive}
              >
                {category.map((infos) => (
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
      )}

      {type === 2 && (
        <div>
          <Advert id={idLink} />
        </div>
      )}
    </div>
  );
}
Section.propTypes = {
  type: PropTypes.number.isRequired,
  idLink: PropTypes.number.isRequired,
};
export default Section;
