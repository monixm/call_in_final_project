import React, { Component } from 'react';
import LoggedInUserProfile from "../LoggedInUserProfile";
import LoggedInOrganisationProfile from "../LoggedInOrganisationProfile";
import {connect} from "react-redux";
import {getLoggedInOrganisationProfileAction} from "../../store/actions/getLoggedInOrganisationProfileAction";


class SwitchFeed extends Component {

  async componentDidMount() {
    this.props.dispatch(getLoggedInOrganisationProfileAction());
  }

  render() {

    return (
        this.props.profile.organisation !== 'null'
        ? <LoggedInOrganisationProfile />
        : <LoggedInUserProfile />
    )
  }
}

const mapStateToProps = state => {

    return {
      profile: state.loggedInOrganisationReducer.profile,
    }
  }

export default connect(mapStateToProps)(SwitchFeed)