import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Event from '../Event';
import { getEventAction } from '../../store/actions/getEventAction';

class EventPage extends Component {

  async componentDidMount() {
    const id = this.props.match.params.eventId;
    await this.props.dispatch(getEventAction(id))
  }


  render() {
    return (
      <>
      <Header />
      {Object.keys(this.props.call).length > 0 ? <Event call={this.props.call }/> : null}
      </>
    )
  }
}

const MapStateToProps = state => {
  return {
    call: state.eventAndCallReducer.event
  }
}

export default connect(MapStateToProps)(EventPage)