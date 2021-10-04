import "./CartItem.css"
import { Link } from "react-router-dom";

const CartItem = () => {
    return <div className="cartitem">
        <div className="cartitem__image">
            <img src= /*{item.imageUrl} alt={item.name}*/ "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?                ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                alt="product name" />
        </div>
        <Link to={`/product/ ${111}`} className="cartItem__name">
            <p>Producto 1{/*{item.name}*/}</p>
        </Link>
        <p className="cartItem__price"> $499.99 {/*${item.price}*/}</p>
        <select className="cartItem_select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>

        </select>

        {/*value={item.qty}
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                className="cartItem__select"
            
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                ))}
                </select>*/}
        <button className="cartItem_deleteBtn">
            {/*onClick={() => removeHandler(item.product)}*/}
            <i className="fas fa-trash"></i>
        </button>
    </div>

};

export default CartItem;
