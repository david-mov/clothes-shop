import React from 'react'
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import getAddToCart from "../../stateManagement/actions/getAddToCart"
import getRemoveItem from "../../stateManagement/actions/getRemoveItem"
//import { useStateValue } from "../../StateProvider";
import accounting from "accounting";
//import { actionTypes } from "../../stateManagement/reducer/checkoutReducer";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 300,
    },
    action: {
        marginTop: "1rem",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },

    cardRating: {
        display: "flex",
    },

}));

export default function CheckoutCard({
    product, key
}) {

    console.log(product, "Productos en el Carrito")
    const { id, name, price, image, rating, description } = product;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    /* var { basket } = useSelector(state => state.checkoutReducer)
 
     const dispatch = useDispatch();
     const idCart = basket.map((e) => {
         return { value: e.id }
     })
     /*const addToCart = () => {
         dispatch(getAddToCart(idCart));
 
     }*/
    //const CheckoutCard = ({ product: { id, name, image, price } }) => {
    //const classes = useStyles();
    //const [/*{ basket}*/dispatch] = useStateValue();

    const dispatch = useDispatch();
    const RemoveItem = (event, id) => {
        event.preventDefault();
        dispatch(getRemoveItem(id));
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <Typography
                        className={classes.action}
                        variant='h5'
                        color='textSecondary'
                    >
                        {accounting.formatMoney(price, "$")}
                    </Typography>
                }
                title={name}
                subheader='in Stock'
            />
            <CardMedia className={classes.media} image={image} title={name} />
            <CardActions disableSpacing className={classes.cardActions} >
                <div className={classes.cardRating}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))}
                </div>
                <IconButton onClick={(event) => RemoveItem(event, id)}>
                    <DeleteIcon fontSize='large' />
                </IconButton>
            </CardActions>
        </Card >

    );
};
