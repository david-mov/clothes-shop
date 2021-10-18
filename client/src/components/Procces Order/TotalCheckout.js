import React from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Total = () => {
    const cart = useSelector(state => state.checkoutReducer.cart)  

    var total = 0
    cart.map(e => total += parseInt(e.subtotal))


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

export default Total;
