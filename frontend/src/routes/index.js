import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from '../components/Search';
import Home from '../components/Home';
import VolunteerProfile from '../components/VolunteerProfile';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat';
import CreateVolunteerProfile from '../components/CreateVolunteerProfile';
import Login from '../containers/Login';
import Registration from '../containers/Registration';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/volunteer' component={VolunteerProfile} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/chat' component={Chat} />
        <Route
          exact
          path='/create_volunteer'
          component={CreateVolunteerProfile}
        />
      </>
    );
  }
}

export default Routes;
