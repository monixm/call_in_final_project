import React, { useState } from 'react';
import { userLoginAction } from '../../store/actions/loginAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import LogoCallBig from '../../assets/logo-call-big.svg';
import './style.css';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLoginHandler = e => {
    e.preventDefault();
    const data = props.dispatch(userLoginAction(username, password));
    // if (data) props.history.push('/feed/me');
  };

  const { errorMessage } = props;

  return (
    <div className='login-page'>
      <div className='login-main'>
        <div className='login-logo'>
          <img className='logo' src={LogoCallBig} alt='profile-icon' />
          <div className='logo-megaphone'>
            <img src={Logo} alt='' />
          </div>
        </div>
        <div className='login-short-intro'>
          <h5>
            Welcome to <span className='login-call-span'>Call</span>
            <span className='login-in-span'> In</span> where we connect
            non-profit organisations, non-governmental organisations and
            projects with locals and migrants
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
            <Link to='/validation'>
              <span style={{ color: '#4497BD' }}> Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.userLoginReducer.errorMessage
  };
};

export default connect(mapStateToProps)(Login);
