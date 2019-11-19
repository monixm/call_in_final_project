import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVolunteerProfileAction } from '../../../store/actions/getVolunteerByIdAction';

class SecretProfile extends Component {

      render() {
        const { user } = this.props;
    return (

  <h4>This person cannot be found.</h4>
  
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.volunteerProfileReducer.volunteer
  };
};


export default connect(mapStateToProps)(SecretProfile);
