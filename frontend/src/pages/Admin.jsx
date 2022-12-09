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

  return (
    <div className="admin">
      <h1 className="admin_title">Admin Page</h1>
      <div className="admin_menu">
        <button
          className="admin_menu_btn"
          type="button"
          onClick={() => {
            setUser(!user);
            setHome(false);
            setCategory(false);
            setVideos(false);
            setColors(false);
          }}
        >
          USERS <FaAngleLeft />
        </button>
        {user === true && <AdminUsers className="admin_menu_comp_users" />}
        <button
          className="admin_menu_btn"
          type="button"
          onClick={() => {
            setUser(false);
            setHome(!home);
            setCategory(false);
            setVideos(false);
            setColors(false);
          }}
        >
          HOME PAGE <FaAngleLeft />
        </button>
        {home === true && <AdminHomePage className="admin_menu_comp_home" />}
        <button
          className="admin_menu_btn"
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(!category);
            setVideos(false);
            setColors(false);
          }}
        >
          CATEGORY <FaAngleLeft />
        </button>
        {category === true && <AdminCategory className="admin_menu_comp_cat" />}
        <button
          className="admin_menu_btn"
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(false);
            setVideos(!videos);
            setColors(false);
          }}
        >
          VIDEOS <FaAngleLeft />
        </button>
        {videos === true && <AdminVideos className="admin_menu_comp_videos" />}
        <button
          className="admin_menu_btn"
          type="button"
          onClick={() => {
            setUser(false);
            setHome(false);
            setCategory(false);
            setVideos(false);
            setColors(!colors);
          }}
        >
          COLORS <FaAngleLeft />
        </button>
        {colors === true && <AdminColors className="admin_menu_comp_colors" />}
      </div>
      <div className="admin_components">
        {user === true && <AdminUsers className="admin_components_users" />}
        {home === true && <AdminHomePage className="admin_components_home" />}
        {category === true && (
          <AdminCategory className="admin_components_cat" />
        )}
        {videos === true && <AdminVideos className="admin_components_videos" />}
        {colors === true && <AdminColors className="admin_components_colors" />}
      </div>
    </div>
  );
}

export default Admin;
