import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import './index.css';
import Header from '../Header';
import message from '../../assets/message.svg';
import share from '../../assets/share.svg';

class OrganisationProfilePublic extends Component {

  render() {
    const organisation = "**ORGANISATION PROFILE**";

    return (
      <>
        <Header />
        <div className='org-profile'>
          <div className='org-intro'>
            <div className='imgs'>
              <img
                src={this.props.profile.profile_pic}
                className='org-profile-pic'
                alt=''
              />
            </div>
            <h4 className='org-name'>{this.props.profile.name}</h4>
            <p className='org-profile-type'>{this.props.profile.type}</p>
          </div>
          <div className='org-buttons'>
            <button className='org-follow-btn'>Follow</button>
            <div className='org-msg-share'>
              <img className='org-message-icon' src={message} alt='' />
              <img className='org-share-icon' src={share} alt='' />
            </div>
          </div>
          <div className='color-break'></div>
          <div className='org-info-cont'>
          <p className='org-prof-information'>Information</p>
          <p className='org-prof-description'>{this.props.profile.description}</p>
          <p className='org-prof-website' >{this.props.profile.website}</p>
          <p className='org-prof-phone'>{this.props.profile.phone}</p>
          </div>
          <div className='color-break'></div>
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

export default connect(mapStateToProps)(OrganisationProfilePublic)