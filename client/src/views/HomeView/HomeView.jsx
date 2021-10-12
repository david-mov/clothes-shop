import { Link } from "react-router-dom";
import { Authorizer } from '../../components/Authorizer/Authorizer.jsx'
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
        <div className="abaout">
          <Link className="spanHomePrincipal" to="/catalogue">
            <span>Catalogue</span>
          </Link>
          {/* <Link className="spanHomePrincipal" to="#">
            <span>About</span>
          </Link> */}
          <Authorizer roles={[0]}>
            <Link className="spanHomePrincipal" to="/login">
              <span> Login</span>
            </Link>
            <Link className="spanHomePrincipal" to="/signup">
              <span> Signup</span>
            </Link>
          </Authorizer>
        </div>
      </div>
      <div className="container">
        <h1 className="titulo">Home</h1>
        <div className="container_about">
          <img
            className="imgHomePrincipal"
            src={require("../../assets/products/imagen_2.jpg").default}
            alt="No encontrada"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus, id voluptas quidem in et omnis illo
            soluta libero quia a, ex suscipit minus possimus nostrum aperiam
            deleniti illum quas. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit necessitatibus, id voluptas quidem
            in et omnis illo soluta libero quia a, ex suscipit minus possimus
            nostrum aperiam deleniti illum quas.
          </p>
          <img
            className="imgHomePrincipal"
            src={require("../../assets/products/imagen_2.jpeg").default}
            alt="Not found"
          />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus, id voluptas quidem in et omnis illo
            soluta libero quia a, ex suscipit minus possimus nostrum aperiam
            deleniti illum quas. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit necessitatibus, id voluptas quidem
            in et omnis illo soluta libero quia a, ex suscipit minus possimus
            nostrum aperiam deleniti illum quas.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="container_about">
          <img
            className="imgHomePrincipal"
            src={require("../../assets/products/imagen_2.jpg").default}
            alt="No encontrada"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus, id voluptas quidem in et omnis illo
            soluta libero quia a, ex suscipit minus possimus nostrum aperiam
            deleniti illum quas. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit necessitatibus, id voluptas quidem
            in et omnis illo soluta libero quia a, ex suscipit minus possimus
            nostrum aperiam deleniti illum quas.
          </p>
          <img
            className="imgHomePrincipal"
            src={require("../../assets/products/imagen_2.jpeg").default}
            alt="Not found"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus, id voluptas quidem in et omnis illo
            soluta libero quia a, ex suscipit minus possimus nostrum aperiam
            deleniti illum quas. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit necessitatibus, id voluptas quidem
            in et omnis illo soluta libero quia a, ex suscipit minus possimus
            nostrum aperiam deleniti illum quas.
          </p>
        </div>
      </div>
    </div>
  );
}
