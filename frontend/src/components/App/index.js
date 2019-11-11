import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from '../../routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
