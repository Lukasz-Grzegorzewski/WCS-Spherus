import Categories from "@components/admin_components/admin_category/Categories";
import ButtonOpenAddCat from "@components/admin_components/admin_category/ButtonOpenAddCat";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminCategory() {
  const [selectCategory, setSelectCategory] = useState([]);
  /* const [deletedCategory, setDeletedCategory] = useState([]); */

  const getCategories = () => {
    axios
      .get(`http://localhost:${import.meta.env.VITE_PORT_BACKEND}/categories`)
      .then((res) => {
        setSelectCategory(res.data);
        console.warn(res.data);
        /* setVideo(res.data[0]); */
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  /*     function deleteCategory () {
      axios
        .delete(
          `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/categories/:id/`, deletedCat
          )
        .then((res) => {
          (console.log("effacé"));
          })
        .catch((err)=>console.log(err));
  
    }
   */

  return (
    <div>
      {selectCategory.map((elem) => (
        <Categories key={elem.id} selectCategory={elem} />
      ))}
      <ButtonOpenAddCat getCategories={() => getCategories()} />
    </div>
  );
}
export default AdminCategory;
