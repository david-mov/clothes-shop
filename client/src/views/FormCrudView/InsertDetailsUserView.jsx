import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useUserId } from "../../hooks/useUserId";
import { getUserIdParams } from "../../stateManagement/actions/getUserIdParams";
import InsertDetailsUser from "./components/Insert/Checkout";

const FormCrudViewDetails = () => {

  let [idCookie, idOk] = useUserId()
  const dispatch = useDispatch();

  useEffect(() => {
    if (idCookie?.id !== undefined) {
      dispatch(getUserIdParams(idCookie?.id));
    }
  }, [dispatch]);

  const userdeta = useSelector((state) => state.userReducer.userDetailIdParams);

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
            <h2>Insert Details</h2>
          </div>
          <div className="cart__link">
            <ul className="navbar__links">
              <li className="saco">
                <Link to="/CheckoutPage" className="cart__link">
                  <i class="fas fa-arrow-left fa-1x"></i>
                  <span>
                    Go to back <span className="cartlogo__badge">{ }</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <InsertDetailsUser
        name={userdeta.name}
        id={idCookie?.id}
        email={userdeta.email}
      />
    </div>
  );
};

export default FormCrudViewDetails;
