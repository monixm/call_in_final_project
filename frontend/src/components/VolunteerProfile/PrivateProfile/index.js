import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrivateProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className='private'>
        <h4>{user.first_name}'s profile is private</h4>
        <p>To see this person's profile, please send a follow request.</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.volunteerProfileReducer.volunteer
  };
};

export default connect(mapStateToProps)(PrivateProfile);
