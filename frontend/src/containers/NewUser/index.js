import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import LogoCallBig from '../../assets/logo-call-big.svg';
import Logo from '../../assets/logo.svg';

class NewUser extends Component {
  render() {
    return (
      <div className='home-component'>
        <div className='home-logo'>
          <img className='logo' src={LogoCallBig} alt='profile-icon' />
          <div className='logo-megaphone'>
            <img src={Logo} alt='' />
          </div>
        </div>
        <div className='home-short-info'>
          <p className='home-font-10'>
            <b>
              connecting non-profit organisations, non-governmental
              organisations, projects with locals, and migrants
            </b>
          </p>
        </div>

        {/* {this.getProfile()} */}
        <div className='home-middle'>
          <div className='home-org-section'>
            <Link to='/create-ngo-project-profile'>
              <button className='home-button-long'>
                an npo, an ngo or a project?
              </button>
            </Link>
            <p className='home-font-7'>
              Are you an organisation or working on a project? Do you need
              volunteers or resources?
            </p>
          </div>
          <div className='home-individual-section'>
            <Link to='/volunteer/create/new'>
              <button className='home-button'>an individual?</button>
            </Link>
            <p className='home-font-7'>
              Are you a local, who wants to contribute? Did you just migrate in
              Switzerland?
            </p>
          </div>
        </div>

        <p className='home-font-10 home-p-margin'>
          <b>Please choose to create a profile</b>
        </p>

        <div className='home-table-container'>
          <p className='home-font-10'>
            <b>Why should I participate? </b>
          </p>
          <ol className='home-font-10'>
            <li>
              Be part of the multicultural Call In community of non-profit
              organisations, non-governmental organisations, and individuals.
            </li>
            <li>
              Participate in monthly meet ups in different cities across
              Switzerland.
            </li>
            <li>Socialise.</li>
            <li>Get informed of projects happening around you</li>
            <li>
              Participate in talks and presentations by migrants, volunteers,
              and organisations.
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default NewUser;


