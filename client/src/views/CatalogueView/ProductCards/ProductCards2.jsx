import React from "react";
import "../../../styles/stylePaginator.css";
import "../../../styles/styleCata2.css";
import ProductCard2 from "./ProductCard/ProductCard2";
import { useSelector } from "react-redux";

const Product = () => {
  var { products } = useSelector((state) => state.productsReducer);
  //aca el estado ratin
  var rating = 2;
  
  return (
    <div>
    <div className="pagination">
          <a href="#" className="pagination-item ">prev</a>
          <a href="#" className="pagination-item active">1</a>
          <a href="#" className="pagination-item ">TO</a>
          <a href="#" className="pagination-item ">33</a>
          <a href="#" className="pagination-item ">next</a>
        </div>
    <div className="homescreen__products">
      {products?.map((e) => (
        <ProductCard2
          key={e.id}
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
