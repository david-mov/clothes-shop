import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailProduct from "./DetailsInfoG"
import { useParams } from "react-router";
import { getUpdateProductDetails } from "../../../stateManagement/actions/getUpdatePDetail";
import { cleanUpdate } from "../../../stateManagement/actions/CleanPutUpdate";


const TableReportProduct = () => {
    const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(getUpdateProductDetails(productId));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, productId]);

  const product = useSelector(
    (state) => state.productsReducer.productUpdateDetails
  );

  const listInfo = () => {
    if (Object.keys(product).length !== 0) {
        console.log(product.name,"product.name")
      return (
        <DetailProduct
          idProduct={productId}
          name={product.name}
          categories={product.categories}
          price={product.price}
          description={product.description}
          color={product.color}
          sizes={product.sizes}
          type={product.type}
          stock={product.stock}
          productId={productId}
          images={product.images}
          ratings={product.ratings}
          views={product.views}
          createdAt={product.createdAt}
          updatedAt={product.updatedAt}
        />
      );
    }
  };

  console.log("soy product",product)
    return (
        <div className="container1">
            <div className="row row--top-40">
                <div className="col-md-12">
                    <h2 className="row__title"></h2>
                </div>
            </div>
            <div className="row row--top-20">
                <div className="col-md-12">
                    <div className="table-container">
                        <Link to="/"><button className='button2'></button ></Link>
                        <table className="table">
                            <thead className="table__thead">
                                <tr>
                                    <th className="table__th">Name</th>
                                    <th className="table__th">Price</th>
                                    <th className="table__th">Description</th>
                                    <th className="table__th">color</th>
                                    <th className="table__th">Stock</th>
                                    <th className="table__th">type_product</th>
                                    <th className="table__th">categories</th>
                                    <th className="table__th">sizes</th>
                                    <th className="table__th">Stars</th>
                                    <th className="table__th">Count Views</th>
                                    <th className="table__th">Count Rating</th>
                                    <th className="table__th">Date Create</th>
                                    <th className="table__th">Date Last Update</th> 
                                    <th className="table__th">Update Product</th>
                                    <th className="table__th">Delete Product</th>
                                </tr>
                            </thead>

                            
                            {listInfo()}
                           
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TableReportProduct;


