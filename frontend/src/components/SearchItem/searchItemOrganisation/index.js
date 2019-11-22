import React, {Component} from 'react';
import SearchInterests from '../SearchInterests';
import default_picture from '../../../assets/default_picture.svg';
import '../style.css';
import {Link} from "react-router-dom";

class SearchItemOrganisation extends Component {
    render() {
        const organisation = this.props.result;
        return (
            <>
                <div className='search-result-item'>
                    <div className='search-result-picture'>
                        <Link to={`organisations/${organisation.id}/`}>
                            <img
                                className='search-result-picture-size'
                                alt=''
                                src={organisation.profile_pic || default_picture}
                            />
                        </Link>

                    </div>
                    <div className='search-result-entity'>
                        <Link to={`organisations/${organisation.id}/`}>
                            {organisation.name}
                        </Link>


                        {/*ADD link to organisation*/}
                    </div>
                    <div className='search-result-description'>
                        {organisation.location}
                        <br/>
                        <SearchInterests
                            interests={this.props.interests}
                            focus={organisation.focus}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default SearchItemOrganisation;
