import React, { Component } from 'react';
import './style.css'
import Moment from 'react-moment';

class CalendarItem extends Component {

  render() {
    const item = this.props.call;
    return (
      <div className='calendar-item'>
        <div className='left'>
          <div id='title'>{item.title}</div>
          {item.organisation.name}
        </div>
        <div id='right'>
          <Moment format='ddd, D MMM [at] k:mm' date={item.start_datetime} /> -
          <Moment format='k:mm' date={item.end_datetime} />
        </div>
      </div>
    )
  }
}

export default CalendarItem