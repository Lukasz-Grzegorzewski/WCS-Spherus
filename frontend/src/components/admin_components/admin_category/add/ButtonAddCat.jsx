import PropTypes from "prop-types";
import React, { useState } from "react";
import axios from "axios";

function ButtonAddCat({ getCategories, changeShowButtonAdd }) {
  const [addedCat, setAddedCat] = useState({ name: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.warn(typeof addedCat);
    axios
      .post(
        `${import.meta.env.VITE_PORT_BACKEND}/categories/`,
        addedCat
      ) /* addedCat es un objeto, como lo que se pone en Postman para añadir un user */
      .then(() => {
        getCategories();
        changeShowButtonAdd();
      })
      .catch((err) => console.warn(err));
  }

  return (
    <div className="open-add-box">
      <form
        action="/categories"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="name your category"
          value={addedCat.name}
          onChange={(e) => setAddedCat({ name: e.target.value })}
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default ButtonAddCat;

ButtonAddCat.propTypes = {
  getCategories: PropTypes.func.isRequired,
  changeShowButtonAdd: PropTypes.func.isRequired,
};
