import React, { useState } from 'react';
import { userLoginAction } from '../../store/actions/loginAction';
import { connect } from 'react-redux';

const Login = props => {
  const [username, setUsername] = useState('monixm');
  const [password, setPassword] = useState('monixm1989');

  const userLoginHandler = e => {
    e.preventDefault();
    const data = props.dispatch(userLoginAction(username, password));
    if (data) props.history.push('/volunteer');
  };

  return (
    <div>
      <h1>Login page</h1>
      <form>
        <input
          type='username'
          value={username}
          onChange={e => setUsername(e.currentTarget.value)}
        ></input>
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></input>
        <button onClick={e => userLoginHandler(e)}>Login</button>
      </form>
    </div>
  );
};

export default connect()(Login);
