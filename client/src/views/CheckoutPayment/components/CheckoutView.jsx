import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import Checkout from "../../FormCrudView/components/Insert/Checkout";
import {useUserId} from "../../../hooks/useUserId"
import axios from "axios";
import { getAllUserDetails } from "../../../stateManagement/actions/getAllUserDetails";


const CheckoutView = () => {

  var showCart, total = 0, miBasket;
  var {CartUser} = useSelector(
    (state) => state.checkoutUserReducer,
  )

  // if (user?.id !== undefined) {
  //   console.log("entra ", CartUser)
  //   // showCart = CartUser.filter((e) => e.Cart_Users === user?.id)
  //   // showCart.map((e) => (total += parseInt(e.subtotal)))
  //   // miBasket = showCart.length
  // }

  console.log("datas ", CartUser)
  

  // const dispatch = useDispatch();
  // const { id } = useParams();
  // const [datos, setDatos] = useState("")

  // let [idCookie, idOk] = useUserId()
  // console.log("aCA TAN", idCookie?.id, idOk)  

  // useEffect(()=>{
  //   if(idCookie !== null){
  //     axios
  //     .get(`http://localhost:3001/checkout/${idCookie?.id}`)
  //     .then((data)=>{
  //       setDatos(data.data)
  //       console.info('Contenido de data:', data)
  //     }).catch(err => console.error(err));

  //     dispatch(getAllUserDetails(idCookie?.id));
  //   return () => {
  //     dispatch(cleanUpdate());
  //   };
  //   }
  // },[dispatch, idCookie?.id])

  // console.log(datos)
  // const productos = [
  //   {title: "Producto 1", quantity: 5, price: 10.52},
  //   {title: "Producto 2", quantity: 15, price: 100.52},
  //   {title: "Producto 3", quantity: 6, price: 200}
  // ]


  // const user = useSelector((state) => state.userReducer.userDetailIdParams);

  const formulario = () => {
    // if (Object.keys(user).length !== 0) {
      return (
        <div>
          aca miro que poner
        </div>
      );
    // }
  };

  return (
    <div>
      {/* { !datos
        ? <p>Aguarde un momentorrrrr....</p> 
        : formulario()
      } */}
      </div>
  )
};

export default CheckoutView;
          
  
          
          
          
          
          
          
