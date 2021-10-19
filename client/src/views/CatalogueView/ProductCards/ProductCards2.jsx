import React, { useState, useEffect } from "react";
import "../../../styles/stylePaginator.css";
import "../../../styles/styleCata2.css";
import ProductCard2 from "./ProductCard/ProductCard2";
import { useSelector } from "react-redux";
import { getAllCart } from "../../../stateManagement/actions/getAllCart";
import { useDispatch } from "react-redux";
import { getAllCartUsers } from "../../../stateManagement/actions/getAllCartUser";


const Product = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCart()); 
    dispatch(getAllCartUsers());
  }, [dispatch]);

  var { products } = useSelector((state) => state.productsReducer);
  //aca el estado ratin
  var rating = 2;
  //paginator 
  var countP = 5;
  var totalCurrent = Math.ceil(products.length / countP);
  const [currentPage, setCurrentPage] = useState(0);
  const [actualCurrent, setactualCurrent] = useState(1);

  const nextPage = () => {
    if (totalCurrent !== actualCurrent) {
      setactualCurrent(actualCurrent + 1);
      setCurrentPage(currentPage + countP);
    }
  };

  const prevPage = () => {
    if (actualCurrent > 1) {
      setactualCurrent(actualCurrent - 1);
      setCurrentPage(currentPage - countP);
    }
  };  

  const show = () => {
    if (actualCurrent === 1) {
      return (
        <div className="pagination">
          <p className="pagination-item active">{actualCurrent}</p>
          <p>TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
          <p className="pagination-item " onClick={nextPage}>next</p>
        </div>
      )
    } else if (actualCurrent >= totalCurrent) {

      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>prev</p>
          <p className="pagination-item active">{actualCurrent}</p>
          <p>TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
        </div>
      )
    } else {

      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>prev</p>
          <p className="pagination-item active">{actualCurrent}</p>
          <p>TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
          <p className="pagination-item " onClick={nextPage}>next</p>
        </div>
      )
    }
  }

  return (
    <div>
    {show()}
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
        )).slice(currentPage, currentPage + countP)}

      </div>
      {show()}
    </div>
  );
};

export default Product;
