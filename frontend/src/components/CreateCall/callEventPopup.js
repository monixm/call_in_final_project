import React from 'react';
import './index.css';
import back from '../../assets/back.svg';


class CallEventPopup extends React.Component {

  render() {
    return (
        <div className='callEvent-popup'>
                        <img className='call-img-back' src={back} alt=''/>
        <div className='callEvent-popup-inner'>
            <div>
                <input className='call-radio' value='public' type="radio" id="public" name="radioA"
                   onClick={this.props.redirectCall} /> <label className='call-radio-label' htmlFor="public">Create a call</label>
                <input className='event-radio' value='private' type="radio" id="private" name="radioA"
                   onClick={this.props.redirectEvent} /> <label className='event-radio-label' htmlFor="private">Create an event</label>
            </div>
        </div>
        </div>
        );
    }
}

export default CallEventPopup;