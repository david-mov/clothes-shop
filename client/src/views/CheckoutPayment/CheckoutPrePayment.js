import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {getAllUserDetails} from "../../stateManagement/actions/getAllUserDetails"

function CheckoutView() {

/*const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Required field enter a name";
  } else if (!input.price) {
    errors.price = "Required field enter a Number";
  } else if (!input.description) {
    errors.description = "Required field enter a Description";
  } else if (!input.stock) {
    errors.stock = "Required field enter a Number";
  } else if (!input.color) {
    errors.color = "Required field enter a color";
  } else if (!input.valueSize) {
    errors.valueSize = "Campo requerido ingresa un Rating";
  }
  return errors;
};*/

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAllUserDetails())
  }, [dispatch]);

 
  return (
    <div>
      
    </div>
  );
};

export default CheckoutView
