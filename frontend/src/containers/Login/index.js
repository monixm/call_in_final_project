import React, { useState } from 'react';
import { userLoginAction } from '../../store/actions/loginAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './style.css';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLoginHandler = e => {
    e.preventDefault();
    props.dispatch(userLoginAction(username, password));
  };

  const { errorMessage } = props;

  return (
    <div className='login-page'>
      <div className='login-logo'>
        <div className='logo-place'>
          <div>
            <img className='logo' src={Logo} alt='profile-icon' />
          </div>
        </div>
      </div>
      <h1 className='login-h1'>
        Call <span className='login-in'>In</span>
      </h1>

      <div className='login-short-intro'>
        <h5>
          Welcome to <span className='login-call-span'>Call</span>
          <span className='login-in-span'> In</span> where we connect non-profit
          organisations, non-governmental organisations and projects with locals
          and migrants
        </h5>
      </div>

      <form className='login-form'>
        <input
          type='username'
          value={username}
          placeholder='username'
          onChange={e => setUsername(e.currentTarget.value)}
        />
        <input
          placeholder='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></input>
        <p className='login-error-message'>{errorMessage}</p>
        <button className='login-button' onClick={e => userLoginHandler(e)}>
          Login
        </button>
        <p>
          Don't have an account?
          <Link to='/registration'>
            <span style={{ color: '#4497BD' }}> Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.userLoginReducer.errorMessage
  };
};

export default connect(mapStateToProps)(Login);
