import React, {Component} from 'react';
import volunteer_default_profile from "../../../assets/volunteer_default_profile.svg";
import {Link} from "react-router-dom";
import SearchInterests from "../SearchInterests";
import '../style.css';

class SearchItemVolunteer extends Component {
    render() {
       const volunteer = this.props.result;
        return <>
            <div className="search-result-item">
                <div className="search-result-picture">
                    <Link to={`volunteer/${volunteer.id}`}>
                        <img className="search-result-picture-size" alt='' src={volunteer.profile_picture || volunteer_default_profile}/>
                    </Link>
                </div>
                <div className="search-result-entity">
                    <Link to={`volunteer/${volunteer.id}`}>
                        {volunteer.first_name} {volunteer.last_name}
                    </Link>
                </div>
                <div className="search-result-description">
                    {volunteer.location}<br /> 
                    <SearchInterests interests={this.props.interests} focus={volunteer.interests} />
                </div>
            </div>
        </>
    }
}
export default SearchItemVolunteer;