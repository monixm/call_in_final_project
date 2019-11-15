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
    // console.log("PROPS", this.props);
    return (
      <>
        {this.props.call.map(call => {
          return (
            <>
              <p>{call.title.call_options}</p>
            </>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    call:
      state.feedVolunteerReducer.feed.hasOwnProperty("**CALL**") &&
      state.feedVolunteerReducer.feed.hasOwnProperty("**EVENT**")
        ? [
            ...state.feedVolunteerReducer.feed["**CALL**"],
            ...state.feedVolunteerReducer.feed["**EVENT**"]
          ]
        : []
  };
};

export default connect(mapStateToProps)(Call);
