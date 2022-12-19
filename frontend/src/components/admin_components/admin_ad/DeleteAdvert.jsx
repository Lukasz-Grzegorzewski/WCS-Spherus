import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteAdvert() {
  const [pub, setPub] = useState([]);
  const [idPub, setIdPub] = useState("");
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

  const deletePub = () => {
    axios
      .delete(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/publicities/${idPub}`
      )
      .then((res) => {
        setPub(res.data);
        setRefresh(!refresh);
      });
  };

  const handleChange = (e) => {
    setIdPub(e.target.value);
  };

  return (
    <div className="deleteadvert">
      <form className="deleteadvert_form">
        <label className="deleteadvert_form_label" htmlFor="publicity-select">
          Choose advertising to delete{" "}
          {pub.length >= 1 && (
            <select
              className="deleteadvert_form_label_select"
              id="publicity-select"
              onChange={handleChange}
            >
              <option value="">---</option>
              {pub.map((infos) => {
                return (
                  <option key={infos.id} value={infos.id}>
                    {infos.name}
                  </option>
                );
              })}
            </select>
          )}
        </label>
      </form>
      <div className="deleteadvert_delete">
        <button
          type="button"
          onClick={() => {
            deletePub();
          }}
        >
          <span>Delete</span>
          <i />
        </button>
      </div>
    </div>
  );
}

export default DeleteAdvert;
