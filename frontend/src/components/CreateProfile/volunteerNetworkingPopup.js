import React from 'react';
import './popUp.css';

class VolunteerNetworkingPopup extends React.Component {
    render() {
        return (
            <div className='popup_over_layer networking'>
                <div className='popup_window networking'>
                    <div className='popup_content networking'>
                        <div className='popup_title'>
                            <div className='popup_column_left networking'>
                                <p className='label'>{this.props.label}</p>
                            </div>
                            <div className='popup_column_right networking'>
                                <textarea className= 'interest-text networking' value={this.props.networkValue}
                                          placeholder = 'Add url ' onChange={this.props.urlChange}/>
                            </div>
                            <div className='popup_interest_row networking'>
                            <button className='btn-save networking' onClick={this.props.closePopup}>Done</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default VolunteerNetworkingPopup;