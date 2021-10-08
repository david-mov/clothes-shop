import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
//import { useStateValue } from "../../../StateProvider"
import CheckoutCard from "../../../components/Procces Order/CheckoutCard";
import TotalCheckout from "../../../components/Procces Order/TotalCheckout";
import ProductCard from '../ProductCards/ProductCard/ProductCard';
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CheckoutPage = () => {
    const classes = useStyles();
    //const [{ basket }, dispatch] = useStateValue();
    var { basket } = useSelector(state => state.checkoutReducer)
    console.log(basket, "Linea 100")
    /*var { products } = useSelector(state => state.productsReducer)*/
    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((product) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={product.id} product={product} />
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <TotalCheckout />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default CheckoutPage;
