import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getUpdateSizeDetails } from "../../stateManagement/actions/getUpdateSizeDetails";
import UpdateZises from "./components/Update/UpdateSizes";

const UpdateCategoriesView = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  
  useEffect(() => {
    dispatch(getUpdateSizeDetails(productId));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, productId]);

  const size = useSelector((state) => state.sizesReducer.updateSizeDetails);

  const formulario = () => {
    if (Object.keys(size).length !== 0) {
      return (
        <UpdateZises
          name={size.name} 
          id = {productId}
        />
      );
    }
  };

  return <div>{formulario()}</div>;
};

export default UpdateCategoriesView;


