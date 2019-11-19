import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header';
import search_orange_button from '../../assets/search.svg';
import location_icon from '../../assets/location_icon.svg';
import { getSearchAction } from "../../store/actions/getSearchActions";
import SearchItem from "../../components/SearchItem/index.js";
import './style.css';

class Search extends Component {
    //to set the search as an empty string
    constructor(props) {
        super(props);
        this.state = {
            searchLocation:'',
            searchString:'',
            volunteerInterest: {
                    social: false,
                    sports: false,
                    coaching:false,
                    politics:false,
                    languages:false,
                    arts_culture:false,
                    food:false,
                    items:false,
            }
        }
    }
    handleSearchInput = event => {
        event.preventDefault();
        this.setState({
            ...this.state,
            searchString:event.target.value
        });
    };
    handleSearchClick = async event => {
        const { dispatch } = this.props;
        dispatch(getSearchAction(this.state));
    }
    handleLocationInput = event => {
        event.preventDefault();
        this.setState({
            ...this.state,
            searchLocation:event.target.value
        });
    };
    handleInterestClick = interest => {
        const newState = {...this.state}
        newState.volunteerInterest = {...this.state.volunteerInterest}
        newState.volunteerInterest[interest] = !this.state.volunteerInterest[interest];
        this.setState(newState)
    };

    showSearchResults = () => {
        return (
            <div>
                {
                    this.props.searchResults.map((result) => {
                        return <SearchItem key={result.id} result={result} interests={this.state.volunteerInterest}/>;
                    })
                }
            </div>
        )
    }


    render() {
        return (
            <div>
                <Header/>
                <div className='search_item'>
                    <div className='search_right'>
                        <img src={search_orange_button} className='orange_lens' alt=''/>
                    </div>
                    <div className='search_left'>
                        <input type='text' className='search_box' onChange = {this.handleSearchInput} value={this.state.searchString} placeholder='search'/>
                    </div>
                </div>
                <div className='location_item'>
                    <div className='location_right'>
                        <img onClick={this.handleLocationInput} src={location_icon} className='location_icon' alt=''/>
                    </div>
                    <div className='location_left'>
                        <input type='text' className='location_box' placeholder='Enter the city name'/>
                    </div>
                </div>
                <div className='focus_list'>
                    <div className='focus_right' >
                        <button onClick= {()=>this.handleInterestClick('social')} className={this.state.volunteerInterest.social ? 'button-clicked-decoration' : 'button-decoration'}>Social</button>
                        <button onClick= {()=>this.handleInterestClick('sports')} className={this.state.volunteerInterest.sports ? 'button-clicked-decoration' : 'button-decoration'}>Sports</button>
                        <button onClick= {()=>this.handleInterestClick('coaching')} className={this.state.volunteerInterest.coaching ? 'button-clicked-decoration' : 'button-decoration'}>Coaching</button>
                        <button onClick= {()=>this.handleInterestClick('politics')} className={this.state.volunteerInterest.politics ? 'button-clicked-decoration' : 'button-decoration'}>Politics</button>
                    </div>
                    <div className='focus_left'>
                        <button onClick= {()=>this.handleInterestClick('languages')} className={this.state.volunteerInterest.languages ? 'button-clicked-decoration' : 'button-decoration'}>Languages</button>
                        <button onClick= {()=>this.handleInterestClick('arts_culture')} className={this.state.volunteerInterest.arts_culture ? 'button-clicked-decoration' : 'button-decoration'}>Arts&Culture</button>
                        <button onClick= {()=>this.handleInterestClick('food')} className={this.state.volunteerInterest.food ? 'button-clicked-decoration' : 'button-decoration'}>Food</button>
                        <button onClick= {()=>this.handleInterestClick('items')} className={this.state.volunteerInterest.items ? 'button-clicked-decoration' : 'button-decoration'}>Items</button>
                    </div>
                </div>

                <div className='enter_button'>
                        <button type ='submit' onClick={this.handleSearchClick}  className='buttonSearch'>Search</button>
                </div>
                <div className='results-display'>

                {
                    this.props.searchResults && this.props.searchResults.length !== 0 ? this.showSearchResults() : <div></div>
                }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
               searchResults: state.searchReducer.searched,
               isLoaded: state.searchReducer.isLoaded,
    }
}
export default connect(mapStateToProps)(Search);




