import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Header from '../Header';
import UserCircleVolunteerProf from '../../assets/user_circle_volunteer_page.svg';
import EditableButtons from '../VolunteerProfile/ButtonsComponent/editableButtons';
import { getOrganisationMeAction } from '../../store/actions/getOrganisationMeAction';

class LoggedInOrganisation extends Component {

  async componentDidMount() {
    this.props.dispatch(getOrganisationMeAction());
  }

  render() {
    const organisation = "**ORGANISATION PROFILE**";

    return (
      <>
        <Header />
        {this.props && (
          <div className='volunteer-profile'>
            <div className='volunteer-intro'>
              <div className='imgs'>
                {this.props.profile[organisation] && this.props.profile[organisation].organisation.profile_pic !== null ? (
                  <img
                    src={this.props.profile[organisation] && this.props.profile[organisation].organisation.profile_pic}
                    className='volunteer-profile-pic'
                    alt=''
                  />
                ) : (
                  <img alt='' src={UserCircleVolunteerProf} />
                )}
              </div>
              <h4 className='volunteer-name'>
                {this.props.profile[organisation] && this.props.profile[organisation].organisation.name}
              </h4>
              <p className='volunteer-profile-type'>
                {this.props.profile[organisation] && this.props.profile[organisation].organisation.location}
              </p>
            </div>
            <EditableButtons />
            <div className='color-break'></div>
            {this.props.profile[organisation] && this.props.profile[organisation].organisation.focus && (
              <>
                <h4>
                  {this.props.profile[organisation] && this.props.profile[organisation].organisation.name}'s interests in projects and events
                </h4>
                <div className='volunteer-interests'>
                  <div className='interests-left-side'>
                    <div className='interests-box'>
                      <h6>Social</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.social}</p>
                    </div>
                    <div className='interests-box'>
                      <h6>Languages</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.languages}</p>
                    </div>
                    <div className='interests-box'>
                      <h6>Sports</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.sports}</p>
                    </div>
                    <div className='interests-box'>
                      <h6>Arts & culture</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.arts_culture}</p>
                    </div>
                  </div>
                  <div className='interests-right-side'>
                    <div className='interests-box'>
                      <h6>Job coaching</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.coaching}</p>
                    </div>
                    <div className='interests-box'>
                      <h6>Food</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.food}</p>
                    </div>
                    <div className='interests-box'>
                      <h6>Politics</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.politics}</p>
                    </div>
                    <div className='interests-box'>
                      <h6>Items</h6>
                      <p>{this.props.profile[organisation] && this.props.profile[organisation].organisation.focus.items}</p>
                    </div>
                  </div>
                </div>
                {/* <div className='color-break'></div> */}
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.organisationMeReducer.profile
  };
};

export default connect(mapStateToProps)(LoggedInOrganisation);
