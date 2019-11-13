import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthComponent from '../HOC/authComponent'
import Search from '../components/Search';
import Home from '../components/Home';
import Registration from '../components/Registration';
import ValidateRegistration from '../components/ValidateRegistration'
import CreateNGOProjectProfile from '../components/CreateNGOProjectProfile';
import VolunteerProfile from '../components/VolunteerProfile';
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
        <Route exact path='/volunteer' component={ AuthComponent(VolunteerProfile) } />
        <Route exact path='/calendar' component={ AuthComponent(Calendar) } />
        <Route exact path='/chat' component={ AuthComponent(Chat) } />
        {/*<Route exact path="/" component={Login} />*/}
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
