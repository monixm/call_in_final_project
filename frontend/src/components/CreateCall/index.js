import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css';
import close from '../../assets/close.svg';
import confirm from '../../assets/confirm.svg';
import upload_image from '../../assets/upload-image.svg';
import profile from '../../assets/profile.svg';
import CallEventPopup from "./callEventPopup";
import calendar from '../../assets/calendar.svg';
import location from '../../assets/location_logo.svg';
import DateAndTimePickers from './dateTime';
import { createCallAction } from "../../store/actions/createCallAction";

class CreateCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCallEventPopup: false,
            title:'',
            picture:'',
            startDate:'',
            location:'',
            description:'',
            fieldOne:'',
            fieldTwo:'',
            fieldThree:'',
            fieldFour:'',
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

    redirectClose = () => {
        return this.props.history.push("/organisation")
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

    onChange_Title = e => {
        this.setState({
            title: e.currentTarget.value
        })
    }

    onChange_Description = e => {
        this.setState({
            description: e.currentTarget.value
        })
    }

    onChange_FieldOne = e => {
        this.setState({
            fieldOne: e.currentTarget.value
        })
    }

    onChange_FieldTwo = e => {
        this.setState({
            fieldTwo: e.currentTarget.value
        })
    }

    onChange_FieldThree = e => {
        this.setState({
            fieldThree: e.currentTarget.value
        })
    }

    onChange_FieldFour = e => {
        this.setState({
            fieldFour: e.currentTarget.value
        })
    }

    handlePublish = () => {
            this.props.dispatch(createCallAction(this.state))
    }

  render() {

    return (
        <div>
            <div className='call-block'>
            <div className='call-navbar'>
                <img className='call-img-close' src={close} alt='' onClick={this.redirectClose}/>
                <img className='call-img-confirm' onClick={this.toggleCallEventPopup.bind(this)} src={confirm} alt=''/>
                <p className='create-call-p'>Create a call</p>
            </div>
            <div className='call-add-div'>
                <input className="call-add-title" value={this.state.title}
                onChange={this.onChange_Title} placeholder='Add title'/>
                <img onClick={() => this.fileInput.click()} className='call-image_upload' src={upload_image} alt=''/>
                <input style={{display: 'none'}}
                       type='file'
                       onChange={this.pictureHandler}
                       ref={fileInput => this.fileInput = fileInput}/>
            </div>
            <div className='call-profile'>
                <img className='call-org-pic' src={profile} alt=''/>
                <p className='call-org-title'>{this.props.profile.name}</p>
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
            <div className='call-field-container'>
                <input className="call-field-input" type="text" placeholder='Type field option'
                       onChange={this.onChange_FieldOne} value={this.props.fieldOne}/>
                <input className="call-field-input" type="text" placeholder='Type field option'
                       onChange={this.onChange_FieldTwo} value={this.props.fieldTwo}/>
                <input className="call-field-input" type="text" placeholder='Type field option'
                       onChange={this.onChange_FieldThree} value={this.props.fieldThree}/>
                <input className="call-field-input" type="text" placeholder='Type field option'
                       onChange={this.onChange_FieldFour} value={this.props.fieldFour}/>
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

const mapStateToProps = state => {

    return {
      profile: state.organisationProfileReducer.profile,
    }
  }

export default connect(mapStateToProps)(CreateCall)
