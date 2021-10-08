import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../stateManagement/actions/getProductDetails.js'
import "./ProductView.css"

export default function ProductView() {
   const { productId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [])
    const product = useSelector(state => state.productsReducer.productDetails);
	return (
        <div className="productscreen">
			<Link type="backHome" to="/">
                <button>Back home</button>
            </Link>

            <div className="productscreen__left">
                <div className="left__image">
                    <img
                        src= /*{product.imageUrl}*/"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                        alt={product.name}
                    />
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
                                    return <option key={e+1} value={e+1}>{e+1}</option>
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

