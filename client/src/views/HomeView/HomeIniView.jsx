import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/styleHIView.css";
import "../../styles/HomePrincipal.css";
import MenuButton from "./MenuButon";
import NavbarHam from "./NavBarHam";
import { HeaderWrapper } from "./Header";
import { useEffect } from "react";
import { getLastProducts } from "../../stateManagement/actions/getLastProducts";
import { useDispatch, useSelector } from "react-redux";


export default function HomeIniView() {
  const products = useSelector((state) => state.productsReducer.lastProducts);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastProducts());
  }, []);


  const handleClick = () => {
    setOpen(!open);
  };

  var urlImg, nameImagen, objImage;

  return (
    <div>
      <div className="contenedor contenido-header">
        <Link to="/">
          <img
            className="img"
            src="https://i.ibb.co/nD1CCgm/clothes-Shop.png"
            alt="clothes-Shop"
            border="0"
          />
        </Link>
        <HeaderWrapper>
          <div className=" contenido-header1">
            <MenuButton open={open} handleClick={handleClick}></MenuButton>
          </div>
          <NavbarHam open={open} />
        </HeaderWrapper>
      </div>
      <div className="contenedor1 seccion">
        <div className="container1">
          <div className="body_hiview">
            <ul className="c-accordion">
              { 

                products.map((e, i) => {
                  
                  if (e.images.length === 0) {
                    nameImagen = "products/logo JK&A.png";
                    urlImg = require(`../../assets/${nameImagen}`).default;
                  }else{
                    objImage = e.images[0];
                    nameImagen = "imageProduct/"+objImage.name;
                    urlImg = require(`../../assets/${nameImagen}`).default;
                  }
                  
                  return (
                    <li key={i} className="c-accordion__item" id="joker"
                      style={{
                        backgroundImage: `url("${urlImg}")`
                      }}
                    >
                      <div className="c-accordion__content">

                        <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                          {e.name}
                        </h2>
                        <p className="c-accordion__description">
                          {e.description}
                        </p>
                      </div>                      
                      <div className="c-accordion__aside">
                        <h2 className="c-accordion__title c-accordion__title--hover-hide">{e.name}</h2>
                      </div>
                    </li>

                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
