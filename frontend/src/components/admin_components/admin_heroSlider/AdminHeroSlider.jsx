import React, { useEffect, useState } from "react";
import axios from "axios";
import ActuallyHeroSlider from "./ActuallyHeroSlider";

function AdminHeroSlider() {
  const [heroInfo, setHeroInfo] = useState([]);

  const getHeroInfo = () => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/hero_slider`)
      .then((res) => {
        setHeroInfo(res.data);
      });
  };

  useEffect(() => {
    getHeroInfo();
  }, []);

  return (
    <div className="adminheroslider">
      <div className="adminheroslider_text">
        <h1>Actually in the Hero Slider</h1>
      </div>
      <div className="adminheroslider_videos">
        {heroInfo.map((infos) => {
          return (
            <div key={infos.hsid}>
              <ActuallyHeroSlider
                id={infos.hsid}
                title={infos.title}
                cat={infos.cat}
                url={infos.url}
                heroInfo={heroInfo}
                setHeroInfo={setHeroInfo}
                // setrefresh={setrefresh}
                // refresh={refresh}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminHeroSlider;
