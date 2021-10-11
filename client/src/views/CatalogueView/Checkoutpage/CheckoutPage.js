import "../../../styles/styleChecPage.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CheckoutCard from "../../../components/Procces Order/CheckoutCard";
import TotalCheckout from "../../../components/Procces Order/TotalCheckout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));
const CheckoutPage = () => {
  const classes = useStyles();
  var { basket } = useSelector((state) => state.checkoutReducer);
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
                    <th className="table__th">
                      Increase and decrease Quantity
                    </th>
                    <th className="table__th"></th>
                  </tr>
                </thead>
                <tbody className="table__tbody">
                  {basket?.map((product) => (
                    <CheckoutCard key={product.id} product={product} />
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
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
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
                  <h2>Shopping Cart</h2>
                </div>
                <ul className="navbar__links">
                  <li className="saco">
                    <Link to="/catalogue" className="cart__link">
                      <i className="fas fa-arrow-left fa-1x"></i>
                      <span>
                        Go to back <span className="cartlogo__badge">{}</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <TotalCheckout />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
