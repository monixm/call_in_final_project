import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Header from '../Header';
import {getEventAction} from '../../store/actions/getEventAction'

class GuestList extends Component {
  async componentDidMount() {
    const id = this.props.match.params.eventId;
    await this.props.dispatch(getEventAction(id))
  }

  render() {
    return (
      <>
        <Header className='header' />
        {Object.keys(this.props.event).length > 0 
        ? ( 
        <div className='guestlist'>
          <div className='guestlist-title'>
            <p>Guest list</p>
          </div>
          {this.props.event.participants.map(participant => {
            return (
              <div className='guest'>
                <image src={participant.profile_picture}/>
                <p>{participant.first_name} {participant.last_name}</p>
              </div>)
          })}
        </div>)
        : null}
      </>
    )
  }
}

const MapStateToProps = state => {
  return {
    event: state.eventAndCallReducer.event
  }
}

export default connect(MapStateToProps)(GuestList)