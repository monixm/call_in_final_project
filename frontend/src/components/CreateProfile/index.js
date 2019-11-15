import React, {Component} from 'react';
import {connect} from 'react-redux';
import location_icon from '../../assets/location_icon.svg';
import './styles.css';
import search_orange_button from "../../assets/search.svg";
import upload_image from '../../assets/upload_image.svg';

class CreateProfile extends Component {
    render() {
        return (
            <div className='main'>
                <div className='title'>
                    <p>Create your profile</p>
                </div>
                <div className='first_data'>
                    <div className='first_left'>
                        <p className='labels'>Name</p>
                    </div>
                    <div className='first_right'>
                        <input type='text' className='input_field' placeholder=''/>
                    </div>
                </div>
                <div className='second_data'>
                    <div className='second_left'>
                        <p className='labels'>Last Name</p>
                    </div>
                    <div className='second_right'>
                        <input type='text' className='input_field' placeholder=''/>
                    </div>
                </div>
                <div className='third_data'>
                    <div className='third_left'>
                        <p className='labels'>Where are you located?</p>
                        <p className='lower_font'>(Call In notifies you needs depending on your location)</p>
                    </div>
                    <div className='third_center'>
                        <img src={location_icon} className='location_icon'/>
                    </div>
                    <div className='third_right'>
                        <input type='text' className='input_field' placeholder=''/>
                    </div>
                </div>
                <div className='fourth_data'>
                    <div className='fourth_left'>
                        <p className='labels'>What can you offer?</p>
                        <p className='lower_font'>(your interest, skills, professional services, or items to offer-please add keywords)</p>
                    </div>
                    <div className='fourth_right'>
                        <button className='button-decoration'>Edit keywords</button>
                        <p className='lower_font_button'> e.g. blankets, lawyer, French, etc</p>
                    </div>
                </div>
                <div className='fifth_data'>
                    <div className='fifth_left'>
                        <p className='labels'>Set up our first meeting with us...</p>
                        <p className='lower_font'>(We would love to meet you in person to talk about pour vision and expectations for the Call In community)</p>
                    </div>
                    <div className='fifth_right'>
                         <input className='input_radio' type='radio'/>
                         <p className='lower_font'>message sent!</p>
                    </div>
                </div>
                <div className='sixth_data'>
                    <div className='sixth_left'>
                         <p className='labels'>Set up a meeting later</p>
                    </div>
                    <div className='sixth_right'>
                         <input className='input_radio' type='radio'/>
                    </div>
                </div>
                <div className='seventh_data'>
                    <div className='seventh_left'>
                        <p className='labels'>Would you like to connect to Facebook page, Instagram or LinkedIn </p>
                    </div>
                    <div className='seventh_right'>
                        <button className='button-decoration'>Facebook</button>
                        <button className='button-decoration'>Instagram</button>
                        <button className='button-decoration'>LinkedIn</button>
                    </div>
                </div>
                <div className='eighth_data'>
                    <div className='eighth_left'>
                        <p className='labels'>Please add a profile picture: </p>
                    </div>
                    <div className='eighth_right'>
                        <img src={upload_image} className='camera'/>
                    </div>
                </div>
                <div className='ninth_data'>
                    <div className='ninth_middle'>
                        <button className='ninth_middle'>Create Profile</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default connect()(CreateProfile);