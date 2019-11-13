import React, { Component } from "react";
import { connect } from "react-redux";

class VolunteerInterests extends Component {
  render() {
    console.log(this.props.user.interests);
    return (
      <div>
        {/* {Object.keys(this.props.user).map(key => (
          <div>
            <h6>Social</h6>
            <p>{this.props.user}</p>
          </div>
        ))} */}
      
        {/* {this.props.user.interests
          ? this.props.user.interests.map((interest, value) => {
              return (
                <>
                  <div>
                    <div className="interests-box">
                      <h6>Social</h6>
                      <p>{interest.social}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Languages</h6>
                      <p>{interest.languages}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Sports</h6>
                      <p>{interest.sports}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Arts & culture</h6>
                      <p>{interest.arts_culture}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Job coaching</h6>
                      <p>{interest.coaching}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Sports</h6>
                      <p>{interest.food}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Sports</h6>
                      <p>{interest.politics}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Sports</h6>
                      <p>{interest.items}</p>
                    </div>
                    <div className="interests-box">
                      <h6>Sports</h6>
                      <p>{interest.organisation}</p>
                    </div>
                  </div>
                </>
              );
            })
          : null} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.volunteerProfileReducer.user,
    interests: state.volunteerProfileReducer.interests
  };
};

export default connect(mapStateToProps)(VolunteerInterests);
