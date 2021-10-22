import '../../styles/styleTablesSAA.css'
import { React } from 'react'
import axios from "axios";
import CardActions from "@material-ui/core/CardActions";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllCart } from '../../stateManagement/actions/getAllCart'
import { cleanUpdate } from '../../stateManagement/actions/CleanPutUpdate'
import { getUserDetail } from '../../stateManagement/actions/getUserDetail'
import { useUserId } from '../../hooks/useUserId'
import { Link } from 'react-router-dom'
import { getAllCartUsers } from '../../stateManagement/actions/getAllCartUser'
import { getAllUserDetails } from "../../stateManagement/actions/getAllUserDetails";
import { putStateCartUsers } from '../../stateManagement/actions/putStateCUsers';
import { useHistory } from 'react-router';
import { deleteAllCart } from "../../stateManagement/actions/deleteAllCart";

const FORM_ID = 'payment-form';
const CheckoutPrePaymentView = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  let [user] = useUserId();
  const [datos, setDatos] = useState("")
  const [verificacion, setVerificacion] = useState(1)
var guardo = user?.id

  console.log("ACA TA VERIFICACION", verificacion)
  console.log("EL USER QUE VIENE DEL FUTURO", user?.id)
  const redirectOnClick = (e) => {
    e.preventDefault()
    if(verificacion === 1){
      setVerificacion(verificacion +1)
      alert("If you go back you could lose your purchase")
    }
    else if(verificacion === 2){
     dispatch(deleteAllCart(user?.id))
     history.push("/checkoutPage")
    }
  }

  useEffect(() => {
    if (user?.id !== undefined) {
      dispatch(getAllCartUsers());
      dispatch(getAllCart());
      //codigo para cambiar el estado del producto en el carrito 
      const objCart = {
        Cart_Users:user?.id,
        state:2
      }
      dispatch(putStateCartUsers(objCart))
      dispatch(getUserDetail(user?.id));
      return () => {
        dispatch(cleanUpdate());
      };

    }
  }, [dispatch, user])

  var showCart, rating, miBasket, total = 0;
  var totalCart = useSelector(
    (state) => state.checkoutUserReducer.totalCartUser,
  )

  if (user !== null) {
    showCart = totalCart.filter((e) => e.Cart_Users === user?.id)
    showCart.map((e) => (total += parseInt(e.subtotal)))
    miBasket = showCart.length
  }

  useEffect(() => {
    if (user !== null) {
      axios
        .get(`http://localhost:3001/checkout/${user?.id}`)
        .then((data) => {
          setDatos(data.data)
        }).catch(err => console.error(err));
    }
  }, [user])

  useEffect(() => {
    if (datos) {
      const attr_data_preference = document.createAttribute('data-preference-id')
      // con el datos en mano, inyectamos el script de mercadoPago
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
      attr_data_preference.value = datos.id;
      script.setAttributeNode(attr_data_preference)
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [datos]);

  const bodyTable = () => {
    return (
      showCart?.map((e) => (

        <tr className="table-row table-row--chris">

        <td className="table-row__td">
          {/* <img className="table-row__img" src={require(`../../assets/${nameImagen}`).default} alt="not image" /> */}

          <div className="table-row__info">
            <p className="table-row__name">{e.product.name}</p>
            <span className="table-row__small">Stock {e.product.stock}</span>
          </div>
        </td>
        <td data-column="Policy" className="table-row__td">
          <div className="">
            <p className="table-row__policy">${e.product.price}</p>
            <span className="table-row__small">Unit Price</span>
          </div>
        </td>

        <td data-column="Progress" className="table-row__td">
          <div className={`component_toCartCantidad ${!e.product.stock ? 'disabled' : ''}`}>
            <div className="">{e.quantity}</div>
          </div>
        </td>
        <td data-column="Progress" className="table-row__td">
          <p className="table-row__policy">${e.product.price * e.quantity}</p>
        </td>

        <td colspan="5" data-column="Progress" className="table-row__td">
          sizes{e.product.price}
        </td>

        <td className="table-row__td">
          <CardActions disableSpacing>
            <div >
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>&#11088;</p>
                ))}
            </div>

          </CardActions>

        </td>
        <td className="table-row__td">
          <p className="table-row__policy">{e.product.color}</p>
        </td>
      </tr>
        
      )))
  }
  const onPayment = () => {
    //codigo para cambiar el estado del producto en el carrito 
    const objCart = {
      Cart_Users:user?.id,
      state:3
    }
    dispatch(putStateCartUsers(objCart))
  }
  function FormRow() {
    return (
      <div className="body-table1">
        <div className="container">
          <div className="row row--top-20">
            <div className="col-md-12">
              <div className="table1-container">
                <table1 className="table1">
                  <thead className="table1__thead1">
                    <tr>
                      <th className="table1__th">Name</th>
                      <th className="table1__th">Price</th>
                      <th className="table1__th">Amount (Min - Max)</th>
                      <th className="table1__th">Subtotal to Item</th>
                      <th colspan="5" className="table1__th">Sizes to Item</th>
                      <th className="table1__th">Rating</th>
                      <th className="table1__th">Color</th>
                      <th className="table1__th"></th>
                    </tr>
                  </thead>
                  <tbody className="table1__tbody">
                    {bodyTable()}
                  </tbody>
                </table1>
                <div>
                  <h5>Total items: {miBasket}</h5>
                  <h5>Total Amount: {parseInt(total)}</h5>
                  <form id={FORM_ID} method="GET" onClick={onPayment}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

  return (
    <div>
      <div className="todo">
        <div className="navbar">
          <div className="navbar__logo">
            <img
              className="img"
              src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
              alt="clothes-Shop"
              border="0"
            ></img>
          </div>
          <div className="cart__link">
            <h2>Pre-Payment</h2>
          </div>
          <div className="cart__link">
            <ul className="navbar__links">
              < li className="saco">
                 <Link onClick={(e) => redirectOnClick(e)}>
                  <i class="fas fa-arrow-left fa-1x"></i>
                  <span>
                    Go to back <span className="cartlogo__badge">{ }</span>
                  </span>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {!datos
          ? <p>Loading....</p>
          : <div>  {FormRow()} </div>
        }

      </div>

    </div>
  )
}

export default CheckoutPrePaymentView

