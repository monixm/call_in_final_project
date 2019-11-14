import React, { Component } from "react";
import { Route } from "react-router-dom";
import AuthComponent from "../HOC/authComponent";
import Search from "../components/Search";
import VolunteerProfile from "../components/VolunteerProfile";
import Calendar from "../components/Calendar";
import Chat from "../components/Chat";
import FeedVolunteer from "../components/FeedVolunteer";
import CreateVolunteerProfile from "../components/CreateVolunteerProfile";
import Login from "../containers/Login";
import Registration from "../containers/Registration";
import ValidateRegistration from "../containers/ValidateRegistration";
import LoggedInUserProfile from "../components/LoggedInUserProfile";

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={AuthComponent(Login)} />
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
        <Route
          exact
          path="/create_volunteer"
          component={AuthComponent(CreateVolunteerProfile)}
        />
      </>
    );
  }
}

export default Routes;
