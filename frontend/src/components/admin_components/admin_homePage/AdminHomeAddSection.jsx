import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PopupAddComponent from "./PopupAddComponent";
import AdminHomeDragInComp from "./AdminHomeDragInComp";

function AdminHomeAddSection({ setAddSection, setAddPub, getHome }) {
  const [cat, setCat] = useState([]);
  const [idCat, setIdCat] = useState();
  const [check, setCheck] = useState(false);
  const type = 1;

  const getCat = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/categories`)
      .then((res) => {
        setCat(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCat();
  }, []);

  const handleChange = (e) => {
    setIdCat(e.target.value);
  };

  const addComp = () => {
    axios
      .post(`${import.meta.env.VITE_PORT_BACKEND}/home`, {
        position: 0,
        type: `${type}`,
        idLink: `${idCat}`,
      })
      .then(() => {
        setCheck(true);
        getHome();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="adminHomeAddSection">
      {cat.length >= 1 && check === false && (
        <form className="adminHomeAddSection_form">
          <label
            className="adminHomeAddSection_form_label"
            htmlFor="category-select"
          >
            Choose the video category to link with this section <br />
            <select
              className="adminHomeAddSection_form_label_select"
              id="publicity-select"
              onChange={handleChange}
            >
              <option value="">---</option>
              {cat.map((infos) => {
                return (
                  <option key={infos.id} value={infos.id}>
                    {infos.name}
                  </option>
                );
              })}
            </select>
          </label>
          {idCat !== undefined && (
            <div>
              <AdminHomeDragInComp
                addComp={addComp}
                idCat={idCat}
                getHome={getHome}
              />
            </div>
          )}
        </form>
      )}
      {check === true && (
        <PopupAddComponent
          setAddPub={setAddPub}
          setAddSection={setAddSection}
        />
      )}
    </div>
  );
}

export default AdminHomeAddSection;

AdminHomeAddSection.propTypes = {
  setAddSection: PropTypes.func.isRequired,
  setAddPub: PropTypes.func.isRequired,
  getHome: PropTypes.func.isRequired,
};
