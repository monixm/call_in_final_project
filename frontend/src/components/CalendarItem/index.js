import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css'
import Moment from 'react-moment';

class CalendarItem extends Component {

  render() {
    const item = this.props.call;
    return (
    <div className='calendar-item'>
      <div className='top-line'>
        <div id='title'>{item.title}</div>
        <div id='time'>
          <Moment format='ddd, D MMMM [at] k:mm' date={item.start_datetime}/> - 
          <Moment format='k:mm' date={item.end_datetime}/>
        </div>
      </div>
      <div className='bottom-line'>
        {item.organisation.name}
      </div>
    </div>
    )
  }
}

export default CalendarItem