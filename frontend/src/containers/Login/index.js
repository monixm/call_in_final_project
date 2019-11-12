import React, { useState } from 'react';
import { userLoginAction } from '../../store/actions/loginAction';
import { connect } from 'react-redux';

const Login = props => {
  const [email, setEmail] = useState('email@email.com');
  const [password, setPassword] = useState('password');

  const userLoginHandler = e => {
    e.preventDefault();
    const data = props.dispatch(userLoginAction(email, password));
    if (data) props.history.push('/volunteer');
  };

  return (
    <div>
      <h1>This is login</h1>
      <form>
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
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
