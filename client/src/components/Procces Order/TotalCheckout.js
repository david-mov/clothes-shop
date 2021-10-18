import React from 'react'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useUserId } from '../../hooks/useUserId';


const Total = () => {
    const cart = useSelector(state => state.checkoutReducer.cart)  

    
    let [id, idOk] = useUserId();
    console.log("IDDDD", id?.id, idOk)
    var total = 0
    cart.map(e => total += parseInt(e.subtotal))


    let miBasket = cart.length

    if(id && !cart?.length){
        return (
            <div >
                <h5>Total items: {miBasket}</h5>
                <h5>Total Amount: {parseInt(total)}</h5>
                <Button
                    component={Link}
                    to='/catalogue'                
                    variant='contained'
                    color='secondary'
                >
                    Check out
                </Button>
            </div>
        );
    }else if(!id && cart?.length){
        return (
            <div >
                <h5>Total items: {miBasket}</h5>
                <h5>Total Amount: {parseInt(total)}</h5>
                <Button
                    component={Link}
                    to='/login'                
                    variant='contained'
                    color='secondary'
                >
                    Check out
                </Button>
            </div>
        );
    }else if(!id && !cart?.length){
        return (
            <div >
                <h5>Total items: {miBasket}</h5>
                <h5>Total Amount: {parseInt(total)}</h5>
                <Button
                    component={Link}
                    to='/login'                
                    variant='contained'
                    color='secondary'
                >
                    Check out
                </Button>
            </div>
        );
    }else{
        return (
            <div >
                <h5>Total items: {miBasket}</h5>
                <h5>Total Amount: {parseInt(total)}</h5>
                <Button
                    component={Link}
                    to='/checkout/Payment'                
                    variant='contained'
                    color='secondary'
                >
                    Check out
                </Button>
            </div>
        );
    }
}

export default Total;
