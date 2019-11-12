import React, { Component } from 'react';
import Header from '../Header';
import Login from '../../containers/Login';
import Registration from '../../containers/Registration';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Registration />
      </div>
    );
  }
}

export default Home;
