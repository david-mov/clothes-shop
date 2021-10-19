import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { postAddToCart } from "../../../../stateManagement/actions/postAddToCart";
import "../../../../styles/styleCata2.css";

function ProductCard2(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.checkoutReducer.cart);
  const [contador, setContador] = useState(1);
  const [tengo, setTengo] = useState(false);
  const [showDetail, setshowDetail] = useState(false);
  const {
    name,
    price,
    stock,
    description,
    image,
    rating,
    productId,
    quantity,
  } = props;

  const addToCart = (ev) => {
    var quantity = contador;
    var Cart_product = productId;
    console.log("ACA SI ENTRO BRO", productId, quantity, price);
    var subtotal = price * quantity;
    cart.find((e) => e.product.id == productId)
      ? setTengo(true)
      : dispatch(postAddToCart({ Cart_product, subtotal, quantity }));
  };

  var nameImagen = "";

  if (image !== undefined) {
    nameImagen = "imageProduct/" + image.name;
  } else {
    nameImagen = "products/logo JK&A.png";
  }

  const vistaRapida = () => {
    setshowDetail(true);
  };

  const hidenVistaRapida = () => {
    setshowDetail(false);
  };
  const show = () => {
    if (showDetail) {
      return vistaRapidaProduct();
    }
  };

  const addCantidad = () => {
    if (contador !== stock) {
      setContador(contador + 1);
    }
  };

  const removeCantidad = () => {
    if (contador !== 1) {
      setContador(contador - 1);
    }
  };

  const vistaRapidaProduct = () => {
    return (
      <div>
        <div className="infoRapidaModal">
          <div className="closeModal"></div>
          <div className="modalContainer">
            <div className="topContent">
              <div className="imagenContainer zoom_section">
                <div
                  className="zoom_launcher zoomWatch"
                  title="Closed"
                  onClick={hidenVistaRapida}
                >
                  X
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path d="M2.002 40h22v22h-22z"></path>
                    <path d="M2 28V2h60v60H36"></path>
                    <path d="M30 34l22-22m-16 0h16v16"></path>
                  </svg>
                </div>
                <div className="zoom_imgOrigin wrapperImg">
                  {hidenVistaRapida}
                  <img
                    className="imgProd"
                    src={require(`../../../../assets/${nameImagen}`).default}
                    alt="Ima not found"
                  />
                </div>
              </div>
              <div className="texto">
                <div className="wrapper">
                  <p className="nombre">{name}</p>
                  <div className="precios">
                    <p className="precio">{price || price}</p>
                    {price ? <p className="precioOferta">${price}</p> : ""}
                  </div>
                  <p className={`stock ${stock ? "" : "out"} bold`}>
                    {stock
                      ? "Disponible en tienda y listo para enviar"
                      : "Fuera de stock"}
                  </p>
                  <p className="codigo">
                    <span className="bold">Stock Product: </span>
                    {stock}
                  </p>
                  <p className="codigo">
                    <span className="bold">Code Product: </span>
                    {productId}
                  </p>
                  <div className="actions">
                    <div
                      className={`component_toCartCantidad ${
                        !stock ? "disabled" : ""
                      }`}
                    >
                      <div
                        className={`toCartBoton menos ${
                          contador === 1 ? "disabled" : ""
                        }`}
                        onClick={removeCantidad}
                      ></div>
                      <div className="">{contador}</div>
                      <div
                        className={`toCartBoton mas ${
                          contador === stock ? "disabled" : ""
                        }`}
                        onClick={addCantidad}
                      ></div>
                    </div>
                    <div
                      onClick={(ev) => addToCart(ev)}
                      className={`botonTextoIcono ${!stock ? "disabled" : ""}`}
                    >
                      <label
                        className="labelBoton"
                        onClick={(ev) => addToCart(ev)}
                      >
                        Add to Cart
                      </label>
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
                  <p className="descripcion">{description}</p>
                  <Link className="boton" to={`/product/${productId}`}>
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  let clases = "card";
  if (!price) clases += " oferta";
  if (!stock) clases += " out";

  return (
    <div className={clases}>
      <div className="innerProd">
        <div className="imgWrapper">
          <div
            className="detalleRapido"
            value={productId}
            onClick={vistaRapida}
          >
            <div className="icono">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path d="M39.049 39.049L56 56"></path>
                <circle cx="27" cy="27" r="17"></circle>
              </svg>
            </div>
            <p>Vista rapida</p>
          </div>

          <img
            className="imgProd"
            src={require(`../../../../assets/${nameImagen}`).default}
            alt="Imag not found"
          ></img>
        </div>
        <a className="info" href="#">
          <p className="prodName">{name}</p>
          <p className="prodDesc">{description}</p>
          <div className="precios">
            <p className="precio">{price || price}</p>
            <div>
              {price ? <p className="precioOriginal">{price}</p> : ""}
              <p className={`stock ${!stock ? "out" : ""}`}>
                {stock ? "En stock" : "Fuera de stock"}
              </p>
            </div>
          </div>
        </a>
        <div className="actions">
          <Link className="boton" to={`/product/${productId}`}>
            Show Details
          </Link>
          <div className="boton alCarrito" onClick={(ev) => addToCart(ev)}>
            Add to Cart
          </div>
          <div className="row-buttons">
            <div className="aFavs favoritos">
              <div className="icono">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <span>&#11088;</span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {show()}
    </div>
  );
}
export default ProductCard2;
