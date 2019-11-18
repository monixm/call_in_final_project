import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import close from '../../assets/close.svg';
import confirm from '../../assets/confirm.svg';
import upload_image from '../../assets/upload-image.svg';
import profile from '../../assets/profile.svg';
import CallEventPopup from "../CreateCall/callEventPopup";


class Header extends Component {
        constructor(props){
        super(props);
        this.state = {
            picture:'',
            showCallEventPopup: false,
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


  render() {
    return (
        <div>
            <div className='call-navbar'>
                <img className='call-img-close' src={close} alt=''/>
                <img className='call-img-confirm' onClick={this.toggleCallEventPopup.bind(this)} src={confirm} alt=''/>
                <p className='create-call-p'>Create an event</p>
            </div>
            <div className='call-add-div'>
                <p className='call-add-title'>Add title</p>
                <img onClick={() => this.fileInput.click()} className='call-image_upload' src={upload_image} alt=''/>
                <input style={{display: 'none'}}
                       type='file'
                       onChange={this.pictureHandler}
                       ref={fileInput => this.fileInput = fileInput}/>
            </div>
            <div>
                <img className='call-org-pic' src={profile} alt=''/>
                <p className='call-org-title'>Caritas</p>
                <p className='call-org-desc'>Organizer</p>
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

export default connect()(Header);
