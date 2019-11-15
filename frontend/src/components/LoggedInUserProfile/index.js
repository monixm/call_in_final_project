import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Header";
import { getLoggedInUserProfileAction } from "../../store/actions/getLoggedInUserProfileAction";

class LoggedInUser extends Component {
  async componentDidMount() {
    this.props.dispatch(getLoggedInUserProfileAction());
    // console.log(this.props);
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Header />
        
        {user && (
          <div className="volunteer-profile">
            <div className="volunteer-intro">
              <div className="imgs">
                <img
                  src={user.volunteer.profile_picture}
                  className="volunteer-profile-pic"
                  alt=""
                />
              </div>
              <h4 className="volunteer-name">
                {user.volunteer.first_name} {user.volunteer.last_name}
              </h4>
              <p className="volunteer-profile-type">
                {user.volunteer.location}
              </p>
            </div>
            <div className="volunteer-buttons">
              <Link to="/create_volunteer">
                <button>Edit profile</button>
              </Link>
              <button>Approve requests</button>
            </div>
            <div className="color-break"></div>
            <h4>
              {user.volunteer.first_name}'s interests in projects and events
            </h4>
            <div className="volunteer-interests"> 
            <div className="interests-box">
              <h6>Social</h6>
              <p>{user.volunteer.interests.social}</p>
            </div>
            <div className="interests-box">
              <h6>Languages</h6>
              <p>{user.volunteer.interests.languages}</p>
            </div>
            <div className="interests-box">
              <h6>Sports</h6>
              <p>{user.volunteer.interests.sports}</p>
            </div>
            <div className="interests-box">
              <h6>Arts & culture</h6>
              <p>{user.volunteer.interests.arts_culture}</p>
            </div>
            <div className="interests-box">
              <h6>Job coaching</h6>
              <p>{user.volunteer.interests.coaching}</p>
            </div>
            <div className="interests-box">
              <h6>Food</h6>
              <p>{user.volunteer.interests.food}</p>
            </div>
            <div className="interests-box">
              <h6>Politics</h6>
              <p>{user.volunteer.interests.politics}</p>
            </div>
            <div className="interests-box">
              <h6>Items</h6>
              <p>{user.volunteer.interests.items}</p>
            </div>
             </div>
            <div className="color-break"></div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loggedInUserReducer.user
  };
};

export default connect(mapStateToProps)(LoggedInUser);
