import Heroslider from "@components/heroSlider/Heroslider";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";

function CategoryVideo() {
  const { id } = useParams();

  const [video, setVideo] = useState([]);

  const getVideo = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/videos/categories/${id}`)
      .then((res) => {
        setVideo(res.data);
      });
  };

  useEffect(() => {
    getVideo();
  }, [id]);

  return (
    <div className="category_video">
      <Heroslider />
      <div className="category_video_main">
        <div className="category_video_main_name">
          {video.length > 1 && video[0].cat}
        </div>
        <div className="category_video_main_container">
          {video.map((e) => (
            <div key={e.id}>
              <VideoCard
                id={e.id}
                url={e.url}
                title={e.title}
                description={e.description}
                display={e.display}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryVideo;
