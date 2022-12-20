import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PopupAdvertDelete from "./PopupAdvertDelete";

function DeleteAdvert({ pub, setRefresh, refresh }) {
  const [idPub, setIdPub] = useState("");
  const [check, setCheck] = useState(false);

  const deletePub = () => {
    axios
      .delete(
        `http://localhost:${
          import.meta.env.VITE_PORT_BACKEND
        }/publicities/${idPub}`
      )
      .then(() => {
        setCheck(true);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleChange = (e) => {
    setIdPub(e.target.value);
  };

  return (
    <div className="deleteadvert">
      {check === false ? (
        <form className="deleteadvert_form">
          <label className="deleteadvert_form_label" htmlFor="publicity-select">
            Choose advertising to delete <br />
            <select
              className="deleteadvert_form_label_select"
              id="publicity-select"
              onChange={handleChange}
            >
              <option value="">---</option>
              {pub.map((infos) => {
                return (
                  <option key={infos.name} value={infos.id}>
                    {infos.name}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      ) : (
        <div className="deleteadvert_check">
          <PopupAdvertDelete
            setCheck={setCheck}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </div>
      )}
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

DeleteAdvert.propTypes = {
  pub: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      url_image: PropTypes.string.isRequired,
      url_link: PropTypes.string.isRequired,
    })
  ).isRequired,
  setRefresh: PropTypes.func.isRequired,
  refresh: PropTypes.bool.isRequired,
};
