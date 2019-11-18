import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Header from '../Header';

class GuestList extends Component {
  render() {
    return (
      <>
      <Header className='header' />
      <div className='guestlist'>
        <div className='guestlist-title'>
          <p>Guest list</p>
        </div>
        <div className='guest'>
          <image/>
          <p>User name</p>
        </div>
      </div>
      </>
    )
  }
}

export default connect()(GuestList)