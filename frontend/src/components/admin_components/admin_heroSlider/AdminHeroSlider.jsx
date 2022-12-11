import React, { useEffect, useState } from "react";
import axios from "axios";
import ActuallyHeroSlider from "./ActuallyHeroSlider";
import ChoiceHero from "./ChoiceHero";

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
      <div>
        <h1>Admin Hero Slider</h1>
        <h2>Actually in the Hero Slider :</h2>
      </div>
      <div>
        {heroInfo.map((infos) => {
          return (
            <div key={infos.id}>
              <ActuallyHeroSlider
                title={infos.title}
                cat={infos.cat}
                url={infos.url}
              />
            </div>
          );
        })}
      </div>
      <div>
        <ChoiceHero />
      </div>
    </div>
  );
}

export default AdminHeroSlider;
