import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Chat from '../../assets/chat.svg';
import Search from '../../assets/search.svg';
import { faUserCircle as farUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt as farCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='right-nav'>
          <li className='Header-li'>
            <Link to='/volunteer'>
              <FontAwesomeIcon icon={farUserCircle} />
            </Link>
          </li>
          <li className='Header-li'>
            <Link to='/search'>
              <img src={Search} alt='search-icon' />
            </Link>
          </li>
        </div>
        <h1 className='companyName'>
          <span className='call'>Call</span> <span className='in'>In</span>
        </h1>
        <div className='left-nav'>
          <li className='Header-li'>
            <Link to='/calendar'>
              <FontAwesomeIcon icon={farCalendarAlt} />
            </Link>
          </li>
          <li className='Header-li'>
            <Link to='/chat'>
              <img src={Chat} alt='chat' />
            </Link>
          </li>
        </div>
      </div>
    );
  }
}

export default connect()(Header);
