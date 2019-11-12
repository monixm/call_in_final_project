import React, { Component } from 'react';
import { connect } from 'react-redux';

export default WrapperComponent => {
  class AuthComponent extends Component {
    redirect = () => {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    };

    componentDidMount() {
      this.redirect();
    }

    componentDidUpdate() {
      this.redirect();
    }

    componentWillUpdate() {
      this.redirect();
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }
  const mapStateToProp = state => {
    // console.log('HOC state', state);
    return {
      authenticated: state.userLoginReducer.authenticated
    };
  };

  return connect(mapStateToProp)(AuthComponent);
};
