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
        minWidth: 600,
    },
    action: {
        marginTop: "1rem",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", 
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
    const { productId, name, price, image, rating, stock, description } = product;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const dispatch = useDispatch();
    const RemoveItem = (event, productId) => {
        event.preventDefault();
        console.log("desde checkout card", productId)
        dispatch(getRemoveItem(productId));
    };

    return (
        <tr className="table-row table-row--chris">
        
            <td className="table-row__td">
                
                    <img className="table-row__img" src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="not image"/>
               
                <div className="table-row__info">
                    <p className="table-row__name">{name}</p>
                    <span className="table-row__small">Stock {stock}</span>
                </div>
            </td>
            <td data-column="Policy" className="table-row__td">
                <div className="">
                    <p className="table-row__policy">${price}</p>
                    <span className="table-row__small">Unit Price</span>
                </div>
            </td>

            <td data-column="Progress" className="table-row__td">
                <p className="table-row__progress status--blue status">12</p>
            </td>

            <td data-column="Progress" className="table-row__td">
                <p className="table-row__progress status--blue status">On Track</p>
            </td>

            <td className="table-row__td">
                <CardActions disableSpacing className={classes.cardActions} >
                    <div className={classes.cardRating}>
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>&#11088;</p>
                            ))}
                    </div>
                    
                </CardActions>

            </td>
            <td className="table-row__td">
               {/* aca van los botones de aumentar y disminuir */}

            </td>
            <td className="table-row__td">
                <CardActions disableSpacing className={classes.cardActions} >                    
                    <IconButton onClick={(event) => RemoveItem(event, productId)}>
                        <DeleteIcon fontSize='large' />
                    </IconButton>
                </CardActions>

            </td>

        </tr>


    );
};
