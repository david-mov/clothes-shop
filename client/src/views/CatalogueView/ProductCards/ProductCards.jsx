import React from "react";
import './ProductCards.css';
import ProductCard from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";


const Product = () => {
  var { products } = useSelector((state) => state.productsReducer);
  //aca el estado ratin
  var rating = 2;
  return (
    <div>
    <div class="pagination">
          <a href="#" class="pagination-item ">prev</a>
          <a href="#" class="pagination-item active">1</a>
          <a href="#" class="pagination-item ">2</a>
          <a href="#" class="pagination-item ">3</a>
          <a href="#" class="pagination-item ">4</a>
          <a href="#" class="pagination-item ">next</a>
        </div>
    <div className="homescreen__products">
      {products?.map((e) => (
        <ProductCard
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
      
    </div>
  );
};

export default Product;
