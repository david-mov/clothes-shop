import "../../styles/styleAbout.css";
import React, { useState } from "react";
import MenuButton from "./MenuButon";
import NavbarHam from "./NavBarHam";
import { HeaderWrapper } from "./Header";
import { Link } from "react-router-dom";

export default function AboutView() {
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
      <div className="body-about">
        <ul className="list-members">
          <li className="member">
            <div className="member-image">
              <img src={require("../../assets/team/ailyn.jfif").default} />
            </div>
            <div className="member-info">
              <h3>Ailen Aquino</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <img src={require("../../assets/team/calvo.jpeg").default} />
            </div>
            <div className="member-info">
              <h3>Adolfo Leon Vasquez</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <img src={require("../../assets/team/deskmont.jpeg").default} />
            </div>
            <div className="member-info">
              <h3>Antonio Foronda</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <img src={require("../../assets/team/pachito.jpeg").default} />
            </div>
            <div className="member-info">
              <h3>Francisco Torres</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <img src={require("../../assets/team/rodri.jpeg").default} />
            </div>
            <div className="member-info">
              <h3>Rodrigo Quialvo</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <img src={require("../../assets/team/deiby.jfif").default} />
            </div>
            <div className="member-info">
              <h3>David Movsichoff</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <img src={require("../../assets/team/yil.jpeg").default} />
            </div>
            <div className="member-info">
              <h3>Yilder Navarro</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
          <li className="member">
            <div className="member-image">
              <img src="https://ca.slack-edge.com/TPRS7H4PN-U01RN1MNA14-4dbff6bf3c0d-512" />
            </div>
            <div className="member-info">
              <h3>Daniel Maers</h3>
              <p>Developer Full Stack</p>
              <div className="social-link">
                <i className="fab fa-whatsapp fa-2x"></i>
                <i className="fab fa-github fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
