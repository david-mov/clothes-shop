import React, { useState } from 'react'
import { Button, makeStyles } from "@material-ui/core";
import accounting from "accounting";
import { getBasketTotal } from "../../stateManagement/reducer/checkoutReducer";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "20vh",
    // },
    // button: {
    //     maxWidth: "200px",
    //     marginTop: "2rem",
    // },
}));

const Total = () => {
    const cart = useSelector(state => state.checkoutReducer.cart)
    var totalAmount = useSelector(state => state.checkoutReducer.totalAmount)
    const classes = useStyles();
    
   

    var total = 0
    for(var i = 0; i < cart.length; i++){
    total = total + parseInt(cart[i].subtotal )
    }


    let miBasket = cart.length
    return (
        <div className={classes.root}>
            <h5>Total items: {miBasket}</h5>
            <h5>Total Amount: {parseInt(total)}</h5>
            <Button
                component={Link}
                to='/checkout'
                className={classes.button}
                variant='contained'
                color='secondary'
            >
                Check out
            </Button>
        </div>
    );
};

export default Total;
