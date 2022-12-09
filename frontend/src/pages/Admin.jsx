import React, { useState } from "react";
import AdminUsers from "@components/admin_components/admin_users/AdminUsers";
import AdminHomePage from "@components/admin_components/admin_homePage/AdminHomePage";
import AdminCategory from "@components/admin_components/admin_category/AdminCategory";
import AdminVideos from "@components/admin_components/admin_videos/AdminVideos";
import AdminColors from "@components/admin_components/admin_colors/AdminColors";
import { FaAngleLeft } from "react-icons/fa";

function Admin() {
  const [user, setUser] = useState(false);
  const [home, setHome] = useState(false);
  const [category, setCategory] = useState(false);
  const [videos, setVideos] = useState(false);
  const [colors, setColors] = useState(false);

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
          }}
        >
          USERS <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_users">
          {user === true && <AdminUsers className="comp" />}
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
          }}
        >
          HOME PAGE <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_home">
          {home === true && <AdminHomePage />}
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
          }}
        >
          CATEGORY <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_cat">
          {category === true && <AdminCategory />}
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
          }}
        >
          VIDEOS <FaAngleLeft className="svgsamere" />
        </button>
        <div className="admin_menu_comp_videos">
          {videos === true && <AdminVideos />}
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
      </div>
    </div>
  );
}

export default Admin;
