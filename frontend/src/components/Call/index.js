import React, { Component } from "react";
import { connect } from "react-redux";
import Directmsg from "../../assets/direct_message.svg";
import PublicQuestion from "../../assets/public_question.svg";
import NotStarred from "../../assets/not_starred.svg";
import Share from "../../assets/share.svg";

class Call extends Component {
  render() {
    return (
      <div>
        <div className="feedVolunteer-organisation"></div>
        <div className="feedVolunteer-call-box">
          <p className="feedVolunteer-title">Call for Volunteers</p>
          <div className="feedVolunteer-image"></div>
          <div className="feedVolunteer-call-main">
            <div className="feedVolunteer-description"></div>
            <div className="feedVolunteer-side-buttons">
              <button className="feedVolunteer-not-starred-button">
                {NotStarred}
              </button>
              <button className="feedVolunteer-share-button">{Share}</button>
            </div>
            <div className="feedVolunteer-option box"></div>
            <div className="feedVolunteer-bottom-buttons">
              <button className="feedVolunteer-volunteer-button">
                {Directmsg}
              </button>
              <button className="feedVolunteer-question-button">
                {PublicQuestion}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Call);
