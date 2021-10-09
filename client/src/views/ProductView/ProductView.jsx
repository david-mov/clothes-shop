import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../stateManagement/actions/getProductDetails.js'
import "./ProductView.css";
var imageName = "img-product-2.calabera1.jpg"

export default function ProductView() {


    const { productId } = useParams();
    const dispatch = useDispatch();
    
    const product = useSelector(state => state.productsReducer.productDetails);
    console.log("data ", product);
    return (
        <div className="productscreen">
            <Link type="backHome" to="/">
                <button>Back home</button>
            </Link>

            <div className="productscreen__left">
                <div className="left__image">
               
                    <img src={require(`../../assets/imageProduct/${imageName}`).default} />
                </div>
                <div className="left__info">
                    <p className="left__name"> {product.name}</p>
                    <p>Price: {product.price} U$D</p>
                    <p>Description: {product.description}</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price:<span>{product.price} U$D</span></p>
                    <p>Status:
                        <span>
                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                    </p>
                    <p>
                        Quantity:
                        <select>
                            {
                                [...Array(product.stock).keys()].map((e) => {
                                    return <option key={e + 1} value={e + 1}>{e + 1}</option>
                                })
                            }
                        </select>
                    </p>
                    <p>
                        <button type="button"> {/*onClick={addToCartHandler}*/}Add To Cart </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

