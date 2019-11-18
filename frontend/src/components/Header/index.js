import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Chat from '../../assets/chat.svg';
import Search from '../../assets/search.svg';
import Calendar from '../../assets/calendar.svg';
import Profile from '../../assets/profile.svg';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='right-nav'>
          <li className='Header-li'>
            <NavLink to='/feed/me' activeClassName='chosen'>
              <img src={Profile} alt='profile-icon' />
            </NavLink>
          </li>
          <li className='Header-li'>
            <NavLink to='/search' activeClassName='chosen'>
              <img src={Search} alt='search-icon' />
            </NavLink>
          </li>
        </div>
        <Link to='/feed'>
          <h1 className='companyName'>
            <span className='call'>Call</span> <span className='in'>In</span>
          </h1>
        </Link>

        <div className='left-nav'>
          <li className='Header-li'>
            <NavLink to='/calendar' activeClassName='chosen'>
              <img src={Calendar} alt='calendar-icon' />
            </NavLink>
          </li>
          <li className='Header-li'>
            <NavLink to='/chat' activeClassName='chosen'>
              <img src={Chat} alt='chat' />
            </NavLink>
          </li>
        </div>
      </div>
    );
  }
}

export default connect()(Header);
