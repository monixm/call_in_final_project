import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import NotGoing from '../../assets/not_going.svg';
import NotStarred from '../../assets/not_starred.svg';
import UserCircle from '../../assets/user_circle.svg';
import Ellipse from '../../assets/ellipse.svg';


class EventOrganisationFeed extends Component {
  render() {
    return (
      <>
        <div className='event'>
          <div className='event-body'>
            <div className='event-body-top'>
              <p id='title'>Title of the event</p>
              <p id='date'>Today, 20 may at 18:30 - 20:00</p>
            </div>
            <div className='event-body-middle'>
              <div className='event-body-left'>
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

export default connect()(EventOrganisationFeed)