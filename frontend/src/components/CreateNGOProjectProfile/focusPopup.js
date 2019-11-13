import React from 'react';  
import './index.css';  

class FocusPopup extends React.Component {  
  render() {  
return (  
        <div className='focus-popup'>  
        <div className='focus-popup-inner'> 
            <p className='org-focus-title'>What kind of focus does your organisation or project have?</p>
            <p className='org-focus-social'>Social</p>
            <textarea className="org-focus-social-textarea" value={this.props.value_Social}
                onChange={this.props.onChange_Social} placeholder='What social activities does your organisation do?'/>
            <p className='org-focus-languages'>Languages</p>
            <textarea className="org-focus-languages-textarea" value={this.props.value_Languages} 
                onChange={this.props.onChange_Languages} placeholder='Which languages are required?'/>
            <p className='org-focus-sports'>Sports</p>
            <textarea className="org-focus-sports-textarea" value={this.props.value_Sports} 
                onChange={this.props.onChange_Sports} placeholder='Do you do sports activities?'/>
            <p className='org-focus-arts'>Arts &amp; culture</p>
            <textarea className="org-focus-arts-textarea" value={this.props.value_ArtsCulture} 
                onChange={this.props.onChange_ArtsCulture} placeholder='Do you have cultural events or workshops?'/>
            <p className='org-focus-coaching'>Coaching</p>
            <textarea className="org-focus-coaching-textarea" value={this.props.value_Coaching} 
                onChange={this.props.onChange_Coaching} placeholder='What kind of coachings are you offering?'/>
            <p className='org-focus-food'>Food</p>
            <textarea className="org-focus-food-textarea" value={this.props.value_Food} 
                onChange={this.props.onChange_Food} placeholder='Do you need Volunteers to cook for your events?'/>
            <p className='org-focus-politics'>Politics</p>
            <textarea className="org-focus-politics-textarea" value={this.props.value_Politics} 
                onChange={this.props.onChange_Politics} placeholder='In which political field is your organisation situated? What activities do you do?'/>
            <p className='org-focus-items'>Items</p>
            <textarea className="org-focus-items-textarea" value={this.props.value_Items} 
                onChange={this.props.onChange_Items} placeholder='Which items do you regularily need?'/>
            <button className='btn-desc-save' onClick={this.props.closePopup}>Done</button> 
        </div>  
        </div>  
    );  
    }  
}  

export default FocusPopup;