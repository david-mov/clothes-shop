import React from 'react'
import { Link } from 'react-router-dom'
import "../ProductCard/ProductCard.css"
import { AddShoppingCart } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import getAddToCart from "../../../../stateManagement/actions/getAddToCart"
import { useSelector } from "react-redux";


function ProductCard(props) {
    const { name, price, stock, description, image, rating, productId } = props;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(getAddToCart(props));
    }

    return (

        <div className="product">
            <div className="product__name">
                <p className="info__name">{name}</p>
            </div>
            <img src=/*{imageUrl}*/"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="Product Name" /*{name}*/
            />

            <div className="product__info">
                <p className="info__price">Price US${price}</p>
                <p className="info__description">Description: {description}</p>
                <p className="info__stock">stock {stock}</p>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart fontSize='medium' onClick={(ev) => addToCart(ev)} />
                </IconButton>
                <Link className='Link' to={`/product/${productId}`}>
                    <h3 className="info__button">Detail</h3>
                </Link>
            </div>

        </div>
    )
}

export default ProductCard