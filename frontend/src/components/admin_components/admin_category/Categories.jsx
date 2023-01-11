import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import ButtonDeleteCat from "./ButtonDeleteCat";
import ButtonOpenModify from "./ButtonOpenModify";

function Categories({ catId, getCategories, catName, setCatId }) {
  const [selectVideos, setSelectVideos] = useState([]);
  const concat = `${import.meta.env.VITE_PORT_BACKEND}`;

  const getVideosByCategorie = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/videos/categories/${catId}`)
      .then((res) => {
        setSelectVideos(res.data);
        console.warn("ceci est res.data : ");
        console.warn(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getVideosByCategorie();
  }, [catId]);

  function deleteVideoFromCat(videoId) {
    axios
      .delete(
        `${import.meta.env.VITE_PORT_BACKEND}/videos/cat/${videoId}/${catId}`
      )
      .then(() => {
        getVideosByCategorie();
      })

      .catch((err) => console.warn(err));
  }

  return (
    <div>
      <ButtonDeleteCat
        catId={catId}
        setCatId={(value) => setCatId(value)}
        getCategories={() => getCategories()}
      />

      <ButtonOpenModify
        getCategories={() => getCategories()}
        catId={catId}
        catName={catName}
      />

      {selectVideos &&
        typeof selectVideos ===
          "object" /* el código typeof escrito así permite esperar un objeto en este caso, y si no, no lo recibe */ &&
        selectVideos.map((elem) => (
          <div className="" key={elem.id}>
            <HoverVideoPlayer
              videoClassName="videocard_video"
              className="videocard_video"
              videoSrc={concat + elem.url}
              muted
              playbackRangeStart={0}
              playbackRangeEnd={6}
            />
            <p>{elem.title}</p>
            <button type="button" onClick={() => deleteVideoFromCat(elem.id)}>
              delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  catId: PropTypes.number.isRequired,
  catName: PropTypes.string.isRequired,
  getCategories: PropTypes.func.isRequired,
  setCatId: PropTypes.func.isRequired,
};
