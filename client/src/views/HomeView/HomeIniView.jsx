import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/styleHIView.css";
import "../../styles/HomePrincipal.css";
import MenuButton from "./MenuButon";
import NavbarHam from "./NavBarHam";
import { HeaderWrapper } from "./Header";
import { useEffect } from "react";
import {getLastProducts} from "../../stateManagement/actions/getLastProducts"
import { useDispatch, useSelector } from "react-redux";

export default function HomeIniView() {
  const products = useSelector(state => state.productsReducer.lastProducts)
  const [open, setOpen] = useState(false);
  const  dispatch = useDispatch()


  useEffect(() => {
    dispatch(getLastProducts())
  }, [])

  console.log("ACA TA TU ESTADO PA", products)



  const handleClick = () => {
    setOpen(!open);
  };
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
                products.map((e) => {
                  return (
                <li id="joker" className="c-accordion__item">
                    <div className="c-accordion__content">
                      <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                        {e.name}
                      </h2>
                      <p className="c-accordion__description">
                        {e.description}
                      </p>
                    </div>
                </li>
              )})
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
