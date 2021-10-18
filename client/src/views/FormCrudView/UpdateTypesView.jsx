import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getUpdateTypesDetails } from "../../stateManagement/actions/getUpdateTypesDetails";
import UpdateType from "./components/Update/UpdateType";


const UpdateTypesView = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  
  useEffect(() => {
    dispatch(getUpdateTypesDetails(productId));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, productId]);

  const type = useSelector((state) => state.typesReducer.updateTypeDetails);

  const formulario = () => {
    if (Object.keys(type).length !== 0) {
      return (
        <UpdateType
          name={type.name} 
          id = {productId}
        />
      );
    }
  };

  return <div>{formulario()}</div>;
};

export default UpdateTypesView;
