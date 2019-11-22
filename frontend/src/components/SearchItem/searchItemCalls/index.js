import React, {Component} from 'react';
import default_picture from '../../../assets/default_picture.svg';
import '../style.css';
import {Link} from "react-router-dom";

class SearchItemCall extends Component {
    render() {
        const call = this.props.result;
        return (
            <>
                <div className='search-result-item'>
                    <div className='search-result-picture'>
                        <Link to={`call/${call.id}`}>
                            <img
                                className='search-result-picture-size'
                                alt=''
                                src={call.call_picture || default_picture}
                            />
                        </Link>

                    </div>
                    <div className='search-result-entity'>
                        <Link to={`call/${call.id}`}>
                            {call.title}
                        </Link>

                        {/*ADD link to call*/}
                    </div>
                    <div className='search-result-description'>
                        {call.location}
                        <br/>
                        {new Date(call.start_datetime).toLocaleString()}
                    </div>
                </div>
            </>
        );
    }
}

export default SearchItemCall;
