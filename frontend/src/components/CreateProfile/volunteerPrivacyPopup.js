import React from 'react';
import './popUp.css';

class VolunteerPrivacySettingPopup extends React.Component {
    render() {
        return (
            <div className='popup_over_layer privacy'>
                <div className='popup_window privacy'>
                    <div className='popup_content privacy'>
                        <div className='popup_title'>
                            <p className='label'>Privacy settings</p>
                        </div>
                        {/* 1 */}
                        <div className='popup_interest_row first'>
                            <div className='popup_column_left'>
                                <input className='radio' value='public' type='radio'
                                       onChange={this.props.handlePrivacyInput}
                                       checked={this.props.privacySettings === 'public'}
                                />
                                <label className='interest' htmlFor='public'>Public</label>
                            </div>
                            <div className='popup_column_right'>
                                <p className='radio-desc'>make information public for everyone</p>
                            </div>
                        </div>
                        {/*      2*/}
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <input className='radio' value='private' type='radio'
                                       onChange={this.props.handlePrivacyInput}
                                       checked={this.props.privacySettings === 'private'}
                                />
                                <label className='interest' htmlFor="private">Private</label>
                            </div>
                            <div className='popup_column_right'>
                                <p className='radio-desc'> only visible to profiles I follow </p>
                            </div>
                        </div>
                        {/*    3*/}
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <input className='radio' value='controlled'  type='radio'
                                       onChange={this.props.handlePrivacyInput}
                                        checked={this.props.privacySettings === 'controlled'}
                                />
                                <label className='interest' htmlFor='controlled'>Controlled </label>
                            </div>
                            <div className='popup_column_right'>
                                <p className='radio-desc'>limited profile, approve who can see my information</p>
                            </div>
                        </div>
                        {/*    4*/}
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <input className='radio' value='secret' type='radio'
                                       onChange={this.props.handlePrivacyInput}
                                        checked={this.props.privacySettings === 'secret'}
                                />
                                <label className='interest' htmlFor="secret">Secret</label>
                            </div>
                            <div className='popup_column_right'>
                                <p className='radio-desc'> I don’t want to be found by anyone </p>
                            </div>
                        </div>
                        {/*    BUTTON */}
                        <div className='popup_interest_row'>
                            <button className='btn-desc-save' onClick={this.props.closePopup}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VolunteerPrivacySettingPopup;