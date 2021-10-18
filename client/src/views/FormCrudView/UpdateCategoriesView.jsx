import React, { useEffect } from "react";
import UpdateCategories from "./components/Update/UpdateCategories";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getUpdateCategoryDetails } from "../../stateManagement/actions/getUpdateCategoryDetails";


const UpdateCategoriesView = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  
  useEffect(() => {
    dispatch(getUpdateCategoryDetails(productId));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, productId]);

  const category = useSelector((state) => state.categoriesReducer.categoryUpdateDetails);

  const formulario = () => {
    if (Object.keys(category).length !== 0) {
      return (
        <UpdateCategories
          name={category.name} 
          id = {productId}
        />
      );
    }
  };

  return <div>{formulario()}</div>;
};

export default UpdateCategoriesView;


