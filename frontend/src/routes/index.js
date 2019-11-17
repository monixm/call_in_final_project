import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthComponent from '../HOC/authComponent'
import Search from '../components/Search';
import Home from '../components/Home';
import Registration from '../containers/Registration';
import ValidateRegistration from '../containers/ValidateRegistration'
import CreateNGOProjectProfile from '../components/CreateNGOProjectProfile';
import VolunteerProfile from '../components/VolunteerProfile';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat';
import CreateVolunteerProfile from "../components/CreateVolunteerProfile";
import Login from "../containers/Login";
import { connect } from 'react-redux';
import CreateProfile from '../components/CreateProfile'
import LoggedInUserProfile from "../components/LoggedInUserProfile";
import FeedVolunteer from "../components/FeedVolunteer/index.js";
import GuestList from "../components/GuesList";
import Event from "../components/Event"

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/validate" component={ValidateRegistration} />
        <Route exact path="/feed" component={FeedVolunteer} />
        <Route
          exact
          path="/feed/me"
          component={AuthComponent(LoggedInUserProfile)}
        />
        <Route exact path="/search" component={AuthComponent(Search)} />
        <Route
          exact
          path="/volunteer/:id"
          component={AuthComponent(VolunteerProfile)}
        />
        <Route exact path="/calendar" component={AuthComponent(Calendar)} />
        <Route exact path="/chat" component={AuthComponent(Chat)} />
        <Route exact path='/volunteer/new' component={CreateProfile}/>
        <Route
          exact
          path="/create_volunteer"
          component={AuthComponent(CreateVolunteerProfile)}
        />
        <Route exact path="/home" component={AuthComponent(Home)} />
        <Route
          exact
          path="/create-ngo-project-profile"
          component={AuthComponent(CreateNGOProjectProfile)}
        />
        <Route exact path="/guestlist" component={GuestList}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.userLoginReducer.authenticated
  };
};

export default connect(mapStateToProps)(Routes)
