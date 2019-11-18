import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css'

class CalendarItem extends Component {
  render() {
    return (
    <div className='calendar-item'>
      <div className='top-line'>
        <div id='title'>Booth duty</div>
        <div>datetime</div>
      </div>
      <div className='bottom-line'>
        Organizer
      </div>
    </div>
    )
  }
}

export default CalendarItem