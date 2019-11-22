import {baseUrl} from '../constants';
import {loadBookmarkAction} from "./loadBookmarkAction";

//addbookmark is a boolean. If true we add the new bookmark, if false we remove it
export const getAddOrRemoveBookmarkAction = (happening, addBookmark) => async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    const headers = new Headers ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const config = {
      headers,
      method: addBookmark ? 'POST' : 'DELETE'
    };
    try{
        const response = await fetch (
            `${baseUrl}backend/api/bookmarks/${happening.type}s/${happening.id}/`,
            config);
        const bookmarked = await response.json();
        if (bookmarked){
             dispatch(loadBookmarkAction())
        }

    }catch(e){
        console.log('Error');
    }
};