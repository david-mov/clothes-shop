import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

const Product = () => {
 
    var { products } = useSelector(state => state.productsReducer)   

    return (
        <div className="homescreen__products">

            {products?.map((e) => (                
                < ProductCard
                    name={e.name}
                    price={e.price}
                    description={e.description}
                    stock={e.stock}
                    productId={e.id}
                    image={e.images[0]}
                />
            ))}
        </div>
    )
}

export default Product

