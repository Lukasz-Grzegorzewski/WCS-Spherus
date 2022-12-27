import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteUser({ id }) {
  const navigate = useNavigate();

  function handleDelete() {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      axios
        .delete(
          `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/users/${id}`
        )
        .then(() => {
          console.warn("user deleted successfully");
          navigate("/registration");
        })
        .catch((err) => console.error("DELETE ERROR : ", err));
    } else {
      window.alert("Ok. Deletion canceled.");
    }
  }

  return (
    <button className="btn-delete" type="button" onClick={() => handleDelete()}>
      Delete
    </button>
  );
}

export default DeleteUser;

DeleteUser.propTypes = {
  id: PropTypes.number.isRequired,
};
