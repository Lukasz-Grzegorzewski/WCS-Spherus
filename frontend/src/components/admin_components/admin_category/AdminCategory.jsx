import ButtonOpenAddCat from "@components/admin_components/admin_category/add/ButtonOpenAddCat";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Categories from "./Categories";

function AdminCategory() {
  const [selectCategory, setSelectCategory] = useState([]);
  const [catId, setCatId] = useState("Search category");
  const [catName, setCatName] = useState();

  const getCategories = () => {
    axios
      .get(`${import.meta.env.VITE_PORT_BACKEND}/categories`)
      .then((res) => {
        setSelectCategory(res.data);
        console.warn("ceci est res.dat getCategories", res.data);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleOptions = (elem) => {
    console.warn(elem);
    setCatId(elem.value);
    setCatName(elem.label);
  };

  return (
    <div className="select-category">
      {selectCategory && (
        <Select
          options={selectCategory.map((elem) => ({
            label: elem.name,
            value: elem.id,
          }))}
          defaultValue={{ value: { catId }, label: "Search your category" }}
          onChange={(elem) => handleOptions(elem)}
        />
      )}
      <ButtonOpenAddCat getCategories={() => getCategories()} />
      {catId === "Search category" ? (
        ""
      ) : (
        <Categories
          catId={catId}
          setCatId={(value) => setCatId(value)}
          catName={catName}
          getCategories={getCategories}
          setCatName={(value) => setCatName(value)}
        />
      )}
    </div>
  );
}
export default AdminCategory;
