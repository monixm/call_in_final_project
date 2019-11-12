import React from 'react';  
import './index.css';  

class ContactPopup extends React.Component {  
  render() {  
    return (  
        <div className='contact-popup'>  
        <div className='contact-popup-inner'> 
            <p className='org-contact-title'>Please add your contact information</p>
            <p className='org-contact-email'>Email</p>
            <textarea className="org-contact-email-textarea" value={this.props.value_Social} 
                onChange={this.props.onChange_Social}/>
            <p className='org-contact-website'>Website</p>
            <textarea className="org-contact-website-textarea" value={this.props.value_Languages} 
                onChange={this.props.onChange_Languages}/>
            <p className='org-contact-phone'>Phone</p>
            <textarea className="org-contact-phone-textarea" value={this.props.value_Sports} 
                onChange={this.props.onChange_Sports}/>
            <button className='btn-contact-save' onClick={this.props.closePopup}>Done</button> 
        </div>  
        </div>  
    );  
    }  
}  

export default ContactPopup;