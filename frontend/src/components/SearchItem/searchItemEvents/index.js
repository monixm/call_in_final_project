import React, {Component} from 'react';
import default_picture from "../../../assets/default_picture.svg";
import '../style.css';

class SearchItemEvent extends Component {
    render() {
       const event = this.props.result;
        return <>
            <div className="search-result-item">
                <div className="search-result-picture">
                    <img className="search-result-picture-size" src={event.picture || default_picture} alt=''/>
                </div>
                <div className="search-result-entity">
                    {event.title}
                    {/*ADD link to event*/}
                </div>
                <div className="search-result-description">
                    {event.location}<br />{new Date(event.start_datetime).toLocaleString()}
                </div>
            </div>
        </>
    }
}
export default SearchItemEvent;