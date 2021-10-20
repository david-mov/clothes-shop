import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useUserId } from "../../hooks/useUserId";
import { getUserDetail } from "../../stateManagement/actions/getUserDetail";
import UpdateCheckout from "./../FormCrudView/components/Update/UpdateCheckout";
import { Link } from "react-router-dom";



const UpdateCheckoutView = () => {

  const dispatch = useDispatch();
  let [idCookie, idOk] = useUserId()  

  useEffect(() => {
    if(idCookie?.id !== undefined){
      dispatch(getUserDetail(idCookie?.id));
      return () => {
        dispatch(cleanUpdate());
      };

    }
  }, [dispatch, idCookie?.id]);

  const user = useSelector((state) => state.userReducer.userDetails);

  const formulario = () => {
    if (Object.keys(user).length !== 0) {
      return (
        <UpdateCheckout
          name={user.user.name} 
          id = {idCookie?.id}
          email = {user.user.email}
          address = {user.address}
          nacionality = {user?.nacionality}
          sex = {user.sex}
          location = {user.location}
          documentType = {user.documentType}
          numberDocument = {user.numberDocument}
          birthDate = {user.birthDate}
          phone = {user.phone}
        />
      );
    }
  };

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
            <h2>Update Details</h2>
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
  {formulario()}
  </div>
  )
};

export default UpdateCheckoutView;


