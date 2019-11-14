import React, { Component } from "react";
import { connect } from "react-redux";
import Share from "../../../assets/share.svg";
import DirectMsg from "../../../assets/direct_message.svg";

class OutsideProfileButtons extends Component {
  render() {
    return (
      <div>
        <img src={Share} className="volunteer-share-button" alt="" />
        <img src={DirectMsg} className="volunteer-directmsg-button" alt="" />
      </div>
    );
  }
}

export default connect()(OutsideProfileButtons);
