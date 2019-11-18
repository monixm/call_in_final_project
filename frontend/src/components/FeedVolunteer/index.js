import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeedVolunteerAction } from "../../store/actions/getFeedVolunteerAction";
import Call from "../Call";
import Header from "../Header";

class FeedVolunteer extends Component {
  async componentDidMount() {
    this.props.dispatch(getFeedVolunteerAction());
  }

  render() {
    const { feed } = this.props;
    return (
      <>
        <Header />
        {/* {feed && <p>{feed.CALL.title}</p>} */}

        {/* {this.props.feed.map(call => {
          return (
            <>
              <p>{call.call.data.title}</p>
            </>
          );
        })} */}
        <Call />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    call: state.feedVolunteerReducer.call,
    event: state.feedVolunteerReducer.event
  };
};

export default connect(mapStateToProps)(FeedVolunteer);
