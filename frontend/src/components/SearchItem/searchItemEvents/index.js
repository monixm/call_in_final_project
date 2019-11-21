import React, {Component} from 'react';
import default_picture from '../../../assets/default_picture.svg';
import '../style.css';
import {Link} from "react-router-dom";

class SearchItemEvent extends Component {
    render() {
        const event = this.props.result;
        return (
            <>
                <div className='search-result-item'>
                    <div className='search-result-picture'>
                        <Link to={`event/${event.id}`}>
                            <img
                                className='search-result-picture-size'
                                alt=''
                                src={event.picture || default_picture}
                            />
                        </Link>

                    </div>
                    <div className='search-result-entity'>
                        <Link to={`event/${event.id}`}>
                            {event.title}
                        </Link>

                        {/*ADD link to event*/}
                    </div>
                    <div className='search-result-description'>
                        {event.location}
                        <br/>
                        {new Date(event.start_datetime).toLocaleString()}
                    </div>
                </div>
            </>
        );
    }
}

export default SearchItemEvent;
