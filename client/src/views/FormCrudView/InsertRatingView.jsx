import React from "react";
import { Link } from "react-router-dom";
import InsertRating from "./components/Insert/InsertRating";

const InsertRatingView = () => {
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
            <h2>Insert Rating</h2>
          </div>
          <ul className="navbar__links">
            <li className="saco">
              <Link to="/list" className="cart__link">
                <i className="fas fa-arrow-left fa-1x"></i>
                <span>
                  Go to back <span className="cartlogo__badge">{}</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <InsertRating />
    </div>
  );
};

export default InsertRatingView;
