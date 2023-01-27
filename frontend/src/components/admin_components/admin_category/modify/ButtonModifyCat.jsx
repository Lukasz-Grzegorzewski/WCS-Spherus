import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ModifyPopUp from "./ModifyPopUp";

function ButtonModifyCat({
  getCategories,
  catId,
  catName,
  changeShowButtonModify,
}) {
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
        changeShowButtonModify();
      })
      .catch((err) => {
        console.warn(err);
        setErrorMessageModify(true);
      });
  }

  function handleModifyPopUp(e) {
    e.preventDefault();
    if (categoryModified.trim() !== "" && categoryModified.length >= 3) {
      setOpenModifyPopUp(!openModifyPopUp);
    } else {
      setErrorMessageModify(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleModifyPopUp}>
        <input type="submit" className="deleteBtn open" value="Rename" />
        <input
          type="text"
          placeholder={catName}
          value={categoryModified}
          onChange={(e) => setCategoryModified(e.target.value)}
        />
      </form>
      {openModifyPopUp && (
        <ModifyPopUp
          modifyCategory={(e) => modifyCategory(e)}
          handleModifyPopUp={(e) => handleModifyPopUp(e)}
        />
      )}
      {confirmationMessageModify === true && "category modified"}
      {errorMessageModify === true && (
        <p>The name cannot be empty or must have more than 3 characters</p>
      )}
    </div>
  );
}

export default ButtonModifyCat;

ButtonModifyCat.propTypes = {
  catId: PropTypes.node.isRequired,
  catName: PropTypes.string.isRequired,
  getCategories: PropTypes.func.isRequired,
  changeShowButtonModify: PropTypes.func.isRequired,
};
