import React, { useState } from "react";
import { userLoginAction } from "../../store/actions/loginAction";
import { connect } from "react-redux";
import Logo from "../../assets/logo.svg";
import "./style.css";

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const userLoginHandler = e => {
    e.preventDefault();
    props.dispatch(userLoginAction(username, password));
  };

  return (
    <div className="login-page">
      <h1 className="login-h1">
        Call <span className="login-in">In</span>
      </h1>
      <img className="logo" src={Logo} alt="profile-icon" />
      <div className="login-short-intro">
        <h5>
          Welcome to <span className="login-call-span">Call</span>
          <span className="login-in-span"> In</span> where we connect non-profit
          organisations, non-governmental organisations and projects with locals
          and migrants
        </h5>
      </div>

      <form className="login-form">
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.currentTarget.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></input>
        <button className="login-button" onClick={e => userLoginHandler(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default connect()(Login);
