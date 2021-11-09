import React from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useUserId } from '../../../../hooks/useUserId';


const TotalUserIn = () => {
    let [user] = useUserId()
    const cart = useSelector((state) => state.checkoutReducer.cart)
    const userdeta = useSelector((state) => state.userReducer.userDetails);
    var totalCart = useSelector(
        (state) => state.checkoutUserReducer.totalCartUser,
    )

    var respu = user?.id;
    var showCart
    var total = 0
    let miBasket

    if (user?.id !== undefined) {
        showCart = totalCart.filter((e) => e.Cart_Users === user.id && e.state !== 3)
        showCart.map((e) => (total += parseInt(e.subtotal)))
        miBasket = showCart.length
    } else {
        cart.map((e) => (total += parseInt(e.subtotal)))
        miBasket = cart.length
    }

    const showButon = () => {
        if (respu !== undefined) {
          let url = "/create/userDetail";
          if(userdeta?.user_detail !== undefined){
            url = "/checkout";
           }
          return (
            <Button
              component={Link}
              to={url}
              variant="contained"
              color="secondary"
              disabled={!miBasket}
            >
              Check out
            </Button>
          )
        }     
      }
    return (
        <div >
            <h5 className="row__title">Total items: {miBasket}</h5>
            <h5 className="row__title">Total Amount: {parseInt(total)}</h5>
            {showButon()}
        </div>
    );
};

export default TotalUserIn;
