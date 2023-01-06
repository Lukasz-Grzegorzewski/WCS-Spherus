import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ToggleIsAdmin({ id, refresh, setRefresh }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    axios
      .patch(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`, {
        isAdmin: isChecked ? 0 : 1,
      })
      .then(() => {
        setRefresh(!refresh);
        console.warn("user updated");
      })
      .catch((err) => console.error(err));
  }

  function getUserById(uid) {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/users/${uid}`)
      .then((res) => {
        setIsChecked(res.data.is_admin !== 0);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getUserById(id);
  }, [refresh]);

  return (
    <div className="toggle-is-admin-container">
      <input
        className="toggle"
        id="check"
        type="checkbox"
        onChange={() => handleToggle()}
        checked={isChecked}
      />
      <label htmlFor="check" className="label-input-isAdmin">
        Admin
      </label>
    </div>
  );
}

export default ToggleIsAdmin;

ToggleIsAdmin.propTypes = {
  id: PropTypes.number.isRequired,
  refresh: PropTypes.bool.isRequired,
  setRefresh: PropTypes.func.isRequired,
};
