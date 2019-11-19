import React, { Component } from 'react';
import Follow from '../../../assets/follow.svg';
import '../style.css';

class FollowButton extends Component {
  render() {
    return (
      <div className='volunteer-follow-button'>
        <img src={Follow} alt='' />
      </div>
    );
  }
}

export default FollowButton;
