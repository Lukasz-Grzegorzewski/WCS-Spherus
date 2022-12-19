import React, { useState } from "react";
import AdminUsers from "@components/admin_components/admin_users/AdminUsers";
import AdminHomePage from "@components/admin_components/admin_homePage/AdminHomePage";
import AdminCategory from "@components/admin_components/admin_category/AdminCategory";
import AdminVideos from "@components/admin_components/admin_videos/AdminVideos";
import AdminColors from "@components/admin_components/admin_colors/AdminColors";
import AdminHeroSlider from "@components/admin_components/admin_heroSlider/AdminHeroSlider";
import AdminFixtures from "@components/admin_components/admin_fixtures/AdminFixtures";
import AdminAd from "@components/admin_components/admin_ad/AdminAd";
import { FaAngleLeft } from "react-icons/fa";

function Admin() {
  const [user, setUser] = useState(false);
  const [home, setHome] = useState(false);
  const [category, setCategory] = useState(false);
  const [videos, setVideos] = useState(false);
  const [colors, setColors] = useState(false);
  const [hero, setHero] = useState(false);
  const [advert, setadvert] = useState(false);
  const [fixtures, setFixtures] = useState(false);

  const classButtonUser = () => {
    if (user === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };
  const classButtonHome = () => {
    if (home === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };
  const classButtonCat = () => {
    if (category === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };
  const classButtonVid = () => {
    if (videos === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };
  const classButtonColor = () => {
    if (colors === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };
  const classHero = () => {
    if (hero === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };

  const classFixtures = () => {
    if (fixtures === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };

  const classAdvert = () => {
    if (advert === true) {
      return "admin_menu_btn_activ";
    }
    return "admin_menu_btn";
  };

  return (
    <div className="admin">
      <div className="admin_menu">
        <button
          className={classButtonUser()}
          type="button"
          onClick={() => {
            setUser(!user);
            setHome(false);
            setCategory(false);
            setVideos(false);
            setColors(false);
            setHero(false);
            setFixtures(false);
            setadvert(false);
          }}
        >
          USERS <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_users">
          {user === true && <AdminUsers className="comp" />}
        </div>
        <button
          className={classButtonVid()}
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(false);
            setVideos(!videos);
            setColors(false);
            setHero(false);
          }}
        >
          VIDEOS <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_videos">
          {videos === true && <AdminVideos />}
        </div>
        <button
          className={classButtonCat()}
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(!category);
            setVideos(false);
            setColors(false);
            setHero(false);
            setFixtures(false);
            setadvert(false);
          }}
        >
          CATEGORY <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_cat">
          {category === true && <AdminCategory />}
        </div>
        <button
          className={classButtonHome()}
          type="button"
          onClick={() => {
            setUser(false);
            setHome(!home);
            setCategory(false);
            setVideos(false);
            setColors(false);
            setHero(false);
            setFixtures(false);
            setadvert(false);
          }}
        >
          HOME PAGE <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_home">
          {home === true && <AdminHomePage />}
        </div>
        <button
          className={classHero()}
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(false);
            setVideos(false);
            setColors(false);
            setHero(!hero);
            setFixtures(false);
            setadvert(false);
          }}
        >
          HERO SLIDER <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_hero">
          {hero === true && <AdminHeroSlider />}
        </div>
        <button
          className={classFixtures()}
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(false);
            setVideos(false);
            setColors(false);
            setHero(false);
            setFixtures(!fixtures);
            setadvert(false);
          }}
        >
          FIXTURES <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_users">
          {fixtures === true && <AdminFixtures className="comp" />}
        </div>
        <button
          className={classAdvert()}
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(false);
            setVideos(false);
            setColors(false);
            setHero(false);
            setFixtures(false);
            setadvert(!advert);
          }}
        >
          ADVERT <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_users">
          {advert === true && <AdminAd className="comp" />}
        </div>
        <button
          className={classButtonColor()}
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(false);
            setVideos(false);
            setColors(!colors);
            setHero(false);
            setFixtures(false);
            setadvert(false);
          }}
        >
          COLORS <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_colors">
          {colors === true && <AdminColors />}
        </div>
      </div>
      <div className="admin_components">
        {user === true && <AdminUsers />}
        {home === true && <AdminHomePage />}
        {category === true && <AdminCategory />}
        {videos === true && <AdminVideos />}
        {colors === true && <AdminColors />}
        {advert === true && <AdminAd />}
        {fixtures === true && <AdminFixtures />}
        {hero === true && <AdminHeroSlider />}
      </div>
    </div>
  );
}

export default Admin;
