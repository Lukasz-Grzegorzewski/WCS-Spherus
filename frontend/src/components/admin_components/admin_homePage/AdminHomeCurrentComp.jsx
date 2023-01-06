import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function AdminHomeCurrentComp({ id, type, idLink, getHome }) {
  const [name, setName] = useState();

  const whatType = () => {
    if (type === 1) {
      return "Section";
    }
    return "Advertising";
  };

  const getName = () => {
    if (type === 1) {
      axios
        .get(`${import.meta.env.VITE_PORT_BACKEND}/categories/${idLink}`)
        .then((res) => {
          setName(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .get(`${import.meta.env.VITE_PORT_BACKEND}/publicities/${idLink}`)
        .then((res) => {
          setName(res.data);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getName();
  }, []);

  const deleteComponent = () => {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/home/${id}`)
      .then(() => {
        getHome();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="adminHomeCurrentComp">
      {name !== undefined && (
        <>
          <div className="adminHomeCurrentComp_infos">
            <h2>{whatType()}</h2>
            {name !== undefined && <h3>"{name.name}"</h3>}
          </div>
          <div className="adminHomeCurrentComp_delete">
            <button
              type="button"
              onClick={() => {
                deleteComponent();
              }}
            >
              <span>Delete</span>
              <i />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminHomeCurrentComp;

AdminHomeCurrentComp.propTypes = {
  type: PropTypes.number.isRequired,
  idLink: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  getHome: PropTypes.func.isRequired,
};
