import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../../assets/search.svg';
import Calendar from '../../assets/calendar.svg';
import Profile from '../../assets/profile.svg';
import Logo from '../../assets/logo-call.svg';
import LogoActive from '../../assets/logo-call-active.svg';
import ProfileActive from '../../assets/profile-active.svg';
import SearchActive from '../../assets/search-active.svg';
import Logout from '../../assets/logout.svg';
import CalendarActive from '../../assets/calendar-active.svg';
import './style.css';
import { withRouter } from 'react-router-dom';
import { userLogout } from '../../store/actions/logoutAction';


class Header extends Component {
  // state = {
  //   navigate: false
  // };

  logoutHandler = () => {
    this.props.dispatch(userLogout());
    console.log(this.props.logoutHandler);
  };

  render() {
    // const { navigate } = this.state;

    // if (navigate) {
    //   return <Redirect to='' push={true} />;
    // }

    return (
      <div className='navbar'>
        <div className='right-nav'>
          <li className='Header-li'>
            <NavLink to='/feed/me'>
              {this.props.location.pathname === '/feed/me' ? (
                <img src={ProfileActive} alt='user-profile' />
              ) : (
                <img src={Profile} alt='user-icon' />
              )}
            </NavLink>
          </li>
          <li className='Header-li'>
            <NavLink to='/search'>
              {this.props.location.pathname === '/search' ? (
                <img src={SearchActive} alt='search-icon' />
              ) : (
                <img src={Search} alt='search-icon' />
              )}
            </NavLink>
          </li>
        </div>
        <NavLink to='/feed'>
          {this.props.location.pathname === '/feed' ? (
            <img src={LogoActive} alt='logo' />
          ) : (
            <img src={Logo} alt='logo' />
          )}
        </NavLink>
        <div className='left-nav'>
          <li className='Header-li'>
            <NavLink to='/calendar'>
              {this.props.location.pathname === '/calendar' ? (
                <img src={CalendarActive} alt='calendar-icon' />
              ) : (
                <img src={Calendar} alt='calendar-icon' />
              )}
            </NavLink>
          </li>
          <Link to='/'>
            <li className='Header-li'>
              <img onClick={this.logoutHandler} src={Logout} alt='logout' />
            </li>
          </Link>
        </div>
      </div>
    );
  }
}

// export default withRouter connect()(Header);
export default withRouter(connect()(Header));
