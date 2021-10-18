import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getUserIdParams } from "../../stateManagement/actions/getUserIdParams";
import Checkout from "./Checkout";
import {useUserId} from "../../hooks/useUserId"
import axios from "axios";

const CheckoutView = () => {

  const productos = useSelector(state => state.productsReducer.products)
  const dispatch = useDispatch();
  const { id } = useParams();
  const [datos, setDatos] = useState("")

  let [idCookie, idOk] = useUserId()
  console.log("aCA TAN", idCookie?.id, idOk)

  var idFinal = idCookie?.id

  useEffect(() => {
    dispatch(getUserIdParams(idFinal));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, idFinal]);
  
  useEffect(()=>{
    axios
    .get("http://localhost:3001/checkout")
    .then((data)=>{
      setDatos(data.data.id)
      console.info('Contenido de data:', data)
    }).catch(err => console.error(err)) 
  },[])


  const user = useSelector((state) => state.userReducer.userDetailIdParams);

  const formulario = () => {
    if (Object.keys(user).length !== 0) {
      return (
        <Checkout
          name={user.name}     
          id={id}
          email={user.email}
          phone={user.phone}
          data={datos}
        />
      );
    }
  };

  return (
<div>{formulario()}</div>
  )
};

export default CheckoutView;
          
  
          
          
          
          
          
          
