import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../Header';
import profile from '../../assets/profile.svg';

class VolunteerProfile extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='volunteer-profile'>
          <div className='volunteer-intro'>
            <div className='imgs'>
              <img
                src={profile}
                className='volunteer-profile-pic'
                alt=''
              />
            </div>
            <h4 className='volunteer-name'>Caritas</h4>
            <p className='volunteer-profile-type'>Non-profit organisation</p>
          </div>
          <div className='volunteer-buttons'>
            <Link to='/create_volunteer'>
              <button>Edit profile</button>
            </Link>
            <button>Approve requests</button>
          </div>
          <div className='color-break'></div>
            <Link to='/create-call'>
                <button className='org-new-call-btn' >Add a new call</button>
            </Link>
        </div>
      </>
    );
  }
}

export default connect()(VolunteerProfile);
