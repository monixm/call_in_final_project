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
        <Route
          exact
          path="/create_volunteer"
          component={AuthComponent(CreateVolunteerProfile)}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
        authenticated: state.userLoginReducer.authenticated,
    }
  }

export default connect(mapStateToProps)(Routes)
