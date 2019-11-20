import React, { Component } from 'react';
import './style.css';
import NotGoing from '../../assets/not_going.svg';
import NotStarred from '../../assets/not_starred.svg';
import Ellipse from '../../assets/ellipse.svg';
import LocationLogo from '../../assets/location_logo.svg';
import Moment from 'react-moment';

class Event extends Component {
  render() {
    const call = this.props.call;

    return (
      <>
        <div>
          <div className='event'>
            <div className='event-header'>
              <div className='event-header-left'>
                <img
                  id='ellipse'
                  className='event-org-logo'
                  src={call.picture}
                  alt=''
                />
                <div className='middleText'>
                  <p id='organiser'>{call.organisation.name}</p>
                  <p>
                    <Moment format='DD-MM-YYYY'>{call.created}</Moment>
                  </p>
                </div>
              </div>
              <div className='event-header-right'>
                <img src={LocationLogo} alt='' />
                <p>{call.location}</p>
              </div>
            </div>
            <div className='event-body'>
              <div className='event-body-top'>
                <div className='event-body-left'>
                  <p id='date'>
                    <Moment format='DD-MM-YYYY'>{call.start_datetime}</Moment>
                    <span> AT </span>
                    <Moment format='HH:mm'>{call.start_datetime}</Moment>
                  </p>
                  <p id='title'>{call.title}</p>
                  {/* <p id='place'>{call.location}</p> */}
                  <p id='description'>{call.description}</p>
                </div>
                <div className='event-body-right'>
                  <img src={NotStarred} alt='' />
                  <img src={NotGoing} alt='' />
                </div>
              </div>
              <div className='event-body-bottom'>
                <div className='icons'></div>
                <div className='peopleGoing'>
                  <div className='people'>
                    <img
                      id='pic1'
                      src={call.participants.profile_picture}
                      alt=''
                    />
                    <img id='pic2' src={Ellipse} alt='' />
                    <img id='pic3' src={Ellipse} alt='' />
                  </div>
                  <p>{call.participants.length} people are going</p>
                </div>
              </div>
            </div>
          </div>
          <div className='color-break'></div>
        </div>
      </>
    );
  }
}

export default Event;
