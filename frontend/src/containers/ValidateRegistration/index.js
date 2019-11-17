import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registrationValidationAction } from '../../store/actions/registrationValidationAction';

class ValidateRegistration extends Component {
  state = {
    first_name: '',
    last_name: '',
    password: '',
    passwordConfirm: '',
    email: '',
    validationCode: ''
  };

  onChange = event => {
    const value = event.currentTarget.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = this.props.dispatch(
      registrationValidationAction(this.state)
    );
    if (response) {
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div>
        <h4>
          Please enter validation code sent to your email to proceed with login:
        </h4>
        <form action=''>
          <input
            type='text'
            value={this.state.validationCode}
            onChange={this.onChange}
            placeholder='Code'
          />
          <input
            type='text'
            value={this.state.first_name}
            onChange={this.onChange}
            placeholder='First name'
          />
          <input
            type='text'
            value={this.state.last_name}
            onChange={this.onChange}
            placeholder='Last name'
          />
          <input
            type='email'
            value={this.state.email}
            onChange={this.onChange}
            placeholder='Email'
          />
          <input
            type='password'
            value={this.state.password}
            onChange={this.onChange}
            placeholder='Password'
          />
          <input
            type='password'
            value={this.state.passwordConfirm}
            onChange={this.onChange}
            placeholder='Repeat password'
          />
          {this.state.password === this.state.passwordConfirm ? (
            <button onClick={this.handleSubmit}>Register</button>
          ) : (
            <div>
              <button disabled>Register</button> <p>Passwords must match!</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default connect()(ValidateRegistration);
