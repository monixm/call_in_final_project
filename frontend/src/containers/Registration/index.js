import { connect } from 'react-redux';
import React, { Component } from 'react';
import './style.css';
import { registrationAction } from '../../store/actions/registrationAction';

class Registration extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: ''
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  registrationHandler = async e => {
    e.preventDefault();
    const response = this.props.dispatch(registrationAction(this.state));
    if (response) {
      this.props.history.push('/registrationSuccess');
    }
  };

  render() {
    return (
      <div>
        <h4>Registration</h4>
        <form action=''>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.onChange}
          ></input>
          <input
            name='email'
            type='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.onChange}
            autocomplete='on'
          ></input>
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.onChange}
          ></input>
          <input
            name='passwordConfirm'
            type='password'
            placeholder='repeat password'
            value={this.state.passwordConfirm}
            onChange={this.onChange}
          ></input>
          <button onClick={this.registrationHandler}>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default connect()(Registration);
