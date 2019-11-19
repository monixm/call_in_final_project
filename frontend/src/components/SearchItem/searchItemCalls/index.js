import React, {Component} from 'react';
import default_picture from '../../../assets/default_picture.svg';
import '../style.css';

class SearchItemCall extends Component {

    render() {
        const call = this.props.result;
        return <>
            <div className="search-result-item">
                <div className="search-result-picture">
                    <img className="search-result-picture-size" src={call.call_picture || default_picture} alt=''/>
                </div>
                <div className="search-result-entity">
                    {call.title}
                    {/*ADD link to call*/}
                </div>
                <div className="search-result-description">
                    {call.location}<br />{new Date(call.start_datetime).toLocaleString()}
                </div>
            </div>
        </>
    }
}

export default SearchItemCall;

