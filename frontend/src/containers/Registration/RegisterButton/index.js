import React, { Component } from 'react';
import { registrationAction } from '../../../store/actions/registrationAction';
import { connect } from 'react-redux';

class RegisterButton extends Component {
  registerButtonHandler = event => {
    if (this.props.registrationState.email !== '') {
      event.preventDefault();
      this.props
        .dispatch(registrationAction(this.props.registrationState))
        .then(data => {
          if (data) {
            this.props.history.push('/validate');
          }
        });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.registerButtonHandler}>Register</button>
      </div>
    );
  }
}

export default connect()(RegisterButton);
