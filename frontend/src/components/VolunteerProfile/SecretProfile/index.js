import React, { Component } from 'react';
import { connect } from 'react-redux';

class SecretProfile extends Component {
  render() {
    return <h4 className='profile-secret'>This person cannot be found.</h4>;
  }
}

export default connect()(SecretProfile);
