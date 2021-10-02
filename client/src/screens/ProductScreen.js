import "./ProductScreen.css";
/*import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../stateManagement/actions/productActions";
import { addToCart } from "../stateManagement/actions/cartActions";

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>Description: {product.description}</p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Price:
                                <span>${product.price}</span>
                            </p>
                            <p>
                                Status:
                                <span>
                                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                            </p>
                            <p>
                                Qty
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>
                                    Add To Cart
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductScreen;*/

const ProductScreen = () => {

    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img
                        src= /*{product.imageUrl}*/"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                        alt="Product Name" /*{product.name}*/
                    />
                </div>
                <div className="left__info">
                    <p className="left__name"> Producto 1 {/*{product.name}*/}</p>
                    <p>Price: $499,9 {/*${product.price}*/}</p>
                    <p>
                        Description:
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        {/*{product.description}*/}
                    </p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price:
                        <span>
                            $499,9
                            {/*${product.price}</span>*/}
                        </span>
                    </p>
                    <p>
                        Status:
                        <span>
                            In Stock
                            {/*{product.countInStock > 0 ? "In Stock" : "Out of Stock"}*/}
                        </span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        {/*<select value={qty} onChange={(e) => setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map((x) => (
                             <option key={x + 1} value={x + 1}>
                                  {x + 1}
                             </option>
                           ))}
                          </select>*/}
                    </p>
                    <p>
                        <button type="button"> {/*onClick={addToCartHandler}*/}Add To Cart </button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProductScreen;
