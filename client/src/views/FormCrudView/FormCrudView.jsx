import React from "react";
import { Link } from "react-router-dom";
import Insert from "./components/Insert/Insert.jsx";

const FormCrudView = () => {
  return (
    <div>
      <div className="todo">
        <div className="navbar">
          <div className="navbar__logo">
            <img
              className="img"
              src="https://i.ibb.co/nD1CCgm/clothes-Shop.png"
              alt="clothes-Shop"
              border="0"
            ></img>
          </div>
          <div className="cart__link">
            <h2>Create Product</h2>
          </div>
          <div className="cart__link">
            <ul className="navbar__links">
              <li className="saco">
                <Link to="/list" className="cart__link">
                  <i class="fas fa-arrow-left fa-1x"></i>
                  <span>
                    Go to back <span className="cartlogo__badge">{}</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Insert />
    </div>
  );
};

export default FormCrudView;
