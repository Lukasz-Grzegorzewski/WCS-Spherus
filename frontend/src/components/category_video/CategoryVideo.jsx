import Heroslider from "@components/heroSlider/Heroslider";
import axios from "axios";
import React, { useState, useEffect } from "react";

function CategoryVideo() {
  const id = "astro";

  const [video, setVideo] = useState();

  const getVideo = () => {
    axios.get(`http://localhost5000/`).then((res) => {
      setVideo(res.data);
    });
  };
  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="category_video">
      <Heroslider />
      <div className="category_video_main">
        {video.map((e) => (
          <div>
            <div>{e.name}</div>
            <div className="category_video_container">
              <div className="category_video_card">
                <div>video url{id}</div>
                <div>{e.title}</div>
                <div>{e.description}</div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default CategoryVideo;
