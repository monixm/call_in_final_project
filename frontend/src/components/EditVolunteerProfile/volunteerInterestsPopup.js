import React from 'react';
import './popUp.css';

class VolunteerInterestsPopup extends React.Component {
    render() {
        return (
            <div className='popup_over_layer'>
                <div className='popup_window'>
                    <div className='popup_content'>
                        <div className='popup_title'>
                            <p className='label'>What can you offer?</p>
                        </div>
                        <div className='popup_interest_row first'>
                            <div className='popup_column_left'>
                                <p className='interest'>Social</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.social}
                                          onChange={(event) => this.props.changeInterest(event, 'social')}
                                          placeholder='What social interest do you have?'/>
                            </div>
                        </div>
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <p className='interest'>Languages</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.languages}
                                       onChange={(event) => this.props.changeInterest(event, 'languages')}
                                       placeholder='Which languages do you speak?'/>
                            </div>
                        </div>
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <p className='interest'>Sports</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.sports}
                                       onChange={(event) => this.props.changeInterest(event, 'sports')}
                                       placeholder='Do you love sports activities?'/>
                            </div>
                        </div>
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <p className='interest'>Arts & Culture</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.arts_culture}
                                       onChange={(event) => this.props.changeInterest(event, 'arts_culture')}
                                       placeholder='Do you have artistic skills or can offer workshop spaces or materials?'/>
                            </div>
                        </div>
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <p className='interest'>Coaching</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.coaching}
                                       onChange={(event) => this.props.changeInterest(event, 'coaching')}
                                       placeholder='Where can you offer help? e.g. visiting apartments, translate letters'/>
                            </div>
                        </div>
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <p className='interest'>Food</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.food}
                                       onChange={(event) => this.props.changeInterest(event, 'food')}
                                       placeholder='Do you like cakes or cooking for events?'/>
                            </div>
                        </div>
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <p className='interest'>Politics</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.politics}
                                        onChange={(event) => this.props.changeInterest(event, 'politics')}
                                       placeholder='Are you interested in political issues, e.g. human rights, environment,...?'/>
                            </div>
                        </div>
                        <div className='popup_interest_row'>
                            <div className='popup_column_left'>
                                <p className='interest'>Items</p>
                            </div>
                            <div className='popup_column_right'>
                                <textarea  className='interest-text' value={this.props.interests.items}
                                        onChange={(event) => this.props.changeInterest(event, 'items')}
                                       placeholder='Do you have items to borrow for activities?'/>
                            </div>
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

export default VolunteerInterestsPopup;