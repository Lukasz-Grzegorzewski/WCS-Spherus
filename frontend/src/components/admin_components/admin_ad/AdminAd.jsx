import React from "react";
import AddAdvert from "./AddAdvert";
import UpdateAdvert from "./UpdateAdvert";
import DeleteAdvert from "./DeleteAdvert";

function AdminAd() {
  return (
    <div className="adminad">
      <div className="adminad_box">
        <h1 className="adminad_box_title">Add new Advertising</h1>
        <AddAdvert />
      </div>
      <div className="adminad_box">
        <h1 className="adminad_box_title">Update Advertising</h1>
        <UpdateAdvert />
      </div>
      <div className="adminad_box">
        <h1 className="adminad_box_title">Delete Advertising</h1>
        <DeleteAdvert />
      </div>
    </div>
  );
}

export default AdminAd;
