import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import ButtonDeleteCat from "./ButtonDeleteCat";
import ButtonOpenModify from "./ButtonOpenModify";

function Categories({ catId, getCategories /* , catName  */ }) {
  const [selectVideos, setSelectVideos] = useState([]);
  const getVideosByCategorie = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/videos/categories/${catId}`)
      .then((res) => {
        setSelectVideos(res.data);
        console.warn("ceci est res.data : ");
        console.warn(typeof res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getVideosByCategorie();
  }, [catId]);

  const concat = `${import.meta.env.VITE_PORT_BACKEND}`;

  return (
    <div>
      <ButtonDeleteCat
        idCategory={catId}
        getCategories={() => getCategories()}
      />

      <ButtonOpenModify
        getCategories={() => getCategories()}
        idCategory={catId}
        /* catName={catName} */
      />

      {selectVideos &&
        typeof selectVideos === "object" &&
        selectVideos.map(
          (
            elem /* el código typeof escrito así permite esperar un objeto en este caso, y si no, no lo recibe */
          ) => (
            <div>
              <HoverVideoPlayer
                videoClassName="videocard_video"
                className="videocard_video"
                videoSrc={concat + elem.url}
                muted
                playbackRangeStart={0}
                playbackRangeEnd={6}
              />
              <p>{elem.title}</p>
            </div>
          )
        )}
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  catId: PropTypes.number.isRequired,
  getCategories: PropTypes.func.isRequired,
};
