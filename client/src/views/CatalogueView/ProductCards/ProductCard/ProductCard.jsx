import React from 'react'
import { Link } from 'react-router-dom'
import "../ProductCard/ProductCard.css"

function ProductCard({name, price, description, stock}) {
    return (
        <div className="product">
            <img src=/*{imageUrl}*/"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="Product Name" /*{name}*/
            />
        <div className="product__info">
            <p className="info__name">{name}</p>   
            <p className="info__price">{price}</p>
            <p className="info__description">{description}</p>
            <p className="info__description">{stock}</p>
            <h3 className="info__button">Detail</h3>
        </div>
        </div>
    )
}

export default ProductCard