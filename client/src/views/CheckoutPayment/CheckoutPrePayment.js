import '../../styles/styleTablesSAA.css'
import { React } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllCart } from '../../stateManagement/actions/getAllCart'
import { cleanUpdate } from '../../stateManagement/actions/CleanPutUpdate'
import { getUserDetail } from '../../stateManagement/actions/getUserDetail'
import CheckoutCard from '../../components/Procces Order/CheckoutCard'
import { useUserId } from '../../hooks/useUserId'
import { Link } from 'react-router-dom'
import { getAllCartUsers } from '../../stateManagement/actions/getAllCartUser'
import { getAllUserDetails } from "../../stateManagement/actions/getAllUserDetails";


const FORM_ID = 'payment-form';
const CheckoutPrePaymentView = () => {

  const dispatch = useDispatch()
  let [user] = useUserId();
  const [datos, setDatos] = useState("")

  // useEffect(() => {
  //   if (user !== null) {
  //     axios
  //       .get(`http://localhost:3001/checkout/${user?.id}`)
  //       .then((data) => {
  //         setDatos(data.data)
  //       }).catch(err => console.error(err));

  //     dispatch(getAllUserDetails(user?.id));
  //     return () => {
  //       dispatch(cleanUpdate());
  //     };
  //   }
  // }, [dispatch, user?.id])

  useEffect(() => {
    if (user?.id !== undefined) {
      dispatch(getAllCartUsers())
      dispatch(getAllCart())
      dispatch(getUserDetail(user?.id));
      return () => {
        dispatch(cleanUpdate());
      };

    }
  }, [dispatch, user])

  var showCart, miBasket, total = 0;
  var totalCart = useSelector(
    (state) => state.checkoutUserReducer.totalCartUser,
  )

  if (user !== null) {
    showCart = totalCart.filter((e) => e.Cart_Users === user?.id)
    showCart.map((e) => (total += parseInt(e.subtotal)))
    miBasket = showCart.length
  }

  // useEffect(()=>{
  //   const script = document.createElement('script');
  //   const attr_data_preference = document.createAttribute('data-preference-id')
  //   //const attr_nonce = document.createAttribute('nonce')
  
  //   attr_data_preference.value = datos.id
  //   //attr_nonce.value = 'abcdefg'
  //   script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
  //   script.setAttributeNode(attr_data_preference)
  //  // script.setAttributeNode(attr_nonce)
  //  const form = document.getElementById('form1');
  //     form.appendChild(script);
  //   // document.getElementById('form1').appendChild(script)
  //   // return () =>{
  //   //   document.getElementById('form1').removeChild(script);
  //   // }
  //  },[])

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
                        <th className="table1__th">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="table1__tbody">
                      {showCart?.map((e) => (
                        <CheckoutCard
                          key={e.product.id}
                          name={e.product.name}
                          stock={e.product.stock}
                          productId={e.product.id}
                          idCarrito={e.id}
                          quantity={e.quantity}
                          price={e.product.price}
                          image={e.product.images[0]}
                          subtotal={e.subtotal}
                          size={e.product.sizes}
                          color={e.product.color}
                        />
                      ))}
                    </tbody>
                  </table1>
                  <div>
                    <h5>Total items: {miBasket}</h5>
                    <h5>Total Amount: {parseInt(total)}</h5>
                    <form id={FORM_ID} method="GET" />
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
              <li className="saco">
                <Link to="/CheckoutPage" className="cart__link">
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
      { !datos
        ? <p>Aguarde un momentorrrrr....</p> 
        : <div>  {FormRow()} </div>
      }
        

      </div>

    </div>
  )
}

export default CheckoutPrePaymentView

