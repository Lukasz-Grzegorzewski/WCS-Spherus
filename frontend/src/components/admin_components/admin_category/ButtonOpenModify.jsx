import PropTypes from "prop-types";
import React, { useState } from "react";
import ButtonModifyCat from "./ButtonModifyCat";

function ButtonOpenModify({ getCategories, catId, catName }) {
  const [showButtonModify, setShowButtonModify] = useState(false);

  function changeShowButtonModify() {
    setShowButtonModify(!showButtonModify);
  }

  return (
    <div className="button-open-modify">
      <button type="button" onClick={changeShowButtonModify}>
        MODIFY CATEGORY
      </button>
      {showButtonModify && (
        <ButtonModifyCat
          getCategories={() => getCategories()}
          catId={catId}
          catName={catName}
        />
      )}
    </div>
  );
}

export default ButtonOpenModify;

ButtonOpenModify.propTypes = {
  getCategories: PropTypes.func.isRequired,
  catId: PropTypes.number.isRequired,
  catName: PropTypes.string.isRequired,
};
