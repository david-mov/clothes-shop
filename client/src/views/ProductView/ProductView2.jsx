import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../stateManagement/actions/getProductDetails.js";
import { cleanUpObjet } from "../../stateManagement/actions/cleanStateObjet";
import "../../styles/productDetails.css";
import IconButton from "@material-ui/core/IconButton";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Select from "react-select";
import { postAddToCart } from "../../stateManagement/actions/postAddToCart"
import { useUserId } from "../../hooks/useUserId.js";
import { postAddToCartUser } from "../../stateManagement/actions/postAddToCartUser.js";
import Product from "../CatalogueView/ProductCards/ProductCards2.jsx";
import { getAllsizes } from "../../stateManagement/actions/getAllsizes.js";

export default function ProductView() {
  //aca el estado ratin
  var rating = 5;
  const { productId } = useParams();
  const dispatch = useDispatch();
  let [user, okId] = useUserId();
  var Cart_Users, CartU_product, sizesUser, quantity, subtotal, showCart, Cart_product;
  useEffect(() => {
    dispatch(getProductDetails(productId));
    dispatch(getAllsizes());
    return () => {
      dispatch(cleanUpObjet());
    };
  }, [dispatch, productId]);

  let sizess = useSelector((state) => state.sizesReducer.sizes);
  const product = useSelector((state) => state.productsReducer.productDetails);
  const [vauleS, setvauleS] = useState(false);
  const [Input, setInput] = useState({});
  const [contador, setContador] = useState(1);
  const cart = useSelector((state) => state.checkoutReducer.cart);
  var totalCart = useSelector((state) => state.checkoutUserReducer.totalCartUser);

  console.log("PRODUCT", product)

  if (user !== undefined || user !== null) {
    showCart = totalCart.filter((e) => e.Cart_Users === user?.id)
    

  } else {
    showCart = cart;
  }

  const addToCart = (ev) => {
    if (user !== undefined || user !== null) {
      sizesUser = Input.names?.join(" ");
      Cart_Users = user?.id;
      quantity = contador;
      CartU_product = productId;
      subtotal = product.price * quantity;
      dispatch(postAddToCartUser({ CartU_product, Cart_Users, subtotal, quantity, sizesUser }))
    }

    quantity = contador;
    Cart_product = productId;
    subtotal = product.price * quantity;
    dispatch(postAddToCart({ Cart_product, subtotal, quantity }));

  }

  var nameImagen = "";
  const rendeImages = () => {
    if (product.images !== undefined) {
      if (product.images.length !== 0) {
        return product.images.map((e) => {
          nameImagen = "imageProduct/" + e.name;
          return (
            <img
              src={require(`../../assets/${nameImagen}`).default}
              alt="No imagen"
            ></img>
          );
        });
      } else {
        nameImagen = "products/logo JK&A.png";
        return (
          <img
            className="img_card"
            src={require(`../../assets/${nameImagen}`).default}
            alt="No imagen"
          ></img>
        );
      }
    }
  };

  const onSelectChangeSize = (vauleS) => {
    setInput({
      ...Input,
      sizes: vauleS.map(e => e.value),
      names: vauleS.map(e => e.label)
      
      
    });
    setvauleS(vauleS);
    // addSizes(sizesEnv);
  };
  const addSizes = (tipesEnv) => {
    setInput({
      ...Input,
      sizes: tipesEnv,
    });
  };

  
  const sizesSelect =  () => {

    if (Object.keys(product).length !== 0) {

      const Optionsizes =  product?.sizes?.map((e) => {
        return {
          label: e.name,
          value: e.size_product?.sizeId
        }
      });
      
      return (
        <Select
          value={vauleS}
          options={Optionsizes}
          onChange={onSelectChangeSize}
          isMulti
        />
      )

    }

      


    
  }

  const addCantidad = () => {
    if (product.stock !== 0) {
      if (contador !== product.stock) {
        setContador(contador + 1);
      }
    }
  };

  const removeCantidad = () => {
    if (contador !== 1) {
      setContador(contador - 1);
    }
  };

  console.log("INPUT",Input)

  return (
    <div>
      <div className="todo1">
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
          <li className="saco">
            <Link to="/CheckoutPage">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={showCart?.length} color="secondary">
                  <ShoppingCart
                    className="temp"
                    fontSize="large"
                    color="ligth"
                  />
                </Badge>
              </IconButton>
            </Link>
          </li>
        </div>
      </div>
      <div className="infoRapidaModal2">
        <div className="modalContainer">
          <div className="topContent">
            <div className="zoom_imgOrigin wrapperImg">
              <div id="emotes" className="zoom_imgSource imagen ">
                {rendeImages()}
              </div>
            </div>
          </div>
          <div className="texto">
            <div className="wrapper">
              <p className="nombre">{product.name}</p>
              <div className="precios">
                <p className="precio">
                  {product.price || product.price}
                </p>
                {product.price ? (
                  <p className="precioOferta">${product.price}</p>
                ) : (
                  ""
                )}
              </div>
              <p className={`stock ${product.stock ? "" : "out"} bold`}>
                {product.stock
                  ? "Disponible en tienda y listo para enviar"
                  : "Fuera de stock"}
              </p>
              <p className="codigo">
                <span className="bold">Stock Product: </span>
                {product.stock}
              </p>
              <p className="codigo">
                <span className="bold">Code Product: </span>
                {productId}
              </p>
              <p className="descripcion">
                <span className="bold">Color: </span>
                {product.color}
              </p>
              <p className="descripcion">
                <span className="bold">Rating: </span>
              </p>
              <p>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <span>&#11088;</span>
                  ))}
              </p>
              <p className="descripcion">
                <span className="bold">Type: {product?.type?.name} </span>
              </p>
              <p className="descripcion">
                <span className="bold">Sizes: </span>
              </p>
              <p>
                {sizesSelect()}
              </p>
              <div className="actions">
                <div
                  className={`component_toCartCantidad ${!product.stock ? "disabled" : ""
                    }`}
                >
                  <div
                    className={`toCartBoton menos ${contador === 1 ? "disabled" : ""
                      }`}
                    onClick={removeCantidad}
                  ></div>
                  <div className="">{contador}</div>
                  <div
                    className={`toCartBoton mas ${contador === product.stock ? "disabled" : ""
                      }`}
                    onClick={addCantidad}
                  ></div>
                </div>
                <div
                  onClick={(ev) => addToCart(ev)}
                  className={`botonTextoIcono ${!product.stock ? "disabled" : ""
                    }`}
                >
                  <label className="labelBoton">Add to Cart</label>
                  <div className="icono">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                    >
                      <path d="M2 6h10l10 40h32l8-24H16"></path>
                      <circle cx="23" cy="54" r="4"></circle>
                      <circle cx="49" cy="54" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="descripcion">
                <span className="bold">Description: </span>
              </p>
              <p className="descripcion">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
