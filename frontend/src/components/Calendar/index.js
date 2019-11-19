import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import confirmed from '../../assets/confirmed.svg';
import going from '../../assets/going.svg';
import starred from '../../assets/starred.svg';
import './style.css'
import CalendarItem from '../CalendarItem';
import { getFeedVolunteerAction } from '../../store/actions/getFeedVolunteerAction'
import { Link } from 'react-router-dom'

class Calendar extends Component {
  async componentDidMount() {
    this.props.dispatch(getFeedVolunteerAction());
  }
  render() {
    console.log('in the render', this.props.call)
    return (
      <>
        <Header />
        <div className='calls'>
          <div className='top'>
            <p>Projects I'm Volunteering in</p>
            <img src={confirmed} />
          </div>
          <div className='list'>
            {this.props.call.map(call =>
              call.hasOwnProperty('call_options') ? (
                <Link to={`call/${call.id}`} style={{ color: '#574947' }}>
                  <CalendarItem call={call} key={call.id} />
                </Link>
              ) : null
            )}
          </div>
        </div>
        <div className='events'>
          <div className='top'>
            <p>Events I'm going</p>
            <img src={going} />
          </div>
          <div className='list'>
            {this.props.call.map(call => {
              if (call.type === 'event')
                return (
                  <Link to={`event/${call.id}`} style={{ color: '#574947' }}>
                    <CalendarItem call={call} key={call.id} />
                  </Link>
                )
            }
            )}
          </div>
        </div>
        <div className='bookmarks'>
          <div className='top'>
            <p>Projects and Events marked</p>
            <img src={starred} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    call:
      state.feedVolunteerReducer.feed.hasOwnProperty('**CALL**') &&
        state.feedVolunteerReducer.feed.hasOwnProperty('**EVENT**')
        ? [
          ...state.feedVolunteerReducer.feed['**CALL**'],
          ...state.feedVolunteerReducer.feed['**EVENT**']
        ]
        : []
  };
};

export default connect(mapStateToProps)(Calendar);
