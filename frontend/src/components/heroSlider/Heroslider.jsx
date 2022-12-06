import React, { useState } from "react";
import C from "react-multi-carousel";
import Sliderdata from "./Sliderdata";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 375 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Heroslider() {
  const Carousel = C.default ? C.default : C;

  const [sliderInfo] = useState([]);

  return (
    <div className="heroslider">
      {sliderInfo.length > 1 && (
        <Carousel
          containerClass="heroslider_carousel"
          responsive={responsive}
          infinite
        >
          {sliderInfo.map((infos) => {
            return (
              <div key={infos.id}>
                <Sliderdata />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default Heroslider;
