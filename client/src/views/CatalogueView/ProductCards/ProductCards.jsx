import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";

const Product = () => {
 
    var { products } = useSelector(state => state.productsReducer)   
    //aca el estado ratin
    var rating = 5;
    return (
        <div className="homescreen__products">

            {products?.map((e) => (                
                < ProductCard
                    name={e.name}
                    price={e.price}
                    description={e.description}
                    stock={e.stock}
                    productId={e.id}
                    rating={rating}
                    image={e.images[0]}
                />
            ))}
        </div>
    )
}

export default Product

