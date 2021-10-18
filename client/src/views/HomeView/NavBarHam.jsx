import React from "react";
import { NavbarWrapper } from "./NavbarStyles";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "../../styles/HomePrincipal.css";
import { useUserRol } from '../../hooks/useUserRol';
import { getLogout } from "../../stateManagement/actions/getLogout";

function NavbarHam({ open }) {

  const dispatch = useDispatch();
  const history = useHistory();
  let [rol, ok] = useUserRol();

  function handleLogout() {
    console.log("hizo click")
		dispatch(getLogout());
		history.push("/")
	}

  const showLinks = () => {

    switch (rol) {
      case 1:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/superadmin">Super Admin</Link>
            <li className="saco">
							<button onClick={() => handleLogout()}>
								<span>
									Logout
								</span>
							</button>
						</li>
          </nav>
        );
      case 2:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/admin">Admin</Link>
            <li className="saco">
							<button onClick={() => handleLogout()}>
								<span>
									Logout
								</span>
							</button>
						</li>
          </nav>
        );
      case 3:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/profile">user</Link>
            <li className="saco">
							<button onClick={() => handleLogout()}>
								<span>
									Logout
								</span>
							</button>
						</li>
          </nav>
        );
      default:
        return (
          <nav className="navegacion">
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        );
    }

  }


  return (
    <NavbarWrapper open={open}>
      {showLinks()}
    </NavbarWrapper>
  );
}

export default NavbarHam;
