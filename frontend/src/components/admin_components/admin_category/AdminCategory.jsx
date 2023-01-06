import ButtonOpenAddCat from "@components/admin_components/admin_category/ButtonOpenAddCat";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Categories from "./Categories";

function AdminCategory() {
  const [selectCategory, setSelectCategory] = useState([]);
  const [catId, setCatId] = useState();
  /* const [catName, setCatName] = useState(); */
  /* const [deletedCategory, setDeletedCategory] = useState([]); */

  const getCategories = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/categories`)
      .then((res) => {
        setSelectCategory(res.data);
        /*  console.warn(res.data); */
        /* setVideo(res.data[0]); */
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleOptions = (elem) => {
    setCatId(elem.value);
  };

  /*   console.warn(catName); */
  /* setChangeCategory(option); */

  return (
    <div className="select-category">
      {selectCategory && (
        <Select
          options={selectCategory.map((elem) => ({
            label: elem.name,
            value: elem.id,
          }))}
          defaultValue={{ label: "Search category" }}
          onChange={(elem) => handleOptions(elem)}
        />
      )}
      {catId && (
        <Categories
          catId={catId}
          /*  catName={catName} */
          getCategories={getCategories}
        />
      )}
      <ButtonOpenAddCat getCategories={() => getCategories()} />
    </div>
  );
}
export default AdminCategory;
