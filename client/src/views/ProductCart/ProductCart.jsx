import { Link } from "react-router-dom";
import "./ProductCart.css";

const ProductCart = () => {
  return (
    <div className="detailTotal">
      <div className="detailLink">
        <Link className="detailClick" to="/">
          Home
        </Link>
      </div>
      <div className="detailContainer">
        <div className="elcountry">Cart Detail</div>
        <div className="detailName">name</div>
        <img className="imagenn" alt="no image" />
        <div className="detail">precio</div>
        <div className="detail">cantidad</div>
        <div className="detail">n° pedido</div>
        <div className="detail">fecha</div>
      </div>
    </div>
  );
};
export default ProductCart;
