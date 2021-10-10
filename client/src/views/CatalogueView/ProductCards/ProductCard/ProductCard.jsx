import React from 'react'
import { Link } from 'react-router-dom'
import "../ProductCard/ProductCard.css"
import { AddShoppingCart } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import getAddToCart from "../../../../stateManagement/actions/getAddToCart"
import { useSelector } from 'react-redux';
import { useState } from 'react';

function ProductCard(props) {

   const [contador, setContador] = useState(1) 
    const [tengo, setTengo] = useState(false)
     const basket = useSelector(state => state.checkoutReducer.basket)
    const { name, price, stock, description, image, rating, productId } = props;
    const dispatch = useDispatch();
    const addToCart = () => {
        basket.find((e) => e.productId === productId) ? setTengo(true) : 
        dispatch(getAddToCart(props));
    }
    
    var nameImagen = "";
    
    if(image !== undefined){
        nameImagen = "imageProduct/"+image.name;
    }else{
        nameImagen = "products/logo JK&A.png";
    }



    return (
        <div className="product">

            <div className="product__name">
                <p className="info__name">{name}</p>
            </div>
            <img src={require(`../../../../assets/${nameImagen}`).default}
                alt={nameImagen}

            />
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__price">Price US${price}</p>
                {/* <p className="info__description">Description: {description}</p> */}
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