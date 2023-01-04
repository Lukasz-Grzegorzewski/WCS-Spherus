import PropTypes from "prop-types";
import React from "react";
import ButtonDeleteCat from "./ButtonDeleteCat";

function Categories({ selectCategory, getCategories }) {
  return (
    <div>
      {selectCategory.name}{" "}
      <ButtonDeleteCat
        idCategory={selectCategory.id}
        getCategories={() => getCategories()}
      />
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  selectCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  getCategories: PropTypes.func.isRequired,
};
