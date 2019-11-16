import React, { Component } from "react";
import "./style.css";
import NotGoing from "../../assets/not_going.svg";
import NotStarred from "../../assets/not_starred.svg";
import UserCircle from "../../assets/user_circle.svg";
import Ellipse from "../../assets/ellipse.svg";
import LocationLogo from "../../assets/location_logo.svg";

class Event extends Component {
  render() {
    const call = this.props.call;
    return (
      <>
        <div>
          <div className="event">
            <div className="event-header">
              <div className="event-header-left">
                <img id="ellipse" src={call.picture} />
                <div className="middleText">
                  <p id="organiser">{call.organisation.name}</p>
                  <p>{call.created}</p>
                </div>
              </div>
              <div className="event-header-right">
                <img src={LocationLogo} />
                <p>Distance away from User</p>
              </div>
            </div>
            <div className="event-body">
              <div className="event-body-top">
                <div className="event-body-left">
                  <p id="date">{call.start_datetime}</p>
                  <p id="title">{call.title}</p>
                  <p id="place">{call.location}</p>
                  <p id="description">{call.description}</p>
                </div>
                <div className="event-body-right">
                  <img src={NotStarred} />
                  <img src={NotGoing} />
                </div>
              </div>
              <div className="event-body-bottom">
                <div className="icons"></div>
                <div className="peopleGoing">
                  <div className="people">
                    <img id="pic1" src={UserCircle} />
                    <img id="pic2" src={Ellipse} />
                    <img id="pic3" src={Ellipse} />
                  </div>
                  <p>{call.participants.length} people are going</p>
                </div>
              </div>
            </div>
          </div>
          <div className="color-break"></div>
        </div>
      </>
    );
  }
}

export default Event;
