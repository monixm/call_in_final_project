import React, { Component } from "react";
import { Route } from "react-router-dom";
import Search from "../components/Search";
import VolunteerProfile from "../components/VolunteerProfile";
import Calendar from "../components/Calendar";
import Chat from "../components/Chat";
// import CreateVolunteerProfile from "../components/CreateVolunteerProfile";
import Login from "../containers/Login";
// import Registration from "../containers/Registration";
// import ValidateRegistration from "../containers/ValidateRegistration";

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/registration" component={Registration} /> */}
        {/* <Route exact path="/validate" component={ValidateRegistration} /> */}
        <Route exact path="/search" component={Search} />
        <Route exact path="/volunteer" component={VolunteerProfile} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/chat" component={Chat} />
        {/* <Route
          exact
          path="/create_volunteer"
          component={CreateVolunteerProfile}
        /> */}
      </>
    );
  }
}

export default Routes;
