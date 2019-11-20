import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css';
import NotStarred from '../../assets/not_starred.svg';
import Share from '../../assets/share.svg';
import Location from '../../assets/location_logo.svg';
import PhotoPlaceholder from '../../assets/photo-placeholder.svg';
import Moment from 'react-moment';
import { joinCallOptionAction } from '../../store/actions/joinCallOptionAction';
import { getFeedVolunteerAction } from '../../store/actions/getFeedVolunteerAction';
import { Link } from 'react-router-dom';


class Call extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call_option_id: ''
    };
  }



  handleSelection = (event) => {
    console.log(event.currentTarget.value)
    this.setState({
      call_option_id: event.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    // e.target.style.background = '#4497BD';
    this.props.dispatch(joinCallOptionAction(this.state.call_option_id))
      .then(data => {
        if (data) {
          this.props.dispatch(getFeedVolunteerAction())
          console.log('this.props', this.props)
        }
      })
  };


  render() {
    const call = this.props.call;
    const call_options = this.props.call.call_options
    // console.log('call', call)
    // console.log('call_option', call_options)

    const volunteer_id = () => Storage.getItem('volunter_id')
    console.log('dddd', call_options)

    return (
      <>
        <div>
          <div className='feedVolunteer-call'>
            <div className='feedVolunteer-organisation'>
              <div className='feedVolunteer-organisation-name'>
                <img
                  src={call.organisation.profile_pic}
                  className='org-photo'
                  alt=''
                />
                <div>
                    <Link to={`/organisations/${this.props.call.organisation.id}/`}>
                  <p className='feedVolunteer-orgname'>
                    {call.organisation.name}
                  </p>
                    </Link>
                  <p className='feedVolunteer-p'>
                    <Moment fromNow='h'>{call.created}</Moment>
                  </p>
                </div>
              </div>
              <div className='feedVolunteer-organisation-location'>
                <img src={Location} alt='' />
                <p className='feedVolunteer-location'>{call.location}</p>
              </div>
            </div>
            <div className='feedVolunteer-call-box'>
              <p className='feedVolunteer-title'>
                <strong>Call For Volunteers: {call.title}</strong>
              </p>
              <div className='feedVolunteer-image'>
                {call.call_picture !== null ? (
                  <img
                    src={call.call_picture}
                    className='feedVolunteer-call-img'
                    alt=''
                  />
                ) : (
                  <img alt='' src={PhotoPlaceholder} />
                )}
              </div>
              <div className='feedVolunteer-call-main'>
                <div className='feedVolunteer-right-side'>
                  <p id='date'>
                    <Moment format='DD MMM YYYY'>{call.start_datetime}</Moment>
                  </p>
                  <p className='feedVolunteer-call-desc'>{call.description}</p>
                  <div className='feedVolunteer-call-options'>
                    {call_options.map(option => {
                      return (
                        <>
                          <div className='feedVolunteer-radio-button'>
                            {/* <input
                              type='radio'
                              className='hidden'
                              value={option.id}
                              checked={true}
                              onChange={this.handleSelection}
                            /> */}
                            <button id='volunteer_button' onClick={this.handleSubmit}>Volunteer</button>
                            <p>{option.title}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className='feedVolunteer-side-buttons'>
                  <img
                    src={NotStarred}
                    className='feedVolunteer-not-starred-button'
                    alt=''
                  ></img>
                  <img
                    src={Share}
                    className='feedVolunteer-share-button'
                    alt=''
                  ></img>
                </div>

                {/* <div className="feedVolunteer-bottom-buttons">
                  <img
                    src={Directmsg}
                    className="feedVolunteer-volunteer-button"
                    alt=""
                  />
                  <img
                    src={PublicQuestion}
                    className="feedVolunteer-question-button"
                    alt=""
                  />
                </div> */}
              </div>
              <div className='feedVolunteer-confirm-button'>
                {/* {call_options.map(item => {
                  return item.volunteers.includes(volunteer_id)
                    ? 
                    <button>Confirmed!</button>
                     : <button onClick={this.handleSubmit}>Volunteer</button>
                  })
                })} */}
                {/* {this.props.call.call_options.maps(call_option =>
                  call_option.participants.maps(participant =>
                    participant
                    )
                  )} */}
                {/* <button onClick={this.handleSubmit}>
                  {this.props.call.participants ? ' Confirmed!' : 'Volunteer'}
                </button> */}
              </div>
            </div>
          </div>
          <div className='color-break'></div>
        </div>
      </>
    );
  }
}

export default connect()(Call);
