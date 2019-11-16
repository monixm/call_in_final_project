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
  render() {
    // console.log("PROPS", this.props);
    const call = this.props.call;
    return (
      <>
        <div>
          <div className="feedVolunteer-call">
            <div className="feedVolunteer-organisation">
              <div className="feedVolunteer-organisation-name">
                <img
                  src={call.organisation.profile_pic}
                  className="org-photo"
                  alt=""
                />
                <p className="feedVolunteer-orgname">
                  {call.organisation.name}
                </p>
              </div>
              <div className="feedVolunteer-organisation-location">
                <img src={Location} alt="" />
                <p className="feedVolunteer-location">{call.location}</p>
              </div>
            </div>
            <div className="feedVolunteer-call-box">
              <p className="feedVolunteer-title">
                <strong>Call For Volunteers: {call.title}</strong>
              </p>
              <div className="feedVolunteer-image">
                <img className="feedVolunteer-call-img" />
              </div>
              <div className="feedVolunteer-call-main">
                <div className="feedVolunteer-right-side">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugit voluptatum cupiditate accusantium consectetur
                    repudiandae tempora:
                  </p>
                  <p>{call.call_options.call}</p>
                  <div className="feedVolunteer-call-options">
                    <input
                      type="radio"
                      class="hidden"
                      id="input1"
                      name="inputs"
                    />
                    <div class="entry" for="input1">
                      <div class="circle"></div>
                      <div class="entry-label">Kingdom</div>
                    </div>
                  </div>
                </div>
                <div className="feedVolunteer-side-buttons">
                  <img
                    src={NotStarred}
                    className="feedVolunteer-not-starred-button"
                    alt=""
                  ></img>
                  <img
                    src={Share}
                    className="feedVolunteer-share-button"
                    alt=""
                  ></img>
                </div>
                <div className="feedVolunteer-option box"></div>
                {/* <div className="feedVolunteer-bottom-buttons">
                  <img
                    src={Directmsg}
                    className="feedVolunteer-volunteer-button"
                    alt=""
                  />
                  <img
                    src={PublicQuestion}
                    className="feedVolunteer-question-button"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="color-break"></div>
        </div>
      </>
    );
  }
}

export default Call;
