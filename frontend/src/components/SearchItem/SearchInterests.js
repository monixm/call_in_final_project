import React, {Component} from 'react';

class SearchInterests extends Component {

    transformInterestName(interest){
        const words = interest.split('_').join(' & ');
        return words.charAt(0).toUpperCase() + words.slice(1)
    }

    render() {
        const {focus, interests} = this.props;
        //focus -> interests defined for the entities (volunteer, organization) from backend
        //interest -> definitions for which interest we need to show from frontend

        if (!focus){
            return <div></div>
        }

        const interestsToShow = Object.keys(interests).filter((key) => interests[key]);
        return <>
            {interestsToShow.map((interest, index) => {
                return <div key={index}>{`${this.transformInterestName(interest)}: ${focus[interest]}`}</div>
            })

            }

        </>
    }
}

export default SearchInterests;

