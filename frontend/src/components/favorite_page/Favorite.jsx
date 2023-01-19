import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import VideoCard from "@components/category_video/VideoCard";
import UserContext from "../../UserContext";

function Favorite() {
  const token = useContext(UserContext);

  const [favorite, setFavorite] = useState([]);

  const getFavorite = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/favorites/${token.id}`)
      .then((res) => {
        setFavorite(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <div>
      <div className="category_video_main_name">{favorite.length >= 1}</div>
      <div className="category_video_main_container">
        {favorite.map((e) => (
          <div key={e.idCat}>
            {e.catName}
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
  );
}

export default Favorite;
