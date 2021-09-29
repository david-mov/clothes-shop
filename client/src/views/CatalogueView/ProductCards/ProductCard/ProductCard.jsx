import React from 'react'
import Link from "react-router-dom"

function ProductCard({name, price, description, stock}) {
    return (
        <div className="container">
        <Link className="Link" to={}>
            <h3 className="name">{name}</h3>   
        </Link>
            <h3 className="price">{price}</h3>
            <h3 className="continent">{description}</h3>
            <h3 className="stock">{stock}</h3>
        </div>
    )
}

export default ProductCard
