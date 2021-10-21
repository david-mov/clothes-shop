import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getProductDetails } from "../../stateManagement/actions/getProductDetails";
import { getAllsizes } from "../../stateManagement/actions/getAllsizes";
import ProductView from "./ProductView2";

const UpdateCategoriesView = () => {

  const dispatch = useDispatch();
  const { productId } = useParams();
  
  useEffect(() => {
    dispatch(getProductDetails(productId));
    dispatch(getAllsizes());
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, productId]);

  const product = useSelector((state) => state.productsReducer.productDetails);

  const formulario = () => {
    if (Object.keys(product).length !== 0) {
      return (
        <ProductView
          product={product} 
          productId = {productId}
        />
      );
    }
  };

  return <div>{formulario()}</div>;
};

export default UpdateCategoriesView;

