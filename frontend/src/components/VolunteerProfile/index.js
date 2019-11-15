import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Header";
import NoPhoto from "../../assets/no-photo.png";
import VolunteerInterests from "../VolunteerInterests";
import { getVolunteerProfileAction } from "../../store/actions/getVolunteerByIdAction";

class VolunteerProfile extends Component {
  async componentDidMount() {
    const userId = this.props.match.params.id;
    console.log(this.props);
    this.props.dispatch(getVolunteerProfileAction(userId));
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
                {user.profile_picture !== null ? (
                  <img
                    src={user.profile_picture}
                    className="volunteer-profile-pic"
                    alt=""
                  />
                ) : (
                  <img src={NoPhoto}></img>
                )}
              </div>
              <h4 className="volunteer-name">
                {user.first_name} {user.last_name}
              </h4>
              <p className="volunteer-profile-type">{user.location}</p>
            </div>
            <div className="volunteer-buttons">
              <Link to="/create_volunteer">
                <button>Edit profile</button>
              </Link>
              <button>Approve requests</button>
            </div>
            <div className="color-break"></div>
            <h4>{user.first_name}'s interests in projects and events</h4>
            {/* <div className="volunteer-interests"> */}
            <VolunteerInterests />
            {/* </div> */}
            <div className="color-break"></div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.volunteerProfileReducer.user
  };
};

export default connect(mapStateToProps)(VolunteerProfile);
