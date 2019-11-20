import { connect } from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";

const NewUser = props => {

  return (
    <div>
      <h1>New user page</h1>
      <div>
          <button onClick={()=>props.history.push('/create-ngo-project-profile')} >I am an organization</button>
      </div>

      <div>
          <button onClick={()=>props.history.push('/volunteer/create/new')} >I am a volunteer</button>
      </div>
    </div>
  );
};

export default withRouter(connect()(NewUser));
