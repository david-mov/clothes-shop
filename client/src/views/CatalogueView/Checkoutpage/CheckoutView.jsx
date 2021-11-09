import CheckoutPage from "./CheckoutPage";
import "../../../styles/screen.css";
import { Link } from "react-router-dom";

export default function CheckoutView() {
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
            <h2>Shopping Cart</h2>
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
        </div>
      </div>
      <CheckoutPage />
    </div>
  );
}
