import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/styleHIView.css";
import "../../styles/HomePrincipal.css";
import MenuButton from "./MenuButon";
import NavbarHam from "./NavBarHam";
import { HeaderWrapper } from "./Header";

export default function HomeIniView() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="contenedor contenido-header">
        <Link to="/">
          <img
            className="img"
            src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
            alt="clothes-Shop"
            border="0"
          />
        </Link>
        <HeaderWrapper>
          <div className=" contenido-header">
            <MenuButton open={open} handleClick={handleClick}></MenuButton>
          </div>
          <NavbarHam open={open} />
        </HeaderWrapper>
      </div>
      <div className="contenedor1 seccion">
        <div className="container1">
          <div className="body_hiview">
            <ul className="c-accordion">
              <li id="joker" className="c-accordion__item">
                <a href="#joker" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      Nike
                    </h2>
                    <p className="c-accordion__description">
                      La marca Nike representa el éxito empresarial. Grandes
                      deportistas llevan sus prendas y zapatillas deportivas y
                      millones de personas en todo el mundo compran sus
                      productos.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      Nike
                    </h2>
                  </div>
                </a>
              </li>
              <li id="john-wick" className="c-accordion__item">
                <a href="#john-wick" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      John Wick
                    </h2>
                    <p className="c-accordion__description">
                      John Wick is on the run after killing a member of the
                      international assassins' guild, and with a $14 million
                      price tag on his head, he is the target of hit men and
                      women everywhere.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      John Wick
                    </h2>
                  </div>
                </a>
              </li>
              <li id="black-panther" className="c-accordion__item">
                <a href="#black-panther" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      New Wallas
                    </h2>
                    <p className="c-accordion__description">
                      T'Challa, heir to the hidden but advanced kingdom of
                      Wakanda, must step forward to lead his people into a new
                      future and must confront a challenger from his country's
                      past.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      New Wallas
                    </h2>
                  </div>
                </a>
              </li>
              <li id="marvel-captain" className="c-accordion__item">
                <a href="#marvel-captain" className="c-accordion__action">
                  <div className="c-accordion__content">
                    <h2 className="c-accordion__title c-accordion__title--hero c-accordion__title--hover-show">
                      Puma
                    </h2>
                    <p className="c-accordion__description">
                      La nueva plataforma de marca tiene como objetivo hacer que
                      Puma sea la marca deportiva más rápida del mundo”. El
                      eslogan habla por sí solo: Forever Faster.
                    </p>
                  </div>
                  <div className="c-accordion__aside">
                    <h2 className="c-accordion__title c-accordion__title--hover-hide">
                      Puma
                    </h2>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
