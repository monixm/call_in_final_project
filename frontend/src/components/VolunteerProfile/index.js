import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../Header';
import Patricia from '../../assets/prof.jpeg';

class VolunteerProfile extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='volunteer-profile'>
          <div className='volunteer-intro'>
            <div className='imgs'>
              <img
                src={Patricia}
                className='volunteer-profile-pic'
                alt=''
              />
            </div>
            <h4 className='volunteer-name'>Tamara Aepli</h4>
            <p className='volunteer-profile-type'>Individual</p>
          </div>
          <div className='volunteer-buttons'>
            <Link to='/create_volunteer'>
              <button>Edit profile</button>
            </Link>
            <button>Approve requests</button>
          </div>
          <div className='color-break'></div>
          <h4>Tamara's interests in projects and events</h4>
          <div className='volunteer-interests'>
            <div className='interests-box'>
              <h6>Social</h6>
              <p>meet up, langauge exchange, dancing</p>
            </div>
            <div className='interests-box'>
              <h6>Languages</h6>
              <p>meet up, langauge exchange, dancing</p>
            </div>
            <div className='interests-box'>
              <h6>Sports</h6>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='interests-box'>
              <h6>Arts & culture</h6>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='interests-box'>
              <h6>Job coaching</h6>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='interests-box'>
              <h6>Sports</h6>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='color-break'></div>
          </div>

        </div>
      </>
    );
  }
}

export default connect()(VolunteerProfile);
