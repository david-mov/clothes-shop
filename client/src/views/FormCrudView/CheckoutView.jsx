import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import Checkout from "./../FormCrudView/components/Insert/Checkout";
import {useUserId} from "../../hooks/useUserId"
import axios from "axios";
import { getAllUserDetails } from "../../stateManagement/actions/getAllUserDetails";


const CheckoutView = () => {

<<<<<<< HEAD:client/src/views/CheckoutPayment/CheckoutView.jsx
 // const productos = useSelector(state => state.productsReducer.products)
=======
>>>>>>> a4a82c5825d56d9c429c76bff986d7252cebdd7f:client/src/views/FormCrudView/CheckoutView.jsx
  const dispatch = useDispatch();
  const { id } = useParams();
  const [datos, setDatos] = useState("")

  let [idCookie, idOk] = useUserId()

  useEffect(()=>{
    if(idCookie !== null){
      axios
      .get(`http://localhost:3001/checkout/${idCookie?.id}`)
      .then((data)=>{
        setDatos(data.data)
        console.info('Contenido de data:', data)
      }).catch(err => console.error(err));

      dispatch(getAllUserDetails(idCookie?.id));
    return () => {
      dispatch(cleanUpdate());
    };
    }
  },[dispatch, idCookie?.id])

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
          id={idCookie?.id}
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
        ? <p>Aguarde un momentorrrrr....</p> 
        : formulario()
      }
      </div>
  )
};

export default CheckoutView;
          
  
          
          
          
          
          
          
