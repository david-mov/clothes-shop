import { Link } from "react-router-dom";
import "../../styles/HomePrincipal.css";

export default function HomeView() {
  return (
    <div className="HomePrincipal">
      <div className="NavbarPaincipal">
        <Link to="/">
          <div className="navbar__logo">
            <img
              className="img"
              src="https://i.ibb.co/jwF67rm/clothes-Shop.png"
              alt="clothes-Shop"
              border="0"
            ></img>
          </div>
        </Link>
        <Link className="spanHomePrincipal" to="/catalogue">
          <span>Catalogo</span>
        </Link>
        <Link className="spanHomePrincipal" to="#">
          <span>About</span>
        </Link>
        <Link className="spanHomePrincipal" to="#">
          <span> Login</span>
        </Link>
        <Link className="spanHomePrincipal" to="#">
          <span> Signup</span>
        </Link>
      </div>
      <div>
        <h1>Cuerpo</h1>
      </div>
    </div>
  );
}
