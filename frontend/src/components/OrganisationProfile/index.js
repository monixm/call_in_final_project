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
              <button className='org-edit-btn'>Edit profile</button>
              <button className='org-approve-btn'>Approve requests</button>
          </div>
          <div className='color-break'></div>
            <div>
            <Link to='/create-call'>
                <button className='org-create-call-btn' >Add a new call</button>
            </Link>
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

export default connect(mapStateToProps)(OrganisationProfile)