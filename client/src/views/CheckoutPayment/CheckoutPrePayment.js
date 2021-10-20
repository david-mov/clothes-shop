import '../../styles/styleTablesSAA.css'
import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCart } from '../../stateManagement/actions/getAllCart'
import { cleanUpdate } from '../../stateManagement/actions/CleanPutUpdate'
import { getUserDetail } from '../../stateManagement/actions/getUserDetail'
import CheckoutCard from '../../components/Procces Order/CheckoutCard'
import { useUserId } from '../../hooks/useUserId'
import { Link } from 'react-router-dom'
import { getAllCartUsers } from '../../stateManagement/actions/getAllCartUser'



const CheckoutPrePaymentView = () => {

  const dispatch = useDispatch()
  let [user, okId] = useUserId();

  useEffect(() => {
    if (user?.id !== undefined) {
      dispatch(getAllCartUsers())
      dispatch(getAllCart())
      dispatch(getUserDetail(user?.id));
      return () => {
        dispatch(cleanUpdate());
      };
    }
  }, [dispatch, user?.id])

  var showCart;
  var totalCart = useSelector(
    (state) => state.checkoutUserReducer.totalCartUser,
  )

  if (user !== null) {
    showCart = totalCart.filter((e) => e.Cart_Users === user?.id)
  }

  
  console.log("entra", showCart)
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
      {FormRow()}
    </div>
  )
}

export default CheckoutPrePaymentView

