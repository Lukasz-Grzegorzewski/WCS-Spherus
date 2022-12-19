import React from "react";
import AddAdvert from "./AddAdvert";

function AdminAd() {
  return (
    <div className="adminad">
      <div className="adminad_add">
        <h1 className="adminad_add_title">Add new Advertising</h1>
        <AddAdvert />
      </div>
    </div>
  );
}

export default AdminAd;
