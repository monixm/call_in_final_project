import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

class Search extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>hi search</h1>
      </div>
    );
  }
}

export default connect()(Search);
