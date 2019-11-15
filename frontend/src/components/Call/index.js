import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import Directmsg from "../../assets/direct_message.svg";
import PublicQuestion from "../../assets/public_question.svg";
import NotStarred from "../../assets/not_starred.svg";
import Share from "../../assets/share.svg";
import ProfilePhoto from "../../assets/profilephoto.png";
import { getFeedVolunteerAction } from "../../store/actions/getFeedVolunteerAction";
import Location from "../../assets/location_logo.svg";

class Call extends Component {
  async componentDidMount() {
    this.props.dispatch(getFeedVolunteerAction());
  }

  render() {
    return (
      <div className="feedVolunteer-call">
        <div className="feedVolunteer-organisation">
          <div className="feedVolunteer-organisation-name">
            <img src={ProfilePhoto} className="org-photo" alt="" />
            <p className='feedVolunteer-orgname'>{}</p>
          </div>
          <div className="feedVolunteer-organisation-location">
            <img src={Location} alt="" />
            <p className='feedVolunteer-location'> Geneva</p>
          </div>
        </div>
        <div className="feedVolunteer-call-box">
          <p className="feedVolunteer-title">Call for Volunteers</p>
          <div className="feedVolunteer-image"></div>
          <div className="feedVolunteer-call-main">
            <div className="feedVolunteer-description"></div>
            <div className="feedVolunteer-side-buttons">
              <img
                src={NotStarred}
                className="feedVolunteer-not-starred-button" alt=''
              ></img>
              <img src={Share} className="feedVolunteer-share-button" alt=''></img>
            </div>
            <div className="feedVolunteer-option box"></div>
            <div className="feedVolunteer-bottom-buttons">
              <img
                src={Directmsg}
                className="feedVolunteer-volunteer-button" alt=''
             />
              <img
                src={PublicQuestion}
                className="feedVolunteer-question-button" alt=''
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    call: state.feedVolunteerReducer.call
  };
};

export default connect(mapStateToProps)(Call);
