import React, { useState, useEffect } from "react";
import axios from "axios";
import AddAdvert from "./AddAdvert";
import UpdateAdvert from "./UpdateAdvert";
import DeleteAdvert from "./DeleteAdvert";

function AdminAd() {
  const [pub, setPub] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getPub = () => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/publicities`)
      .then((res) => {
        setPub(res.data);
      });
  };

  useEffect(() => {
    getPub();
  }, [refresh]);

  return (
    <div className="adminad">
      <div className="adminad_box">
        <h1 className="adminad_box_title">Add new Advertising</h1>
        <AddAdvert refresh={refresh} setRefresh={setRefresh} />
      </div>
      <div className="adminad_separate" />
      <div className="adminad_box">
        <h1 className="adminad_box_title">Update Advertising</h1>
        {pub.length >= 1 && (
          <UpdateAdvert pub={pub} refresh={refresh} setRefresh={setRefresh} />
        )}
      </div>
      <div className="adminad_separate" />
      <div className="adminad_box">
        <h1 className="adminad_box_title">Delete Advertising</h1>
        {pub.length >= 1 && (
          <DeleteAdvert pub={pub} refresh={refresh} setRefresh={setRefresh} />
        )}
      </div>
    </div>
  );
}

export default AdminAd;
