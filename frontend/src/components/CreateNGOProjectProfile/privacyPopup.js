import React from 'react';
import './index.css';

class PrivacyPopup extends React.Component {
  render() {
    return (
        <div className='privacy-popup'>
        <div className='privacy-popup-inner'>
            <p className='org-contact-title'>What can you offer?</p>
            <div>
                <input className='public-radio' value='public' type="radio" id="public" name="radioC"
                   onClick={this.props.handlePrivacyInput} /> <label className='public-radio-label' htmlFor="public">Public</label>
                <p className='public-radio-desc'>make information public for everyone</p>
                <input className='private-radio' value='private' type="radio" id="private" name="radioC"
                   onClick={this.props.handlePrivacyInput} /> <label className='private-radio-label' htmlFor="private">Private</label>
                <p className='private-radio-desc'>only visible to profiles I follow</p>
                <input className='controlled-radio' value='controlled' type="radio" id="controlled" name="radioC"
                   onClick={this.props.handlePrivacyInput} /> <label className='controlled-radio-label' htmlFor="controlled">Controlled</label>
                <p className='controlled-radio-desc'>limited profile, approve who can see my information</p>
                <input className='secret-radio' value='secret' type="radio" id="secret" name="radioC"
                   onClick={this.props.handlePrivacyInput} /> <label className='secret-radio-label' htmlFor="secret">Secret</label>
                <p className='secret-radio-desc'>I don’t want to be found by anyone</p>
            </div>
            <button className='btn-privacy-save' onClick={this.props.closePopup}>Done</button>
        </div>
        </div>
        );
    }
}

export default PrivacyPopup;