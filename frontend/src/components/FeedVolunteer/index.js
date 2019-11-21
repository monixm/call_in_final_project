import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeedVolunteerAction } from '../../store/actions/getFeedVolunteerAction';
import Call from '../Call';
import Event from '../Event';
import Header from '../Header';
import {getLoggedInOrganisationProfileAction} from "../../store/actions/getLoggedInOrganisationProfileAction";
import {getOrganisationMeAction} from "../../store/actions/getOrganisationMeAction";

class FeedVolunteer extends Component {
  async componentDidMount() {
    this.props.dispatch(getFeedVolunteerAction());
    this.props.dispatch(getLoggedInOrganisationProfileAction());
    this.props.dispatch(getOrganisationMeAction());
  }

  render() {
    return (
      <>
        <Header />
        {this.props.call.map(call =>
          call.hasOwnProperty('call_options') ? (
            <Call call={call} />
          ) : (
            <Event call={call} />
          )
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    call:
      state.feedVolunteerReducer.feed.hasOwnProperty('**CALL**') &&
      state.feedVolunteerReducer.feed.hasOwnProperty('**EVENT**')
        ? [
            ...state.feedVolunteerReducer.feed['**CALL**'],
            ...state.feedVolunteerReducer.feed['**EVENT**']
          ]
        : []
  };
};

export default connect(mapStateToProps)(FeedVolunteer);
