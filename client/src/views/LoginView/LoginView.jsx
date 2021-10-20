import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../stateManagement/actions/postLogin";
import { getGoogleLogin } from '../../stateManagement/actions/getGoogleLogin';
import { Link } from "react-router-dom";
import "../FormCrudView/components/Insert/Insert.css";

function LoginView() {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(postLogin(state));
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(getGoogleLogin());
  }

  const redirectToGoogleSSO = async () => {
    const newWindow = window.open(
      `${process.env.REACT_APP_GOOGLE}`, 
      '_blank', 
      'width=500,height=600');
  }

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
          onChange={handleChange}
        ></input>
        <input
          className="Login_mail"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Login</button>
      </form>
      <button onClick={redirectToGoogleSSO}>Login with Google</button>
    </div>
  );
}

export default LoginView;
