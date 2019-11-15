import React from 'react';
import './index.css';

class ProfilePopup extends React.Component {
  render() {
    return (
        <div className='profile-popup'>
        <div className='profile-popup-inner'>
            <p className='org-profile-title'>Please add your profile URL</p>
            <p className='org-profile-facebook'>Facebook</p>
            <input className="org-profile-facebook-textarea" value={this.props.value_Facebook}
                onChange={this.props.onChange_Facebook}/>
            <p className='org-profile-instagram'>Instagram</p>
            <input className="org-profile-instagram-textarea" value={this.props.value_Instagram}
                onChange={this.props.onChange_Instagram}/>
                <p className='org-profile-linkedin'>LinkedIn</p>
            <input className="org-profile-linkedin-textarea" value={this.props.value_LinkedIn}
                onChange={this.props.onChange_LinkedIn}/>
            <button className='btn-profile-save' onClick={this.props.closePopup}>Done</button>
        </div>
        </div>
    );
    }
}

export default ProfilePopup;