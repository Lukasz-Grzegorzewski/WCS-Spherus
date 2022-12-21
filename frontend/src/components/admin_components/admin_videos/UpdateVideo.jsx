import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateVideos() {
  const [video, setVideo] = useState([]);
  const [videoDetails, setVideoDetails] = useState({
    id: "",
    title: "",
    description: "",
    display: "",
    date: null,
  });

  const getVideo = () => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/videos`)
      .then((res) => {
        setVideo(res.data);
      })
      .catch(() => {
        console.error("video not found");
      });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="update_video_container">
      <div>UpdateVideos</div>
      <div className="upload_video_selection">
        {video.length > 0 && (
          <select
            className="upload_video_select"
            onChange={(e) => {
              setVideoDetails(JSON.parse(e.target.value));
            }}
          >
            <option value="">---</option>
            {video.map((v) => (
              <option
                value={JSON.stringify({
                  id: v.id,
                  title: v.title,
                  description: v.description,
                  display: v.display,
                  date: v.date,
                })}
              >
                {v.title}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="update_video_form_container">
        <form action="" className="update_video_form">
          <div>
            <div>Current title: {videoDetails.title}</div>
            <label htmlFor="title" className="update_video_title_label">
              Change title
            </label>
            <input
              type="text"
              id="title"
              className="update_video_title_select"
              value={videoDetails.title}
              placeholder={videoDetails.title}
              onChange=""
            />
          </div>

          <div>
            <div>Current description: {videoDetails.description}</div>
            <label
              htmlFor="description"
              className="update_video_description_label"
            >
              Change description
            </label>
            <input
              type="text"
              id="description"
              className="update_video_description_select"
              value={videoDetails.description}
              placeholder={videoDetails.description}
              onChange=""
            />
          </div>

          <div>
            <div>Current display: {videoDetails.display}</div>
            <label htmlFor="display" className="update_video_display_label">
              Change display (1 =available; 0 = locked)
            </label>
            <input
              type="text"
              id="display"
              className="update_video_display_select"
              value={videoDetails.display}
              placeholder={videoDetails.display}
              onChange=""
            />
          </div>

          <div>
            <div>Current date: {videoDetails.date}</div>
            <label htmlFor="date" className="update_video_date_label">
              Change date
            </label>

            <input
              type="date"
              id="date"
              className="update_video_date_select"
              // value={videoDetails.date}
              // placeholder={videoDetails.date}
              onChange=""
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateVideos;
