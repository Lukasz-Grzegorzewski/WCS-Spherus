import React, { useEffect, useState } from "react";
import axios from "axios";
import ActuallyHeroSlider from "./ActuallyHeroSlider";
import AddHero from "./AddHero";

function AdminHeroSlider() {
  const [heroInfo, setHeroInfo] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [add, setAdd] = useState(false);

  const getHeroInfo = async () => {
    await axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/hero_slider`)
      .then((res) => {
        setHeroInfo(res.data);
      });
  };

  useEffect(() => {
    getHeroInfo();
  }, [refresh]);

  return (
    <div className="adminheroslider">
      <div className="adminheroslider_text">
        <h1>Currently in the Hero Slider</h1>
        <button
          className="icon-btn add-btn"
          type="button"
          onClick={() => {
            setAdd(!add);
          }}
        >
          <div className="add-icon" />
          <div className="btn-txt">Add Video</div>
        </button>
      </div>

      {add === true && (
        <AddHero
          setRefresh={setRefresh}
          refresh={refresh}
          add={add}
          setAdd={setAdd}
        />
      )}
      {heroInfo.length >= 1 && (
        <div className="adminheroslider_videos">
          {heroInfo.map((infos) => {
            return (
              <div key={infos.hsid}>
                <ActuallyHeroSlider
                  id={infos.hsid}
                  idVid={infos.id}
                  title={infos.title}
                  url={infos.url}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AdminHeroSlider;
