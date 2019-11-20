import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../Header';
import profile from '../../assets/profile.svg';

class OrganisationProfile extends Component {

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
            <h4 className='volunteer-name'>{this.props.profile.name}</h4>
            <p className='volunteer-profile-type'>{this.props.profile.type}</p>
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

const mapStateToProps = state => {
    return {
      profile: state.organisationProfileReducer.profile,
    }
  }

export default connect(mapStateToProps)(OrganisationProfile)