import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Header from '../Header';
import VolunteerInterests from '../VolunteerInterests';
import UserCircleVolunteerProf from '../../assets/user_circle_volunteer_page.svg';
import { getVolunteerProfileAction } from '../../store/actions/getVolunteerByIdAction';
import PublicProfileButtons from './ButtonsComponent/PublicProfileButtons';
import PrivateProfile from './PrivateProfile';
import FollowButton from './ButtonsComponent/FollowButton';

class VolunteerProfile extends Component {
  async componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.dispatch(getVolunteerProfileAction(userId));
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <Header />
        {user && (
          <div className='volunteer-profile'>
            <div className='volunteer-intro'>
              <div className='imgs'>
                {user.profile_picture !== null ? (
                  <img
                    src={user.profile_picture}
                    className='volunteer-profile-pic'
                    alt=''
                  />
                ) : (
                  <img alt='' src={UserCircleVolunteerProf} />
                )}
              </div>
              <h4 className='volunteer-name'>
                {user.first_name} {user.last_name}
              </h4>
              <p className='volunteer-profile-type'>{user.location}</p>
            </div>
            {user.privacy_setting !== 'private' ? (
              <PublicProfileButtons />
            ) : (
              <FollowButton />
            )}
            <div className='color-break'></div>
            {user.privacy_setting !== 'private' ? (
              <VolunteerInterests />
            ) : (
              <PrivateProfile />
            )}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.volunteerProfileReducer.volunteer
  };
};

export default connect(mapStateToProps)(VolunteerProfile);
