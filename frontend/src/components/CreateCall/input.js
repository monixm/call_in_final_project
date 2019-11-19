import React from 'react';
import './index.css';
import option from "../../assets/option-rect.svg";
import uuid from "uuid";


class Input extends React.Component {
  render() {
    return (
              <div className='call-field-input-map' key={uuid.v4()}>
                    <div>
                    <img  className='call-input-logo' src={option} alt=''/>
                    <input className="call-field-input" type="text" placeholder='Type field option'/>
                    </div>
              </div>
        );
    }
}

export default Input;