import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../stateManagement/actions/getProductDetails.js';
import getAddToCart from "../../stateManagement/actions/getAddToCart";
import { cleanUpObjet } from '../../stateManagement/actions/cleanStateObjet';
import "./ProductView.css";
import "../../styles/styleDetallesCD.css";
import { AddShoppingCart } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";



export default function ProductView() {
    //aca el estado ratin
    var rating = 5;
    const { productId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(productId));
        return () => {
            dispatch(cleanUpObjet());
        };
    }, [])

    const product = useSelector(state => state.productsReducer.productDetails);
    const [tengo, setTengo] = useState(false)
    const basket = useSelector(state => state.checkoutReducer.basket)
    const addToCart = () => {
        basket.find((e) => e.productId === productId) ? setTengo(true) : 
        dispatch(getAddToCart(product));
    }

    var nameImagen = "";
    const rendeImages = () => {
        if (product.images !== undefined) {

            if (product.images.length !== 0) {

                return (
                    product.images.map((e) => {
                        nameImagen = "imageProduct/" + e.name;
                        return (
                            <div className="body">
                                <img className="zoom image" src={require(`../../assets/${nameImagen}`).default} data-zoom={require(`../../assets/${nameImagen}`).default} />
                            </div>
                        )
                    })
                )
            } else {

                nameImagen = "products/logo JK&A.png";
                return (
                    <div className="body">
                        <img className="zoom image" src={require(`../../assets/${nameImagen}`).default} data-zoom={require(`../../assets/${nameImagen}`).default} />
                    </div>
                )
            }

        }

    }

    return (
        <div>
            <div className="todo">
                <div className="navbar">
                    <div className="navbar__logo">
                        <img
                            className="img"
                            src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
                            alt="clothes-Shop"
                            border="0"
                        ></img>
                    </div>
                    <div className="cart__link">
                        <h2>Product Detail</h2>
                    </div>
                    <ul className="navbar__links">
                        <li className="saco">
                            <Link to="/catalogue" className="cart__link">
                                <i className="fas fa-arrow-left fa-1x"></i>
                                <span>
                                    Go to back <span className="cartlogo__badge">{ }</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="productscreen">
                <div className="productscreen__left">
                    <div className="left__image">
                        {rendeImages()}
                    </div>
                </div>
                <div className='mirar'>
                    <div className="left__info">
                        <p className="left__name"> {product.name}</p>
                        <p>Price: {product.price} U$D</p>
                        <p>Description: {product.description}</p>
                        <p>Rating: {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <span>&#11088;</span>
                            ))}</p>
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

                            <IconButton aria-label='Add to Cart'>
                                <AddShoppingCart fontSize='medium' onClick={(ev) => addToCart(ev)} />
                            </IconButton>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

