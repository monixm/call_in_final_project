import {SEARCH} from '../types';
import {baseUrl} from "../constants";

export const search = (searched) =>({
    type: SEARCH,
    payload: searched
})
export const getSearchAction = data => async (dispatch, getState)=> {
    const token = getState().userLoginReducer.token;
    console.log(getState());
    const headers = new Headers({
        'Content-Type':'application/json',
        'Authorization' :`Bearer ${token}`
    });

    const config = {
        headers,
        method:'GET'
    };
    const params = {
        search_string: data.searchString,
        volunteer_interest: Object.keys(data.volunteerInterest).filter((interest)=> data.volunteerInterest[interest]).join(","),
        search_location: data.searchLocation,
    };
    const queryString = Object.keys(params).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');
    let url = `backend/api/search?${queryString}`;
    console.log("url: ", url);
    const response = await fetch(`${baseUrl}${url}`, config);
    const searchedData = await response.json();
    console.log("searchedData:", searchedData);
    dispatch(search(searchedData));
    return searchedData;
};