import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import axios from "axios";

function UpdateUserByUser({
  type,
  keyName,
  id,
  getUser,
  // refresh,
  // setRefresh,
  closeUpdateInput,
}) {
  const [data, setData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // const answer = window.confirm("Are you sure?");
    // if (answer) {
    axios
      .patch(`${import.meta.env.VITE_PORT_BACKEND}/users/${id}`, {
        [keyName]: data,
      })
      .then(() => {
        console.warn("user updated");
        // setRefresh(!refresh);
        getUser();
        closeUpdateInput(false);
      })
      .catch((err) => console.error(err));
    // } else {
    //   window.alert("Ok. Update cancelled.");
    // }
  }

  return (
    <form className="form-profile" action={`/users/${id}`} method="post">
      <input
        className="inputs-form"
        type={`${type}`}
        value={data}
        onChange={(event) => setData(event.target.value)}
        placeholder={`Enter new ${keyName}`}
      />
      <button
        className="btn-input"
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        <FaCheck />
        Update
      </button>
    </form>
  );
}

export default UpdateUserByUser;

UpdateUserByUser.propTypes = {
  keyName: PropTypes.string.isRequired,
  // refresh: PropTypes.bool.isRequired,
  // setRefresh: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  closeUpdateInput: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
};
