import PropTypes from "prop-types";
import React from "react";
import ButtonAddCat from "./ButtonAddCat";

function ButtonOpenAddCat({
  getCategories,
  changeShowButtonAdd,
  showButtonAdd,
}) {
  return (
    <div className="button_open_add_cat">
      {showButtonAdd && (
        <ButtonAddCat
          getCategories={() => getCategories()}
          changeShowButtonAdd={() => changeShowButtonAdd()}
        />
      )}
      <button
        type="button"
        className={showButtonAdd ? "deleteBtn close" : "deleteBtn open"}
        onClick={changeShowButtonAdd}
      >
        {showButtonAdd ? "X" : "Add Category"}
      </button>
    </div>
  );
}

export default ButtonOpenAddCat;

ButtonOpenAddCat.propTypes = {
  getCategories: PropTypes.func.isRequired,
  changeShowButtonAdd: PropTypes.func.isRequired,
  showButtonAdd: PropTypes.bool.isRequired,
};
