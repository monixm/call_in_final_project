import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import AuthComponent from "../HOC/authComponent";
import Search from "../components/Search";
import VolunteerProfile from "../components/VolunteerProfile";
import Calendar from "../components/Calendar";
import Chat from "../components/Chat";
import FeedVolunteer from "../components/FeedVolunteer";
import Home from "../components/Home";
import Registration from "../containers/Registration";
import ValidateRegistration from "../containers/ValidateRegistration";
import CreateNGOProjectProfile from "../components/CreateNGOProjectProfile";
import CreateVolunteerProfile from "../components/CreateVolunteerProfile";
import Login from "../containers/Login";
import LoggedInUserProfile from "../components/LoggedInUserProfile";

class Routes extends Component {
  render() {
    return (
      <>
<<<<<<< HEAD
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
=======
        <Route exact path="/">
            {this.props.authenticated ? <Redirect to="/home"/> : <Login/> }
        </Route>
        <Route exact path='/home' component={ AuthComponent(Home) } />
        <Route exact path='/create-ngo-project-profile' component={ AuthComponent(CreateNGOProjectProfile) }/>
        <Route exact path='/registration' component={ Registration } />
        <Route exact path='/validate' component={ AuthComponent(ValidateRegistration) } />
        <Route exact path='/search' component={ AuthComponent(Search) } />
        <Route exact path='/volunteer' component={ AuthComponent(VolunteerProfile) } />
        <Route exact path='/calendar' component={ AuthComponent(Calendar) } />
        <Route exact path='/chat' component={ AuthComponent(Chat) } />
>>>>>>> 7942a80be9a81b54a8ba9eb08933f5706cc1ff3b
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
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.userLoginReducer.authenticated
  };
};

export default connect(mapStateToProps)(Routes);
