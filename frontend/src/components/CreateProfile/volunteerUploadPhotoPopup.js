import React from 'react';
import './popUp.css';

class VolunteerUploadPhotoPopup extends React.Component {
    render() {
        return (
            <div className='popup_over_layer upload'>
                <div className='popup_window upload'>
                    <div className='popup_content upload'>
                        <div className='popup_title'>
                            <p className='label'>Profile photo:</p>
                        </div>
                        <div className='popup_interest_row'>
                            <button className='btn-desc-save' onClick={this.props.closePopup}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VolunteerUploadPhotoPopup;