import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeedVolunteerAction } from "../../store/actions/getFeedVolunteerAction";
import Call from "../Call";
import Chat from "../Chat";
import Header from "../Header";

class FeedVolunteer extends Component {
  async componentDidMount() {
    this.props.dispatch(getFeedVolunteerAction());
  }

  render() {
    // console.log("PROPS", this.props);
    return (
      <>
        <Header />
        {/* {feed && <p>{feed.CALL.title}</p>} */}
        {/* call hasOwnProperty call opt - if yes, return call  */}
        {/* {this.props.call.map(call => { 
          return (
            <>
              <p>{call.title.call_options}</p>
            </>
          );
        })} */}
        {this.props.call.map(call =>
          call.hasOwnProperty('call_options') ? <Call /> : <Chat />
        )}
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

export default connect(mapStateToProps)(FeedVolunteer);
