import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registrationAction } from '../../store/actions/registrationAction';
import './style.css';

class Registration extends Component {
  state = {
    email: ''
  };

  onChange = event => {
    this.setState({
      email: event.currentTarget.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const response = this.props.dispatch(registrationAction(this.state));
    console.log('handleSubmit', response);
    if (response) {
      this.props.history.push('/validate');
    }
  };

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <form>
          <input
            type='email'
            value={this.state.email}
            placeholder='email'
            autoComplete='on'
            onChange={this.onChange}
          ></input>
          <button onClick={this.handleSubmit} type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Registration);
