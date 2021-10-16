import "../../../styles/styleChecPage.css";
import {React, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CheckoutCard from "../../../components/Procces Order/CheckoutCard";
import TotalCheckout from "../../../components/Procces Order/TotalCheckout";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {postAddToCart} from "../../../stateManagement/actions/postAddToCart"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));
const CheckoutPage = () => {
    
    const classes = useStyles();
    var { cart } = useSelector(state => state.checkoutReducer)
    var { totalAmount} = useSelector(state => state.checkoutReducer)
    function FormRow() {
        return (
            <div className="container">
                <div className="row row--top-20">
                    <div className="col-md-12">
                        <div className="table-container">
                            <table className="table">
                                <thead className="table__thead">
                                    <tr>
                                        <th className="table__th">Name</th>
                                        <th className="table__th">Price</th>
                                        <th className="table__th">Qty</th>
                                        <th className="table__th">Progress</th>
                                        <th className="table__th">Rating</th>
                                        <th className="table__th">aumentar y disminuir cantidad</th>
                                        <th className="table__th"></th>
                                    </tr>
                                </thead>
                                <tbody className="table__tbody">
                                    {cart?.map((e) => (
                                        <CheckoutCard key={e.product.id} 
                                        name={e.product.name}
                                        stock={e.product.stock}                         
                                        productId={e.product.id}
                                        idCarrito={e.id}
                                        quantity={e.quantity}
                                        price={e.product.price}
                                        image={e.product.images[0]}
                                        subtotal={e.subtotal}
                                        size={e.product.size}
                                        color={e.product.color}
                                         />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>        
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <TotalCheckout totalAmount={totalAmount}/>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
