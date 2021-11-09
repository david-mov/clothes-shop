import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { getUpdateSizeDetails } from "../../stateManagement/actions/getUpdateSizeDetails";
import UpdateZises from "./components/Update/UpdateSizes";
import { Link } from "react-router-dom";

const UpdateCategoriesView = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(getUpdateSizeDetails(productId));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, productId]);

  const size = useSelector((state) => state.sizesReducer.updateSizeDetails);

  const formulario = () => {
    if (Object.keys(size).length !== 0) {
      return <UpdateZises name={size.name} id={productId} />;
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
            <h2>Update size</h2>
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

      {formulario()}
    </div>
  );
};

export default UpdateCategoriesView;
