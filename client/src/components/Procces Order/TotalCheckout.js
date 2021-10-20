import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useUserId } from '../../hooks/useUserId'

const Total = () => {
  let [user] = useUserId()
  const cart = useSelector((state) => state.checkoutReducer.cart)
  var totalCart = useSelector(
    (state) => state.checkoutUserReducer.totalCartUser,
  )

  var showCart
  var total = 0
  let miBasket

  if (user !== null) {
    showCart = totalCart.filter((e) => e.Cart_Users === user.id)
    showCart.map((e) => (total += parseInt(e.subtotal)))
    miBasket = showCart.length
    console.log('show', showCart)
  } else {
    cart.map((e) => (total += parseInt(e.subtotal)))
    miBasket = cart.length
  }

  return (
    <div>
      <h5>Total items: {miBasket}</h5>
      <h5>Total Amount: {parseInt(total)}</h5>
      <Button
        component={Link}
        to="/checkout/Payment"
        variant="contained"
        color="secondary"
      >
        Check out
      </Button>
    </div>
  )
}

export default Total
