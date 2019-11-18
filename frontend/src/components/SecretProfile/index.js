import React, { Component } from 'react';
import Header from '../Header';

class SecretProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>This person cannot be found.</p>
      </div>
    );
  }
}

export default SecretProfile;
