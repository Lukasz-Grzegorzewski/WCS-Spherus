import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PopupVideo from "./PopupVideo";

function UpdateVideos({ video }) {
  const [check, setCheck] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    id: "",
    title: "",
    description: "",
    display: "",
    date: "",
  });

  const modifyVideo = (e) => {
    e.preventDefault();

    axios
      .patch(
        `${import.meta.env.VITE_PORT_BACKEND}/videos/${videoDetails.id}`,
        videoDetails
      )
      .then(() => {
        setCheck(true);
      })
      .catch(() => {
        console.error("video not modified");
      });
  };

  return (
    <div className="update_video_container">
      <div className="update_video_title">UpdateVideos</div>
      {check === false ? (
        <div className="update_video_selection">
          <div className="update_video_selection_cont">
            {video.length > 0 && (
              <select
                className="update_video_select"
                onChange={(e) => {
                  setVideoDetails(JSON.parse(e.target.value));
                }}
              >
                <option className="update_video_option" value="">
                  ---
                </option>
                {video.map((v) => (
                  <option
                    key={v.id}
                    value={JSON.stringify({
                      id: v.id,
                      title: v.title,
                      description: v.description,
                      display: v.display,
                      date: v.date.split("T")[0],
                    })}
                  >
                    {v.title}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="update_video_form_container">
            <form onSubmit={modifyVideo} className="update_video_form">
              <div>
                <div className="update_video_form_current">
                  Current title: {videoDetails.title}
                </div>
                <label htmlFor="title" className="update_video_title_label">
                  Change title
                </label>
                <input
                  type="text"
                  id="title"
                  className="update_video_title_select"
                  value={videoDetails.title}
                  placeholder={videoDetails.title}
                  onChange={(e) =>
                    setVideoDetails({ ...videoDetails, title: e.target.value })
                  }
                />
              </div>

              <div>
                <div className="update_video_form_current">
                  Current description: {videoDetails.description}
                </div>
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
                  onChange={(e) =>
                    setVideoDetails({
                      ...videoDetails,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <div className="update_video_form_current">
                  Current display: {videoDetails.display}
                </div>
                <label htmlFor="display" className="update_video_display_label">
                  Change display (1 =available; 0 = locked)
                </label>
                <input
                  type="text"
                  id="display"
                  className="update_video_display_select"
                  value={videoDetails.display}
                  placeholder={videoDetails.display}
                  onChange={(e) =>
                    setVideoDetails({
                      ...videoDetails,
                      display: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <div className="update_video_form_current">
                  Current date: {videoDetails.date}
                </div>
                <label htmlFor="date" className="update_video_date_label">
                  Change date
                </label>

                <input
                  type="date"
                  id="date"
                  className="update_video_date_select"
                  value={videoDetails.date}
                  placeholder={videoDetails.date}
                  onChange={(e) =>
                    setVideoDetails({ ...videoDetails, date: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="update_video_update_btn"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <PopupVideo setCheck={setCheck} />
        </div>
      )}
    </div>
  );
}
UpdateVideos.propTypes = {
  video: PropTypes.string.isRequired,
};

export default UpdateVideos;
