import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getUserIdParams } from "../../stateManagement/actions/getUserIdParams";
import Checkout from "./Checkout";

const CheckoutView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserIdParams(id));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, id]);

  const user = useSelector((state) => state.userReducer.userDetailIdParams);

  const formulario = () => {
    if (Object.keys(user).length !== 0) {
      return (
        <Checkout
          name={user.name}     
          id={id}
          email={user.email}
          phone={user.phone}
        />
      );
    }
  };

  return <div>{formulario()}</div>;
};

export default CheckoutView;
          
  
          
          
          
          
          
          
