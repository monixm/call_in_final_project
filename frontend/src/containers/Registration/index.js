import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registrationAction } from '../../store/actions/registrationAction';
import Logo from '../../assets/logo.svg';
import LogoCallBig from '../../assets/logo-call-big.svg';
import './style.css';
import '../Login/style.css';

class Registration extends Component {
  state = {
    email: ''
  };

  onChange = event => {
    this.setState({
      email: event.currentTarget.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await this.props.dispatch(registrationAction(this.state));
    console.log('handleSubmit', response);
    if (response) {
      this.props.history.push('/new-user');
    }
  };

  render() {
    return (
      <div className='registration'>
        <div className='login-logo'>
          <img className='logo' src={LogoCallBig} alt='profile-icon' />
          <div className='logo-megaphone'>
            <img src={Logo} alt='' />
          </div>
        </div>
        <div className='activation-message'>
          <h4>Registration</h4>
          <h5>
            Please enter your email after which an activation code will be sent
            to your inbox.
          </h5>
        </div>
        <div className='registration-form'>
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
      </div>
    );
  }
}

export default connect()(Registration);
