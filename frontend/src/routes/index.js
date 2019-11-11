import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from '../components/Search';
import Home from '../components/Home';
import VolunteerProfile from '../components/VolunteerProfile';
import Calendar from '../components/Calendar';
import Chat from '../components/Chat';

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/volunteer' component={VolunteerProfile} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/chat' component={Chat} />
      </>
    );
  }
}

export default Routes;
