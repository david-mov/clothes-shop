import React from "react";
import { Link } from "react-router-dom";
import "../ProductCard/ProductCard.css";
import { AddShoppingCart } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import getAddToCart from "../../../../stateManagement/actions/getAddToCart";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {postAddToCart} from "../../../../stateManagement/actions/postAddToCart"
import {getAllCart} from "../../../../stateManagement/actions/getAllCart"

function ProductCard(props) {
  const [contador, setContador] = useState(1);
  const [tengo, setTengo] = useState(false);
  const cart = useSelector((state) => state.checkoutReducer.cart);
  const { name, price, stock, description, image, rating, productId } = props;
  const dispatch = useDispatch();
  
  
  const addToCart = (ev) => {
    dispatch(getAllCart())
    var Cart_product = productId
    var quantity = 1
    var subtotal = price * quantity
    cart.find(e => (e.product.id) == (productId)) ? setTengo(true) : dispatch(postAddToCart({Cart_product, subtotal, quantity }))
  }
  var nameImagen = "";

  if (image !== undefined) {
    nameImagen = "imageProduct/" + image.name;
  } else {
    nameImagen = "products/logo JK&A.png";
  }

  return (
    <div className="product">
      <img
        className="img_product"
        src={require(`../../../../assets/${nameImagen}`).default}
        alt={nameImagen}
      />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__price">Price US: ${price}</p>
        <p className="info__stock">stock: {stock}</p>
        <p>
          Rating:{" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>&#11088;</span>
            ))}
        </p>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize="medium" onClick={(ev) => addToCart(ev)} />
        </IconButton>
        <Link className="Link" to={`/product/${productId}`}>
          <h3 className="info__button">Detail</h3>
        </Link>
      </div>
    </div>
  );
}
export default ProductCard;
