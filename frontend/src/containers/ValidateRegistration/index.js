import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registrationValidationAction } from '../../store/actions/registrationValidationAction';

class ValidateRegistration extends Component {
//  constructor(props) {
//    super(props);

    // handleEmailChange = (e, email) => {
    //   this.setState({ email });
    // };

    // handleFirstNameChange = (e, first_name) => {
    //   this.setState({ first_name });
    // };

    // handleLastName = (e, last_name) => {
    //   this.setState({ last_name });
    // };

    // handlePasswordChange = (e, password) => {
    //   this.setState({ password });
    // };

    // handlePasswordRepeatChange = (e, password_repeat) => {
    //   this.setState({ password_repeat });
    // };

    // handleCodeChange = (e, code) => {
    //   this.setState({ code });
    // };
//  }
  // onChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  // handleChange = event => {
  //   const value = event.currentTarget.value;
  //   const name = event.target.name;
  //   console.log('jshs', name);
  //   this.setState({
  //     [name]: value
  //   });
  // };

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
        <form>
          <input
            type='text'
            value={this.state.code}
            onChange={this.handleCodeChange}
            placeholder='Code'
          />

          <input
            type='text'
            value={this.state.first_name}
            onChange={this.handleFirstNameChange}
            placeholder='First name'
          />
          <input
            type='text'
            value={this.state.last_name}
            onChange={this.handleLastName}
            placeholder='Last name'
          />
          <input
            type='email'
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder='Email'
          />
          <input
            type='password'
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder='Password'
          />
          <input
            type='password'
            value={this.state.password_repeat}
            onChange={this.handlePasswordRepeatChange}
            placeholder='Repeat password'
          />
          {this.state.password === this.state.password_repeat ? (
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
