import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class VolunteerInterests extends Component {

  render() {
    return (
      <div className="volunteer-interests">
        {this.props.volunteer ? (
          <>
            <div className='interests-left-side'>
              <div className='interests-box'>
                <h6>Social</h6>
                <p>{this.props.volunteer.interests.social}</p>
              </div>
              <div className='interests-box'>
                <h6>Languages</h6>
                <p>{this.props.volunteer.interests.languages}</p>
              </div>
              <div className='interests-box'>
                <h6>Sports</h6>
                <p>{this.props.volunteer.interests.sports}</p>
              </div>
              <div className='interests-box'>
                <h6>Arts & culture</h6>
                <p>{this.props.volunteer.interests.arts_culture}</p>
              </div>
            </div>
            <div className='interests-right-side'>
              <div className='interests-box'>
                <h6>Job coaching</h6>
                <p>{this.props.volunteer.interests.coaching}</p>
              </div>
              <div className='interests-box'>
                <h6>Food</h6>
                <p>{this.props.volunteer.interests.food}</p>
              </div>
              <div className='interests-box'>
                <h6>Politics</h6>
                <p>{this.props.volunteer.interests.politics}</p>
              </div>
              <p className='interests-box'>
                <h6>Items</h6>
                <p>{this.props.volunteer.interests.items}</p>
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
    volunteer: state.volunteerProfileReducer.volunteer
  };
};

export default connect(mapStateToProps)(VolunteerInterests);
