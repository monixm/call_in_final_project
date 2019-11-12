import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom'
import './index.css';
import DescriptionPopup from './descriptionPopup';
import FocusPopup from './focusPopup';
import ContactPopup from './contactPopup';
import location_logo from '../../assets/location_logo.svg';
import upload_image from '../../assets/upload-image.svg';
import { createProfileAction } from '../../store/actions/createProfileAction';

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            information: {
              organisationName: '',
              organisationType:'',
              organisationLocation: '',
              organisationDescription: '',
              organisationFocus: {
                  social:'',
                  languages:'',
                  sports:'',
                  artsCulture:'',
                  coaching:'',
                  food:'',
                  politics:'',
                  items:''
              },
                organisationContact: {
                    email:'',
                    website:'',
                    phone:''
                },
              organisationTerms:'',
            },
          showDescriptionPopup: false,
          showFocusPopup: false,
          showContactPopup: false,
        }
    }

    // getRedirect = () => {
    // if (this.state.filloutDescription) {
    //     return <Redirect to='/fillout-description' />
    // } else if (this.state.individualProfile) {
    //     return <Redirect to='/upload-document' />
    // }
    // }

    toggleDescriptionPopup() {
    this.setState({
        showDescriptionPopup: !this.state.showDescriptionPopup
    });
    }

    toggleFocusPopup() {
        this.setState({
            showFocusPopup: !this.state.showFocusPopup
        });
        }

    toggleContactPopup() {
        this.setState({
            showContactPopup: !this.state.showContactPopup
        });
        }

    changeSocialValue = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.social = e.currentTarget.value
        this.setState(newState)
    }

    changeLanguagesValue = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.languages = e.currentTarget.value
        this.setState(newState)
    }

    changeSportsValue = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.sports = e.currentTarget.value
        this.setState(newState)
    }

    changeArtsCultureValue = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.artsCulture = e.currentTarget.value
        this.setState(newState)
    }

    changeCoachingValue = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.coaching = e.currentTarget.value
        this.setState(newState)
    }

    changeFoodValue = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.food = e.currentTarget.value
        this.setState(newState)
    }

    changePoliticsValue = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.politics = e.currentTarget.value
        this.setState(newState)
    }

    changeDescriptionValue = e => {
        let newState = {...this.state}
        newState.information.organisationDescription = e.currentTarget.value
        this.setState(newState)
    }

    changeItems = e => {
        let newState = {...this.state}
        newState.information.organisationFocus.items = e.currentTarget.value
        this.setState(newState)
    }

    handleTypeInput = e => {
        let newState = {...this.state}
        newState.information.organisationType = e.currentTarget.value
        this.setState(newState)
    }

    handleTermsInput = e => {
        let newState = {...this.state}
        newState.information.organisationTerms = e.currentTarget.value
        this.setState(newState)
    }

    handleCreateProfile = () => {
        this.props.dispatch(createProfileAction(this.state.information))
    }

    render() {

        return (
            <div>
                <p className='ngo-choose'>Please choose what fits you best:</p>
            <div>
            <input className='ngo-radio' value='Non-profit organisation' type="radio" id="non-profit" name="radioA" onClick={this.handleTypeInput} /> <label className='ngo-radio-label' for="non-profit">Non-profit <br />organisation</label>
            <input className='project-radio' value='Project' type="radio" id="project" name="radioA" onClick={this.handleTypeInput} /> <label className='project-radio-label' for="project">Project</label>
            </div>
                <form className='name-org-form'>
                    <p className="name-org">Name</p>
                    <input className='name-org-input' id='name-org' value={this.state.organisationName} onChange={e => this.setState({organisationName: e.currentTarget.value})} type='text' name='name' required/>
                </form>
                <form className='location-org-form'>
                    <p className="location-org">Where are you located?</p><img className='location-logo' src={location_logo} alt=''/>
                    <input className='location-org-input' id='location-org' value={this.state.organisationLocation} onChange={e => this.setState({organisationLocation: e.currentTarget.value})} type='text' name='location' required/>
                </form>
                <div>
                    <p className="ngo-pro-desc">Description</p>
                    <p className="ngo-pro-upload"><b>Please upload a verification document:</b><div className='doc-small-font'>(this is to secure the safety of individuals who will collaborate with you)</div></p>
                    <button className='btn-ngo-pro-upload'>Upload document</button>
                    <button className='btn-fill-out' onClick={this.toggleDescriptionPopup.bind(this)}>Fill out</button>
                    <p className="ngo-pro-focus"><b>What kind of focus does your organisation or project have? </b><br /><div className='doc-small-font'>(please add keywords)</div></p>
                    <button className='btn-fill-out-focus' onClick={this.toggleFocusPopup.bind(this)}>Fill out</button>
                    <p className="org-contact-info">Contact information</p>
                    <button className='btn-org-contact-info' onClick={this.toggleContactPopup.bind(this)}>Fill out</button>
                    <p className='ngo-pro-connect'>Would you like to connect to Facebook page, Instagram, Linkedin?</p>
                    <button className='btn-org-profile-1'>Add profile</button>
                    <button className='btn-org-profile-2'>Add profile</button>
                    <button className='btn-org-profile-3'>Add profile</button>
                    <p className='ngo-pro-picture'>Please add a profile picture:</p>
                    <img className='image_upload' src={upload_image} alt=''/>
                    <p className='ngo-pro-accept'>Do you accept the terms and conditions of our platform?</p>
                    <div>
                    <input className='ngo-terms-radio' value='Yes' type="radio" id="non-profit" name="radioA" onClick={this.handleTermsInput} /> <label className='ngo-terms-radio-label' for="non-profit">yes</label>
                    <input className='project-terms-radio' value='No' type="radio" id="project" name="radioA" onClick={this.handleTermsInput} /> <label className='project-terms-radio-label' for="project">no</label>
                    </div>
                    <button className='btn-org-create-profile' onClick={this.handleCreateProfile}>Create profile</button>
                </div>
                <div className='desc-popup-screen'>
                    {this.state.showDescriptionPopup ?
                    <DescriptionPopup
                            closePopup={this.toggleDescriptionPopup.bind(this)}
                            value_Description={this.state.information.organisationDescription}
                            onChange_Description={this.changeDescriptionValue} />  : null  }
                </div>
                <div className='focus-popup-screen'>
                    {this.state.showFocusPopup ?
                    <FocusPopup
                            closePopup={this.toggleFocusPopup.bind(this)}
                            value_Social={this.state.information.organisationFocus.social}
                            onChange_Social={this.changeSocialValue}
                            value_Languages={this.state.information.organisationFocus.languages}
                            onChange_Languages={this.changeLanguagesValue}
                            value_Sports={this.state.information.organisationFocus.sports}
                            onChange_Sports={this.changeSportsValue}
                            value_ArtsCulture={this.state.information.organisationFocus.artsCulture}
                            onChange_ArtsCulture={this.changeArtsCultureValue}
                            value_Coaching={this.state.information.organisationFocus.coaching}
                            onChange_Coaching={this.changeCoachingValue}
                            value_Food={this.state.information.organisationFocus.food}
                            onChange_Food={this.changeFoodValue}
                            value_Politics={this.state.information.organisationFocus.politics}
                            onChange_Politics={this.changePoliticsValue}
                            value_Items={this.state.information.organisationFocus.items}
                            onChange_Items={this.changeItemsValue} />  : null  }
                </div>
                <div className='contact-popup-screen'>
                    {this.state.showContactPopup ?
                    <ContactPopup
                            closePopup={this.toggleContactPopup.bind(this)} />  : null  }
                </div>
            </div>
        )
    }
}

export default connect()(Feed)


