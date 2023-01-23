import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ModifyPopUp from "./ModifyPopUp";

function ButtonModifyCat({ getCategories, catId, catName }) {
  const [categoryModified, setCategoryModified] = useState("");
  const [openModifyPopUp, setOpenModifyPopUp] = useState(false);
  const [confirmationMessageModify, setConfirmationMessageModify] =
    useState(false);
  const [errorMessageModify, setErrorMessageModify] = useState(false);

  function modifyCategory(e) {
    e.preventDefault();
    axios
      .patch(`${import.meta.env.VITE_PORT_BACKEND}/categories/${catId}/`, {
        name: categoryModified,
      })
      .then(() => {
        getCategories();
        setOpenModifyPopUp(false);
        setConfirmationMessageModify(true);
      })
      .catch((err) => {
        console.warn(err);
        setErrorMessageModify(true);
      });
  }

  function handleModifyPopUp(e) {
    e.preventDefault();
    setOpenModifyPopUp(!openModifyPopUp);
  }

  return (
    <div>
      <form onSubmit={handleModifyPopUp}>
        <input
          type="text"
          placeholder={catName}
          value={categoryModified}
          onChange={(e) => setCategoryModified(e.target.value)}
        />
        <input type="submit" value="Rename" />
      </form>
      {openModifyPopUp && (
        <ModifyPopUp
          modifyCategory={() => modifyCategory()}
          handleModifyPopUp={() => handleModifyPopUp()}
        />
      )}
      {confirmationMessageModify === true && "category modified"}
      {errorMessageModify === true && "error retrieved"}
    </div>
  );
}

export default ButtonModifyCat;

ButtonModifyCat.propTypes = {
  catId: PropTypes.number.isRequired,
  catName: PropTypes.string.isRequired,
  getCategories: PropTypes.func.isRequired,
};
