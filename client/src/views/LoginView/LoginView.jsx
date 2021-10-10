import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../stateManagement/actions/postLogin";
import { Link } from "react-router-dom";
import "../FormCrudView/components/Insert/Insert.css";

function LoginView() {
  const dispatch = useDispatch();
  const [state, setState] = useState();

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(postLogin(state));
  };

  const HandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
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
            <h2>Login</h2>
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
      <form className="Login" onSubmit={onSubmitForm}>
        <input
          className="Login_mail"
          type="email"
          name="email"
          placeholder="email"
          onChange={HandleChange}
        ></input>
        <input
          className="Login_mail"
          type="password"
          name="password"
          placeholder="password"
          onChange={HandleChange}
        ></input>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default LoginView;
