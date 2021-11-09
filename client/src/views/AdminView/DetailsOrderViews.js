import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getOrderDetails } from "../../stateManagement/actions/getAllOrdersDetails";
import DetailShopping from "./components/DetailShopping";

const DetailsOrderAdmin = () => {

    const dispatch = useDispatch();
    const  {idOrder}  = useParams();

    useEffect(() => {
        dispatch(getOrderDetails(idOrder));
    }, [dispatch, idOrder]);

    var showOrdersDetails = useSelector(
        (state) => state.checkoutUserReducer.totalOrdersDetails,
    )

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
            <h2>Details Order</h2>
          </div>
          <ul className="navbar__links">
            <li className="saco">
              <Link to="/" className="cart__link">
                <i className="fas fa-arrow-left fa-1x"></i>
                <span>
                  Go to back <span className="cartlogo__badge">{}</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
        <DetailShopping data={showOrdersDetails} />
    </div>
  );
};

export default DetailsOrderAdmin;
