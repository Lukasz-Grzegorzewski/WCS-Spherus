import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function ButtonModifyCat({ getCategories, idCategory /* , catName  */ }) {
  const [categoryModified, setCategoryModified] = useState("");
  function modifyCategory(e) {
    e.preventDefault();
    axios
      .patch(`${import.meta.env.VITE_PORT_BACKEND}/categories/${idCategory}/`, {
        name: categoryModified,
      })
      .then(() => {
        getCategories();
      })
      .catch((err) => console.warn(err));
  }
  console.warn(categoryModified.name);
  return (
    <div>
      <form onSubmit={(e) => modifyCategory(e)}>
        <input
          type="text"
          placeholder="/* {catName} */"
          value={categoryModified}
          onChange={(e) => setCategoryModified(e.target.value)}
        />
        <input type="submit" value="Rename" />
      </form>
    </div>
  );
}

export default ButtonModifyCat;

ButtonModifyCat.propTypes = {
  idCategory: PropTypes.number.isRequired,
  getCategories: PropTypes.func.isRequired,
};
