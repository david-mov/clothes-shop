import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getUserIdParams } from "../../stateManagement/actions/getUserIdParams";
import Checkout from "./../FormCrudView/components/Insert/Checkout";
import {useUserId} from "../../hooks/useUserId"
import axios from "axios";


const CheckoutView = () => {

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
    if(idCookie !== null){
      axios
      .get(`http://localhost:3001/checkout/${idCookie?.id}`)
      .then((data)=>{
        setDatos(data.data)
        console.info('Contenido de data:', data)
      }).catch(err => console.error(err)) 
    }
  },[])

  console.log(datos)
  const productos = [
    {title: "Producto 1", quantity: 5, price: 10.52},
    {title: "Producto 2", quantity: 15, price: 100.52},
    {title: "Producto 3", quantity: 6, price: 200}
  ]


  const user = useSelector((state) => state.userReducer.userDetailIdParams);

  const formulario = () => {
    if (Object.keys(user).length !== 0) {
      return (
        <Checkout
          name={user.name}
          id={idFinal}
          email={user.email}
          phone={user.phone}
          productos={productos}
          data={datos}
        />
      );
    }
  };

  return (
    <div>
      { !datos
        ? <p>Aguarde un momento....</p> 
        : formulario()
      }
      </div>
  )
};

export default CheckoutView;
          
  
          
          
          
          
          
          
