import React from 'react';
import './index.css';
import option from "../../assets/option-rect.svg";
import uuid from "uuid";


class Input extends React.Component {
            constructor(props){
        super(props);
        this.state = {
        }
    }

  render() {
    return (
              <div className='call-field-input-map' key={uuid.v4()}>
                    <div className='call-field-container'>
                    <img  src={option} alt=''/>
                    <input type={this.props.input} value={this.props.valueField}
                        onChange={this.props.onChangeInput} placeholder='Type field option'/>
                    </div>
              </div>
        );
    }
}

export default Input;