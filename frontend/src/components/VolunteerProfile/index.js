import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

class VolunteerProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>This is a Volunteer Profile</h1>
      </div>
    );
  }
}

export default connect()(VolunteerProfile);
