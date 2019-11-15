import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Going from '../../assets/going.svg';
import NotGoing from '../../assets/not_going.svg';
import NotStarred from '../../assets/not_starred.svg';
import UserCircle from '../../assets/user_circle.svg';


class Event extends Component {
  render() {
    return (
      <>
        <div className='event'>
          <div className='event-header'>
            <div className='event-header-left'>
              <image />
              <p>Event Organizer</p>
              <p>Date posted</p>
            </div>
            <div className='event-header-right'>
              <p>Distance away from User</p>
            </div>
          </div>
          <div className='event-body'>
            <div className='event-body-left'>
              <p id='date'>TODAY, 20 MAY AT 18:30 - 20:00</p>
              <p id='title'>Title of the event</p>
              <p id='place'>Place of the event</p>
            </div>
            <div className='event-body-right'>
              <img src={NotStarred}/>
              <img src={NotGoing}/>
              <img src={UserCircle}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default connect()(Event)