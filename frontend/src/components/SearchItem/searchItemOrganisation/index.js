import React, { Component } from 'react';
import SearchInterests from '../SearchInterests';
import default_picture from '../../../assets/default_picture.svg';
import '../style.css';

class SearchItemOrganisation extends Component {
  render() {
    const organisation = this.props.result;
    return (
      <>
        <div className='search-result-item'>
          <div className='search-result-picture'>
            <img
              className='search-result-picture-size'
              alt=''
              src={organisation.profile_pic || default_picture}
            />
          </div>
          <div className='search-result-entity'>
            {organisation.name}

            {/*ADD link to organisation*/}
          </div>
          <div className='search-result-description'>
            {organisation.location}
            <br />
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
