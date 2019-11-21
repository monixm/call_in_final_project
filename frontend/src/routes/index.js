import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthComponent from '../HOC/authComponent';
import Search from '../components/Search';
import Registration from '../containers/Registration';
import CreateNGOProjectProfile from '../components/CreateNGOProjectProfile';
import VolunteerProfile from '../components/VolunteerProfile';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat';
import CreateCall from '../components/CreateCall';
import CreateEvent from '../components/CreateEvent';
import Login from '../containers/Login';
import CreateProfile from '../components/CreateProfile';
import EditVolunteerProfile from '../components/EditVolunteerProfile';
import LoggedInUserProfile from '../components/LoggedInUserProfile';
import SwitchFeed from '../components/SwitchFeed';
import FeedVolunteer from '../components/FeedVolunteer/index.js';
import GuestList from '../components/GuesList';
import EventPage from '../components/EventPage';
import CallPage from '../components/CallPage';
import NewUser from '../containers/NewUser'
import SwitchOrganisationProfileView from '../components/SwitchOrganisationProfileView';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path='/'>
          {this.props.authenticated ? <Redirect to='/feed' /> : <Login />}
        </Route>
          <Route exact path="/organisations/:id/" component={SwitchOrganisationProfileView} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/new-user' component={NewUser} />
        <Route exact path='/feed' component={FeedVolunteer} />
        <Route
          exact
          path='/feed/me'
          component={AuthComponent(SwitchFeed)}
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
        <Route
          exact
          path='/create-ngo-project-profile'
          component={CreateNGOProjectProfile}
        />
        <Route exact path='/event/:eventId' component={EventPage} />
        <Route exact path='/call/:callId' component={CallPage} />
        <Route exact path='/:eventId/guestlist' component={GuestList} />
        <Route exact path="/create-call" component={AuthComponent(CreateCall)}/>
        <Route exact path="/create-event" component={AuthComponent(CreateEvent)}/>
        <Route exact path='/guestlist' component={GuestList} />
        <Route
          exact
          path='/edit-volunteer-profile'
          component={EditVolunteerProfile}
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
