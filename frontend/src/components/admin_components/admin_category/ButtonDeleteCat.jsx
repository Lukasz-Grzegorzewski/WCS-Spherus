import PropTypes from "prop-types";
import axios from "axios";

function ButtonDeleteCat({ idCategory, getCategories }) {
  /*   const[deletedCat, setDeletedCat]= useState (idCategory); */

  function deleteCategory() {
    axios
      .delete(`${import.meta.env.VITE_PORT_BACKEND}/categories/${idCategory}/`)
      .then(() => {
        getCategories();
      })
      .catch((err) => console.warn(err));
  }

  return (
    <div>
      <button type="button" onClick={deleteCategory}>
        Delete
      </button>
    </div>
  );
}

export default ButtonDeleteCat;

ButtonDeleteCat.propTypes = {
  getCategories: PropTypes.func.isRequired,
  idCategory: PropTypes.number.isRequired,
};
