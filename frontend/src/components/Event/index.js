import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import NotGoing from '../../assets/not_going.svg';
import NotStarred from '../../assets/not_starred.svg';
import UserCircle from '../../assets/user_circle.svg';
import Ellipse from '../../assets/ellipse.svg';
import LocationLogo from '../../assets/location_logo.svg';


class Event extends Component {
  render() {
    return (
      <>
        <div className='event'>
          <div className='event-header'>
            <div className='event-header-left'>
              <img id='ellipse' src={Ellipse} />
              <div className='middleText'>
                <p id='organiser'>Event Organizer</p>
                <p>Date posted</p>
              </div>
            </div>
            <div className='event-header-right'>
              <img src={LocationLogo}/>
              <p>Distance away from User</p>
            </div>
          </div>
          <div className='event-body'>
            <div className='event-body-top'>
              <div className='event-body-left'>
                <p id='date'>TODAY, 20 MAY AT 18:30 - 20:00</p>
                <p id='title'>Title of the event</p>
                <p id='place'>Place of the event</p>
                <p id='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
              </div>
              <div className='event-body-right'>
                <img src={NotStarred} />
                <img src={NotGoing} />
              </div>
            </div>
            <div className='event-body-bottom'>
              <div className='icons'>

              </div>
              <div className='peopleGoing'>
                <div className='people'>
                  <img id='pic1' src={UserCircle} />
                  <img id='pic2' src={Ellipse} />
                  <img id='pic3' src={Ellipse} />
                </div>
                <p>8 people are going</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default connect()(Event)