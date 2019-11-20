import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Call from '../Call';
import { getCallAction } from '../../store/actions/getCallAction';

class CallPage extends Component {

  async componentDidMount() {
    const id = this.props.match.params.callId;
    await this.props.dispatch(getCallAction(id))
  }


  render() {
    return (
      <>
      <Header />
      {Object.keys(this.props.call).length > 0 ? <Call call={this.props.call }/> : null}
      </>
    )
  }
}

const MapStateToProps = state => {
  return {
    call: state.eventAndCallReducer.call
  }
}

export default connect(MapStateToProps)(CallPage)