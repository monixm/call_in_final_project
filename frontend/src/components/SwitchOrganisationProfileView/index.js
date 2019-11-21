import React, { Component } from 'react';
import OrganisationProfile from "../OrganisationProfile";
import OrganisationPublic from "../OrganisationProfilePublic";
import {connect} from "react-redux";
import {getOrganisationProfileAction} from "../../store/actions/getOrganisationProfileAction";
import {getOrganisationMeAction} from "../../store/actions/getOrganisationMeAction";


class SwitchOrganisationProfileView extends Component {

    componentDidMount() {
    this.props.dispatch(getOrganisationProfileAction(this.props.match.params.id));
    this.props.dispatch(getOrganisationMeAction());
  }

  render() {
        const organisation = "**ORGANISATION PROFILE**";
    return (
        this.props.profileMe[organisation] && this.props.profileMe[organisation].organisation.id === Number(this.props.match.params.id)
        ? <OrganisationProfile />
        : <OrganisationPublic id={this.props.match.params.id}/>
    )
  }
}

const mapStateToProps = state => {

    return {
      profileMe: state.organisationMeReducer.profile,
    }
  }

export default connect(mapStateToProps)(SwitchOrganisationProfileView)