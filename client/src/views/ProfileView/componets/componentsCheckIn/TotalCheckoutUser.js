import React from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const TotalUserIn = () => {
    const cart = useSelector(state => state.checkoutReducer.cart) 
    var total = 0
    for(var i = 0; i < cart.length; i++){
    total = total + parseInt(cart[i].subtotal )
    }


    let miBasket = cart.length
    return (
        <div >
            <h5>Total items: {miBasket}</h5>
            <h5>Total Amount: {parseInt(total)}</h5>
            <Button
                component={Link}
                to='/checkout'                
                variant='contained'
                color='secondary'
            >
                Check out
            </Button>
        </div>
    );
};

export default TotalUserIn;