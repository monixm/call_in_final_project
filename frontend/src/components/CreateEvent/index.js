import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import close from '../../assets/close.svg';
import confirm from '../../assets/confirm.svg';
import upload_image from '../../assets/upload-image.svg';
import profile from '../../assets/profile.svg';
import CallEventPopup from "./callEventPopup";
import calendar from '../../assets/calendar.svg';
import location from '../../assets/location_logo.svg';
import DateAndTimePickers from './dateTime';
import { createEventAction } from "../../store/actions/createEventAction";


class CreateEvent extends Component {
        constructor(props){
        super(props);
        this.state = {
            showCallEventPopup: false,
            title:'',
            picture:'',
            organisation:'',
            startDate:'',
            location:'',
            description:'',
            checkboxValue: false
        }
    }

    pictureHandler = e => {
        this.setState({
            picture: e.target.files[0]
        })
    }

    toggleCallEventPopup() {
        this.setState({
            showCallEventPopup: !this.state.showCallEventPopup
        });
    }

    redirectCall = () => {
            return this.props.history.push("/create-call")
    }

    redirectEvent = () => {
            return this.props.history.push("/create-event")
    }

    checkboxHandler = () => {
        this.setState({
            checkboxValue: !this.state.checkboxValue
        });
    }

    onChange_Location = e => {
        this.setState({
            location: e.currentTarget.value
        })
    }

    onChange_Description = e => {
        this.setState({
            description: e.currentTarget.value
        })
    }

    redirectClose = () => {
            return this.props.history.push("/organisation")
    }

    handlePublish = () => {
            this.props.dispatch(createEventAction(this.state))
    }

  render() {

    return (
        <div>
            <div className='call-block'>
            <div className='call-navbar'>
                <img className='call-img-close' src={close} alt='' onClick={this.redirectClose}/>
                <img className='call-img-confirm' onClick={this.toggleCallEventPopup.bind(this)} src={confirm} alt=''/>
                <p className='create-event-p'>Create an event</p>
            </div>
            <div className='call-add-div'>
                <p className='call-add-title'>Add title</p>
                <img onClick={() => this.fileInput.click()} className='call-image_upload' src={upload_image} alt=''/>
                <input style={{display: 'none'}}
                       type='file'
                       onChange={this.pictureHandler}
                       ref={fileInput => this.fileInput = fileInput}/>
            </div>
            <div className='call-profile'>
                <img className='call-org-pic' src={profile} alt=''/>
                <p className='call-org-title'>Caritas</p>
                <p className='call-org-desc'>Organizer</p>
            </div>
            <div>
                <img className='call-calendar-img' src={calendar} alt=''/>
                <div className='call-dateTime'>
                    <DateAndTimePickers />
                </div>
                <img className='call-location-img' src={location} alt=''/>
                <input className="call-location-textarea" value={this.state.location}
                onChange={this.onChange_Location} placeholder='Type a location'/>
            </div>
            <div>
                <textarea className="call-desc-textarea" value={this.state.description}
            onChange={this.onChange_Description} placeholder='Type description'/>
            </div>
            <div>
            </div>
            </div>
            <div className='call-approval-container'>
            <p className='call-approval-text'>Post must be approved</p>
            <div className="call-switch-toggle">
                <label className="switch" htmlFor="call-post-approve">
                    <input type="checkbox" id="call-post-approve" onClick={this.checkboxHandler}/>
                    <div className="slider round"></div>
                </label>
            </div>
            </div>
            <div className='call-publish'>
            <button className='call-publish-btn' onClick={this.handlePublish}>Publish</button>
            </div>
            <div className='call-callevent-screen'>
                {this.state.showCallEventPopup ?
                <CallEventPopup
                    closePopup={this.toggleCallEventPopup.bind(this)}
                    handlePrivacyInput={this.handlePrivacyInput}
                    redirectCall={this.redirectCall}
                    redirectEvent={this.redirectEvent}
                />  : null  }
            </div>
        </div>
    );
  }
}

export default connect()(CreateEvent);
