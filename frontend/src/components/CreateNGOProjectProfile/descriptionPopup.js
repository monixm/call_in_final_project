import React from 'react';  
import './index.css';  

class DescriptionPopup extends React.Component {  
  render() {  
return (  
      <div className='desc-popup'>  
      <div className='desc-popup-inner'>  
        <p className='org-desc-txt'>Please provide more information about your organisation/ your project</p>
        <textarea className="org-desc-textarea" value={this.props.value_Description}
            onChange={this.props.onChange_Description}/>
        <button className='btn-desc-save' onClick={this.props.closePopup}>Save</button>  
      </div>  
      </div>  
    );  
  }  
}  

export default DescriptionPopup;