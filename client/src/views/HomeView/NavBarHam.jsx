import React from "react";
import { NavbarWrapper } from "./NavbarStyles";
import { Link } from "react-router-dom";
import "../../styles/HomePrincipal.css";
function NavbarHam({ open }) {
  return (
    <NavbarWrapper open={open}>
      <nav className="navegacion">
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </NavbarWrapper>
  );
}

export default NavbarHam;
