import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthComponent from '../HOC/authComponent'
import Search from '../components/Search';
import Home from '../components/Home';
import Registration from '../containers/Registration';
import ValidateRegistration from '../containers/ValidateRegistration'
import CreateNGOProjectProfile from '../components/CreateNGOProjectProfile';
import VolunteerProfile from '../components/VolunteerProfile';
import OrganisationProfile from '../components/OrganisationProfile';
import CreateCall from '../components/CreateCall';
import CreateEvent from '../components/CreateEvent';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat';
import CreateVolunteerProfile from "../components/CreateVolunteerProfile";
import Login from "../containers/Login";
import { connect } from 'react-redux';

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
        <Route exact path='/create-call' component={ AuthComponent(CreateCall) } />
        <Route exact path='/create-event' component={ AuthComponent(CreateEvent) } />
        <Route exact path='/volunteer' component={ AuthComponent(VolunteerProfile) } />
        <Route exact path='/organisation' component={ AuthComponent(OrganisationProfile) } />
        <Route exact path='/calendar' component={ AuthComponent(Calendar) } />
        <Route exact path='/chat' component={ AuthComponent(Chat) } />
        <Route
          exact
          path="/create_volunteer"
          component={CreateVolunteerProfile}
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
