import React, { Component } from 'react';
import OrganisationProfile from "../OrganisationProfile";
import OrganisationPublic from "../OrganisationProfilePublic";
import {connect} from "react-redux";
import {getOrganisationProfileAction} from "../../store/actions/getOrganisationProfileAction";


class SwitchOrganisationProfileView extends Component {

    async componentDidMount() {
    this.props.dispatch(getOrganisationProfileAction(this.props.match.params.id));

  }

  render() {

    return (
        this.props.profile.id === Number(this.props.match.params.id)
        ? <OrganisationProfile />
        : <OrganisationPublic id={this.props.match.params.id}/>
    )
  }
}

const mapStateToProps = state => {
console.log(state)
    return {
      profile: state.organisationProfileReducer.profile,
        // org: organisationProfile
        // currentUserProfile: ...
    }
  }

export default connect(mapStateToProps)(SwitchOrganisationProfileView)