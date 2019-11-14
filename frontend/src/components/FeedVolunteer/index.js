import React, { Component } from "react";
import { connect } from "react-redux";
import { feedVolunteerReducer } from "../../store/reducers/feedVolunteerReducer";
import { getFeedVolunteerAction } from "../../store/actions/getFeedVolunteerAction";

class FeedVolunteer extends Component {
  async componentDidMount() {
    this.props.dispatch(getFeedVolunteerAction());
  }

  render() {
    const { feed } = this.props;
    console.log(feed);
    return (
      <>
        {/* {feed && {this.props.feed.map(call) => {
          return (
            <p>{feed.title}</p>
          )
        }}} */}

        {/* {this.props.feed.map(call => {
            return (
              <>
                <p>{call.title}</p>
              </>
            );
          })} */}
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
