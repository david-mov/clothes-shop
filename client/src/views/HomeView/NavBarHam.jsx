import React from "react";
import { NavbarWrapper } from "./NavbarStyles";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../styles/HomePrincipal.css";
import { getLogout } from "../../stateManagement/actions/getLogout";
import { useUserProfile } from "../../hooks/useUserProfile";

function NavbarHam({ open }) {
  const dispatch = useDispatch();
  const history = useHistory();
  let [dataUser] = useUserProfile();

  function handleLogout() {
    dispatch(getLogout());
    history.push("/catalogue");
  }
  
  const showLinks = () => {
    switch (dataUser.user_rol) {
      case 1:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/superadmin">Hola! {dataUser.name}</Link>
            <li className="saco">
              <button onClick={() => handleLogout()}>
                <span>Logout</span>
              </button>
            </li>
          </nav>
        );
      case 2:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/admin">Hola! {dataUser.name}</Link>
            <li className="saco">
              <button onClick={() => handleLogout()}>
                <span>Logout</span>
              </button>
            </li>
          </nav>
        );
      case 3:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/profile">Hola! {dataUser.name}</Link>
            <li className="saco">
              <button onClick={() => handleLogout()}>
                <span>Logout</span>
              </button>
            </li>
          </nav>
        );
        case undefined:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        );
    }
  };

  return <NavbarWrapper open={open}>{showLinks()}</NavbarWrapper>;
}

export default NavbarHam;
