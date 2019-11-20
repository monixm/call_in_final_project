import React, { Component } from 'react';
import { connect } from 'react-redux';
import location_icon from '../../assets/location_icon.svg';
import './styles.css';
import upload_image from '../../assets/upload_image.svg';
import Header from '../Header';
import { editVolunteerProfileAction } from '../../store/actions/editVolunteerProfileAction';
import VolunteerInterestsPopup from './volunteerInterestsPopup';
import VolunteerNetworkingPopup from './volunteerNetworkingPopup';
import VolunteerPrivacySettingPopup from './volunteerPrivacyPopup';
import VolunteerUploadPhotoPopup from './volunteerUploadPhotoPopup';
import { withRouter } from 'react-router-dom';

class EditVolunteerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      location: '',
      volunteerInterest: {
        social: '',
        sports: '',
        coaching: '',
        politics: '',
        languages: '',
        arts_culture: '',
        food: '',
        items: ''
      },
      meeting: '',
      privacySettings: '',
      profilePicture: undefined,
      instagram: '',
      linkedin: '',
      facebook: '',
      showFocusPopup: false,
      showNetworkingPopup: false
    };
  }

  toggleUploadPhotoPopup = () => {
    const newState = { ...this.state };
    newState.showUploadPhoto = !this.state.showUploadPhoto;
    this.setState(newState);
  };
  togglePrivacySettingsPopup = () => {
    const newState = { ...this.state };
    newState.showPrivacySettingsPopup = !this.state.showPrivacySettingsPopup;
    this.setState(newState);
  };
  toggleNetworkingPopupLinkedin = () => {
    const newState = { ...this.state };
    newState.showNetworkingPopupLinkedin = !this.state
      .showNetworkingPopupLinkedin;
    this.setState(newState);
  };
  toggleNetworkingPopupInstagram = () => {
    const newState = { ...this.state };
    newState.showNetworkingPopupInstagram = !this.state
      .showNetworkingPopupInstagram;
    this.setState(newState);
  };
  toggleNetworkingPopup = () => {
    const newState = { ...this.state };
    newState.showNetworkingPopup = !this.state.showNetworkingPopup;
    this.setState(newState);
  };
  toggleMessagePopup = () => {
    const newState = { ...this.state };
    newState.showMessagePopup = !this.state.showMessagePopup;
    this.setState(newState);
  };
  toggleFocusPopup = () => {
    const newState = { ...this.state };
    newState.showFocusPopup = !this.state.showFocusPopup;
    this.setState(newState);
  };

  handleTextInput = (event, propertyName) => {
    event.preventDefault();
    const newState = { ...this.state };
    newState[propertyName] = event.target.value;
    this.setState(newState);
  };
  handleInterestInput = (event, propertyName) => {
    event.preventDefault();
    const newState = { ...this.state };
    const interests = { ...this.state.volunteerInterest };
    interests[propertyName] = event.target.value;
    newState.volunteerInterest = interests;
    this.setState(newState);
  };
  handleClick = async () => {
    await editVolunteerProfileAction(this.state);
    this.props.history.push('feed/me');
  };

  render() {
    return (
      <div className='main'>
        <Header />
        <div className='edit-title'>
          <p>Edit your profile</p>
        </div>
        <div className='first_data'>
          <div className='first_left'>
            <p className='labels'>Email</p>
          </div>
          <div className='first_right'>
            <input
              type='text'
              className='input_field'
              placeholder=''
              onChange={event => this.handleTextInput(event, 'email')}
              value={this.state.email}
            />
          </div>
        </div>
        <div className='first_data'>
          <div className='first_left'>
            <p className='labels'>Name</p>
          </div>
          <div className='first_right'>
            <input
              type='text'
              className='input_field'
              placeholder=''
              onChange={event => this.handleTextInput(event, 'name')}
              value={this.state.name}
            />
          </div>
        </div>
        <div className='second_data'>
          <div className='second_left'>
            <p className='labels'>Last Name</p>
          </div>
          <div className='second_right'>
            <input
              type='text'
              className='input_field'
              placeholder=''
              onChange={event => this.handleTextInput(event, 'lastName')}
              value={this.state.lastName}
            />
          </div>
        </div>

        <div className='second_data_2'>
          <div className='second_data_2_left'>
            <p className='labels'>Password</p>
          </div>
          <div className='second_data_2_right'>
            <input
              type='password'
              className='input_field'
              placeholder=''
              onChange={event => this.handleTextInput(event, 'password')}
              value={this.state.password}
            />
          </div>
        </div>
        <div className='second_data_3'>
          <div className='second_data_3_left'>
            <p className='labels'>Confirm your password</p>
          </div>
          <div className='second_data_3_right'>
            <input
              type='password'
              className='input_field'
              placeholder=''
              onChange={event => this.handleTextInput(event, 'passwordConfirm')}
              value={this.state.passwordConfirm}
            />
          </div>
        </div>
        <div className='third_data'>
          <div className='third_left'>
            <p className='labels'>Where are you located?</p>
            <p className='lower_font'>
              (Call In notifies you needs depending on your location)
            </p>
          </div>
          <div className='third_center'>
            <img src={location_icon} className='location_icon' alt='' />
          </div>
          <div className='third_right'>
            <input
              type='text'
              className='input_field'
              placeholder=''
              onChange={event => this.handleTextInput(event, 'location')}
              value={this.state.location}
            />
          </div>
        </div>
        <div className='fourth_data'>
          <div className='fourth_left'>
            <p className='labels'>What can you offer?</p>
            <p className='lower_font'>
              (your interest, skills, professional services, or items to
              offer-please add keywords)
            </p>
          </div>

          <div className='fourth_right'>
            <button
              className='button-decoration'
              onClick={() => this.toggleFocusPopup()}
            >
              Edit keywords
            </button>
            <p className='lower_font_button'>
              {' '}
              e.g. blankets, lawyer, French, etc
            </p>
          </div>

          {this.state.showFocusPopup ? (
            <VolunteerInterestsPopup
              closePopup={() => this.toggleFocusPopup()}
              interests={this.state.volunteerInterest}
              changeInterest={(event, interest) =>
                this.handleInterestInput(event, interest)
              }
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className='seventh_data'>
          <div className='seventh_left'>
            <p className='labels'>
              Would you like to connect to Facebook page, Instagram or LinkedIn{' '}
            </p>
          </div>
          <div className='seventh_right'>
            <button
              className='button-decoration'
              onClick={() => this.toggleNetworkingPopup()}
            >
              Facebook
            </button>
            <button
              className='button-decoration'
              onClick={() => this.toggleNetworkingPopupInstagram()}
            >
              Instagram
            </button>
            <button
              className='button-decoration'
              onClick={() => this.toggleNetworkingPopupLinkedin()}
            >
              LinkedIn
            </button>
          </div>
          {this.state.showNetworkingPopup ? (
            <VolunteerNetworkingPopup
              label='Facebook'
              networkValue={this.state.facebook}
              urlChange={event => this.handleTextInput(event, 'facebook')}
              closePopup={() => this.toggleNetworkingPopup()}
            />
          ) : (
            <div></div>
          )}
          {this.state.showNetworkingPopupInstagram ? (
            <VolunteerNetworkingPopup
              label='Instagram'
              networkValue={this.state.instagram}
              urlChange={event => this.handleTextInput(event, 'instagram')}
              closePopup={() => this.toggleNetworkingPopupInstagram()}
            />
          ) : (
            <div></div>
          )}
          {this.state.showNetworkingPopupLinkedin ? (
            <VolunteerNetworkingPopup
              label='Linkedin'
              networkValue={this.state.linkedin}
              urlChange={event => this.handleTextInput(event, 'linkedin')}
              closePopup={() => this.toggleNetworkingPopupLinkedin()}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className='eighth_data'>
          <div className='eighth_left'>
            <p className='labels'>Privacy Settings </p>
          </div>
          <div className='eighth_right'>
            <button
              className='button-decoration'
              onClick={() => this.togglePrivacySettingsPopup()}
            >
              Privacy Settings
            </button>
          </div>
          {this.state.showPrivacySettingsPopup ? (
            <VolunteerPrivacySettingPopup
              closePopup={() => this.togglePrivacySettingsPopup()}
              privacySettings={this.state.privacySettings}
              handlePrivacyInput={event =>
                this.handleTextInput(event, 'privacySettings')
              }
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className='eighth_data'>
          <div className='eighth_left'>
            <p className='labels'>Please add a profile picture: </p>
          </div>
          <div className='eighth_right'>
            <img
              alt=''
              onClick={() => this.toggleUploadPhotoPopup()}
              src={upload_image}
              className='camera'
            />
          </div>
          {this.state.showUploadPhoto ? (
            <VolunteerUploadPhotoPopup
              closePopup={() => this.toggleUploadPhotoPopup()}
            />
          ) : (
            <div></div>
          )}
        </div>

        <div className='ninth_data'>
          <div className='ninth_middle'>
            <button className='ninth_middle' onClick={this.handleClick}>
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(EditVolunteerProfile));
