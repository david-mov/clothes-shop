import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSignup } from "../../stateManagement/actions/postSignup";
import { Link, useHistory } from "react-router-dom";
import "../FormCrudView/components/Insert/Insert.css";
function SignupView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({});

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const resp = await dispatch(postSignup(state));
    if(resp.payload.data === "User already exists"){
      alert("User already exists");
    }
    if(resp.payload.data === "User created correctly"){
      alert("well you can login now");
      history.push("/login");
    }
  };

  const handleChange = (e) => {
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
            <h2>Sign up</h2>
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
          name="name"
          placeholder="name"
          onChange={handleChange}
        ></input>
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupView;
