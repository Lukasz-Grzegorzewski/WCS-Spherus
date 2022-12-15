import React, { useState } from "react";
import axios from "axios";

function AdminVideos() {
  const [file, setFile] = useState({});
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    display: "",
    date: null,
  });

  const uploadVideo = (data) => {
    axios
      .post(
        `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/videos`,
        data
      )
      .catch(() => {
        console.error("video not uploaded");
      });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", videoDetails.title);
    data.append("description", videoDetails.description);
    data.append("display", videoDetails.display);
    data.append("date", videoDetails.date);
    data.append("file", file);
    uploadVideo(data);
  };

  return (
    <div>
      <div className="adminvideo_container">
        <div>
          <form action="" onSubmit={handleUpload} className="uplod_video">
            <label htmlFor="file">Upload a video</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".mp4"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />

            <input
              type="text"
              id="title"
              value={videoDetails.title}
              placeholder="Enter the video title"
              onChange={(e) =>
                setVideoDetails({ ...videoDetails, title: e.target.value })
              }
            />
            {videoDetails.title}

            <input
              type="text"
              id="description"
              value={videoDetails.description}
              placeholder="Enter the video description"
              onChange={(e) =>
                setVideoDetails({
                  ...videoDetails,
                  description: e.target.value,
                })
              }
            />
            {videoDetails.description}

            <label htmlFor="display">
              Display video?{" "}
              <select
                className="display"
                id="display"
                value={videoDetails.display}
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, display: e.target.value })
                }
              >
                <option value="0">locked</option>
                <option value="1">available</option>;
              </select>
            </label>

            <input
              type="date"
              value={videoDetails.date}
              id="date"
              placeholder="date of upload"
              onChange={(e) =>
                setVideoDetails({ ...videoDetails, date: e.target.value })
              }
            />
            {videoDetails.date}
            <input type="submit" value="Upload" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminVideos;
