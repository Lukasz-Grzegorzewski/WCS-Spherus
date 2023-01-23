import PropTypes from "prop-types";
import React, { useState } from "react";
import ButtonAddCat from "./ButtonAddCat";

function ButtonOpenAddCat({ getCategories }) {
  const [showButtonAdd, setShowButtonAdd] = useState(false);

  function changeShowButtonAdd() {
    setShowButtonAdd(!showButtonAdd);
  }

  return (
    <div className="button-open-add">
      <button type="button" onClick={changeShowButtonAdd}>
        ADD CATEGORY
      </button>
      {showButtonAdd && <ButtonAddCat getCategories={() => getCategories()} />}
    </div>
  );
}

export default ButtonOpenAddCat;

ButtonOpenAddCat.propTypes = {
  getCategories: PropTypes.func.isRequired,
};
