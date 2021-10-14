import React from "react";
import { Link } from "react-router-dom";
import "../ProductCard/ProductCard.css";
// import { AddShoppingCart } from "@material-ui/icons";
// import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import getAddToCart from "../../../../stateManagement/actions/getAddToCart";
import { useSelector } from "react-redux";
import { useState } from "react";



function ProductCard2(props) {
    const [contador, setContador] = useState(1);
    const [tengo, setTengo] = useState(false);
    const [showDetail, setshowDetail] = useState(false);
    const basket = useSelector((state) => state.checkoutReducer.basket);
    const { name, price, stock, description, image, rating, productId } = props;
    const dispatch = useDispatch();
    const addToCart = () => {
        basket.find((e) => e.productId === productId)
            ? setTengo(true)
            : dispatch(getAddToCart(props));
    };

    var nameImagen = "";

    if (image !== undefined) {
        nameImagen = "imageProduct/" + image.name;
    } else {
        nameImagen = "products/logo JK&A.png";
    }

    const vistaRapida = () => {
        setshowDetail(true);
    }

    const hidenVistaRapida = () => {
        setshowDetail(false);
    }
    const show = () => {
        if (showDetail) {
            return vistaRapidaProduct();
        }
    }

    const addCantidad = () => {
        if (contador !== stock) {
            setContador(contador + 1)
        }
    }

    const removeCantidad = () => {
        if (contador !== 1) {
            setContador(contador - 1)
        }
    }

    const vistaRapidaProduct = () => {

        return (

            <div>
                <div className="infoRapidaModal">
                    <div className="closeModal"></div>
                    <div className="modalContainer">
                        <div className="topContent">
                            <div className="imagenContainer zoom_section">
                                <div className="zoom_launcher zoomWatch" title="Closed" onClick={hidenVistaRapida}>X
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                        <path d="M2.002 40h22v22h-22z"></path>
                                        <path d="M2 28V2h60v60H36"></path>
                                        <path d="M30 34l22-22m-16 0h16v16"></path>
                                    </svg>
                                </div>
                                <div className="zoom_imgOrigin wrapperImg" onClick={hidenVistaRapida}>
                                    <div className="zoom_imgSource imagen" >
                                        <img classNameName="imgProd" src={require(`../../../../assets/${nameImagen}`).default}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="texto">
                                <div className="wrapper">
                                    <p className="nombre">{name}</p>
                                    <div className="precios">
                                        <p className="precio">{price || price}</p>
                                        {price ? <p className="precioOferta">${price}</p> : ''}
                                    </div>
                                    <p className={`stock ${stock ? '' : 'out'} bold`}>{stock ? 'Disponible en tienda y listo para enviar' : 'Fuera de stock'}</p>
                                    <p className="codigo"><span className="bold">Stock Product: </span>{stock}</p>
                                    <p className="codigo"><span className="bold">Code Product: </span>{productId}</p>
                                    <div className="actions">
                                        <div className={`component_toCartCantidad ${!stock ? 'disabled' : ''}`}>
                                            <div className={`toCartBoton menos ${contador === 1 ? 'disabled' : ''}`} onClick={removeCantidad}></div>
                                            <div className="">{contador}</div>
                                            <div className={`toCartBoton mas ${contador === stock ? 'disabled' : ''}`} onClick={addCantidad}></div>
                                        </div>
                                        <div className={`botonTextoIcono ${!stock ? 'disabled' : ''}`}>
                                            <label className="labelBoton">Add to Car</label>
                                            <div className="icono">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
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

        )
    }

    let clases = 'card';
    if (!price) clases += ' oferta';
    if (!stock) clases += ' out';

    return (
        <div className={clases}>
            <div className="innerProd">
                <div className="imgWrapper">
                    <div className="detalleRapido" value={productId} onClick={vistaRapida}>
                        <div className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                <path d="M39.049 39.049L56 56"></path>
                                <circle cx="27" cy="27" r="17"></circle>
                            </svg>
                        </div>
                        <p>Vista rapida</p>
                    </div>
                    <div className="imgProd" >
                        <img className="imgProd" src={require(`../../../../assets/${nameImagen}`).default}></img>
                    </div>
                </div>
                <a className="info" href="#">
                    <p className="prodName">{name}</p>
                    <p className="prodDesc">{description}</p>
                    <div className="precios">
                        <p className="precio">{price || price}</p>
                        <div>
                            {price ? <p className="precioOriginal">{price}</p> : ''}
                            <p className={`stock ${!stock ? 'out' : ''}`}>{stock ? 'En stock' : 'Fuera de stock'}</p>
                        </div>
                    </div>
                </a>
                <div className="actions">
                    <Link className="boton" to={`/product/${productId}`}>
                        Show Details
                    </Link>
                    <div className="boton alCarrito">Agregar al carrito</div>
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


/*
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
*/