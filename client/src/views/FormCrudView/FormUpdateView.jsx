import React, { useEffect } from "react";
import UpdateProduct from "./components/Update/UpdateProduct";
import { useDispatch, useSelector } from "react-redux";
import { getUpdateProductDetails } from "../../stateManagement/actions/getUpdatePDetail";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";

const FormTypeView = () => {

  const dispatch = useDispatch();
  const { productId } = useParams(); 
  
  useEffect(() => {      
    dispatch(getUpdateProductDetails(productId))
    return () => {
      dispatch(cleanUpdate())
    }
  }, [dispatch]); 


  const product = useSelector(state => state.productsReducer.productUpdateDetails);

  const formulario = () => {

    if(Object.keys(product).length !== 0) {
      return (
        
        <UpdateProduct 
        name = {product.name}
        categories = {product.categories}
        price = {product.price}
        description = {product.description}
        color = {product.color}
        sizes = {product.sizes}
        type = {product.type}
        type_product = {product.type_product}  
        stock = {product.stock}
        productId = {productId}
      />

      )
    }
  }

  return (
    <div>
      {formulario()}
    </div>
  );
};

export default FormTypeView;
v
