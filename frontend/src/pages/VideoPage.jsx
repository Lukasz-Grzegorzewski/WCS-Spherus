import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../components/video_page/Video";

function VideoPage() {
  const [video, setVideo] = useState();

  const { idVid } = useParams();

  function getVideo(idArg) {
    axios
      .get(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/videos/cat/${idArg}`
      )
      .then((res) => {
        // console.warn("result", res.data[0]);
        setVideo(res.data[0]);
      });
  }

  useEffect(() => {
    getVideo(idVid);
  }, []);

  return (
    <div className="video-container">
      {video && (
        <Video
          title={video.title}
          description={video.description}
          category={video.cat}
          date={video.date}
          display={video.display}
          videoUrl={video.url}
        />
      )}
    </div>
  );
}

export default VideoPage;
