import React from "react";
import SuperAdminPage from "./componentes/SuperAdminPage";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLogout } from "../../stateManagement/actions/getLogout";

const ListasAdminUsers = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
		dispatch(getLogout());
		history.push("/")
	}
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
            <h2>List User</h2>
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
            <li className="saco">
							<button onClick={() => handleLogout()}>
								<span>
									Logout
								</span>
							</button>
						</li>
          </ul>
        </div>
      </div>
      <SuperAdminPage />
    </div>
  );
};

export default ListasAdminUsers;
