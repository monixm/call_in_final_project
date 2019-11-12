import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from '../components/Search';
import Home from '../components/Home';
import Registration from '../components/Registration';
import ValidateRegistration from '../components/ValidateRegistration'
import CreateNGOProjectProfile from '../components/CreateNGOProjectProfile';
import VolunteerProfile from '../components/VolunteerProfile';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path='/home' component={Home} />
        <Route exact path='/create-ngo-project-profile' component={ CreateNGOProjectProfile }/>
        <Route exact path='/registration' component={ Registration } />
        <Route exact path='/validate' component={ ValidateRegistration } />
        <Route exact path='/search' component={Search} />
        <Route exact path='/volunteer' component={VolunteerProfile} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/chat' component={Chat} />
      </>
    );
  }
}

export default Routes;
