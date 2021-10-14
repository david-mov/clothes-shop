import React from "react";
import "../../../styles/stylePaginator.css";
import "../../../styles/styleCata2.css";
import ProductCard2 from "./ProductCard/ProductCard2";
import { useSelector } from "react-redux";
import Paginator from '../../PaginatorView/PaginatorView';

const Product = () => {
  var { products } = useSelector((state) => state.productsReducer);
  //aca el estado ratin
  var rating = 2;
  
  return (
    <div>
    <Paginator />
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
      <Paginator />
      
    </div>
  );
};

export default Product;
