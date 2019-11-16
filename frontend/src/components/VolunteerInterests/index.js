import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class VolunteerInterests extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className='volunteer-interests'>
        {this.props.user ? (
          <>
            <div className='interests-left-side'>
              <div className='interests-box'>
                <h6>Social</h6>
                <p>{this.props.user.interests.social}</p>
              </div>
              <div className='interests-box'>
                <h6>Languages</h6>
                <p>{this.props.user.interests.languages}</p>
              </div>
              <div className='interests-box'>
                <h6>Sports</h6>
                <p>{this.props.user.interests.sports}</p>
              </div>
              <div className='interests-box'>
                <h6>Arts & culture</h6>
                <p>{this.props.user.interests.arts_culture}</p>
              </div>
            </div>
            <div className='interests-right-side'>
              <div className='interests-box'>
                <h6>Job coaching</h6>
                <p>{this.props.user.interests.coaching}</p>
              </div>
              <div className='interests-box'>
                <h6>Food</h6>
                <p>{this.props.user.interests.food}</p>
              </div>
              <div className='interests-box'>
                <h6>Politics</h6>
                <p>{this.props.user.interests.politics}</p>
              </div>
              <p className='interests-box'>
                <h6>Items</h6>
                <p>{this.props.user.interests.items}</p>
              </p>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.volunteerProfileReducer.user
  };
};

export default connect(mapStateToProps)(VolunteerInterests);
