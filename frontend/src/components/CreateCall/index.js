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
// import option from '../../assets/option-rect.svg';
// import uuid from "uuid";
import Input from './input';


class CreateCall extends Component {
        constructor(props){
        super(props);
        this.state = {
            picture:'',
            showCallEventPopup: false,
            checkboxValue: false,
            location:'',
            description:'',
            field:'',
            inputList: ["text"],
                startDate: new Date(),
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

    handleChange = date => {
    this.setState({
      startDate: date
    });
  };

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

    onChange_Field = e => {
        this.setState({
            field: e.currentTarget.value
        })
    }

    fieldNumHandler = (input) => {
        let newState = {...this.state}
        newState.inputList = this.state.inputList.push(input)
        this.setState(newState)
    }

  render() {
    return (
        <div>
            <div className='call-navbar'>
                <img className='call-img-close' src={close} alt=''/>
                <img className='call-img-confirm' onClick={this.toggleCallEventPopup.bind(this)} src={confirm} alt=''/>
                <p className='create-call-p'>Create a call</p>
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
            {this.state.inputList.map(input =>
                <Input input={input} onChangeInput={this.onChange_Field} valueField={this.state.field}/>
            )}
            <p className='call-add-field' onClick={()=> this.fieldNumHandler('text')}>Add field option</p>
            {/*<p className='call-approval-text'>Post must be approved</p>*/}
            {/*<div className="call-switch-toggle">*/}
            {/*    <label className="switch" htmlFor="call-post-approve">*/}
            {/*        <input type="checkbox" id="call-post-approve" onClick={this.checkboxHandler}/>*/}
            {/*        <div className="slider round"></div>*/}
            {/*    </label>*/}
            {/*</div>*/}
            {/*<button className='call-publish-btn'>Publish</button>*/}
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

export default connect()(CreateCall);
