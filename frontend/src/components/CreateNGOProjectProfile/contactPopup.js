import React from 'react';  
import './index.css';  

class ContactPopup extends React.Component {  
  render() {  
    return (  
        <div className='contact-popup'>  
        <div className='contact-popup-inner'> 
            <p className='org-contact-title'>Please add your contact information</p>
            <p className='org-contact-website'>Website</p>
            <textarea className="org-contact-website-textarea" value={this.props.value_Website}
                onChange={this.props.onChange_Website}/>
            <p className='org-contact-phone'>Phone</p>
            <textarea className="org-contact-phone-textarea" value={this.props.value_Phone}
                onChange={this.props.onChange_Phone}/>
            <button className='btn-contact-save' onClick={this.props.closePopup}>Done</button> 
        </div>  
        </div>  
    );  
    }  
}  

export default ContactPopup;