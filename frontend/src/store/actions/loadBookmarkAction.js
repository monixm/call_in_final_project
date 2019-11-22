import {baseUrl} from '../constants';
import {GET_BOOKMARK} from "../types";


const getBookmarks = bookmarks => {
  return {
    type: GET_BOOKMARK,
    payload: bookmarks
  };
};


export const loadBookmarkAction = () => async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const headers = new Headers ({
        'Content-type':'application/json',
        'Authorization': `Bearer ${token}`

    });
    const config = {
        headers,
        method:'GET'

    };
    const response = await fetch(`${baseUrl}backend/api/bookmarks/`, config);
    const bookmarks = await response.json();
    dispatch(getBookmarks(bookmarks));
};