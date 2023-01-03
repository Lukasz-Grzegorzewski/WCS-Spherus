import PropTypes from "prop-types";
import React, { useState } from "react";
import axios from "axios";

function ButtonAddCat({ getCategories }) {
  const [addedCat, setAddedCat] = useState({ name: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.warn(typeof addedCat);
    axios
      .post(
        `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/categories/`,
        addedCat
      )
      .then(() => {
        getCategories();
      })
      .catch((err) => console.warn(err));
  }

  return (
    <div>
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
        {addedCat.name}
      </form>
    </div>
  );
}

export default ButtonAddCat;

ButtonAddCat.propTypes = {
  getCategories: PropTypes.func.isRequired,
};
