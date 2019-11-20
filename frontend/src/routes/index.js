import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthComponent from '../HOC/authComponent';
import Search from '../components/Search';
import Home from '../components/Home';
import Registration from '../containers/Registration';
import CreateNGOProjectProfile from '../components/CreateNGOProjectProfile';
import VolunteerProfile from '../components/VolunteerProfile';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat';
import Login from '../containers/Login';
import CreateProfile from '../components/CreateProfile';
import LoggedInUserProfile from '../components/LoggedInUserProfile';
import FeedVolunteer from '../components/FeedVolunteer/index.js';
import GuestList from '../components/GuesList';
import NewUser from '../containers/NewUser'

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path='/'>
          {this.props.authenticated ? <Redirect to='/feed/' /> : <Login />}
        </Route>
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/new-user' component={NewUser} />
        <Route exact path='/feed' component={FeedVolunteer} />
        <Route
          exact
          path='/feed/me'
          component={AuthComponent(LoggedInUserProfile)}
        />
        <Route exact path='/search' component={AuthComponent(Search)} />
        <Route
          exact
          path='/volunteer/:id'
          component={AuthComponent(VolunteerProfile)}
        />
        <Route exact path='/calendar' component={AuthComponent(Calendar)} />
        <Route exact path='/chat' component={AuthComponent(Chat)} />
        <Route exact path='/volunteer/create/new' component={CreateProfile} />
        <Route exact path='/home' component={AuthComponent(Home)} />
        <Route
          exact
          path='/create-ngo-project-profile'
          component={CreateNGOProjectProfile}
        />
        <Route exact path='/guestlist' component={GuestList} />
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
