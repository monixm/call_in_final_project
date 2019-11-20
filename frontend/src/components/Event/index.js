import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import NotGoing from '../../assets/not_going.svg';
import NotStarred from '../../assets/not_starred.svg';
import UserCircle from '../../assets/user_circle.svg';
import Ellipse from '../../assets/ellipse.svg';
import LocationLogo from '../../assets/location_logo.svg';
import Moment from 'react-moment';

class Event extends Component {
  render() {
    const call = this.props.call;
    console.log('callId r', call.id)
    const callId = call


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
                    <Moment fromNow='h'>{call.created}</Moment>
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
                    <Moment format='DD MMM YYYY [at] k:mm'>{call.start_datetime}</Moment>
                    <span> - </span>
                    <Moment format='HH:mm'>{call.end_datetime}</Moment>
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
                    {call.participants.slice(0, 3).map(user => {
                      return user.profile_picture !== null ? (
                        <img id='pic1' src={user.profile_picture} alt='' />
                      ) : (
                          <img alt='' src={UserCircle} />
                        )
                    })}
                  </div>
                  <Link to={`/${call.id}/guestlist`} style={{ color: '#574947' }}>
                    <p>{call.participants.length} people are going</p>
                  </Link>
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
