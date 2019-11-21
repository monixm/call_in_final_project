import {GET_BOOKMARK} from '../types'
const initState = {
    bookmarked:[],
    isLoaded:false,
};
export const bookmarkReducer = (state=initState,action) =>{
    switch (action.type){
        case GET_BOOKMARK:{
            return{
                ...state,
                bookmarked: action.payload,
                isLoaded: true,
            }
        }
        default:
            return state
    }
}