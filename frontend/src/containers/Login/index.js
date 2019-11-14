import React, { useState } from 'react';
import { userLoginAction } from '../../store/actions/loginAction';
import { connect } from 'react-redux';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const userLoginHandler = async() => {
    const data = await props.dispatch(userLoginAction(username, password));
    if (data) props.history.push('/home');
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
