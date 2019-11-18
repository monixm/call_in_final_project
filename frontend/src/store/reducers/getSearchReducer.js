import {SEARCH} from '../types'
const initState = {
    searched:[],
    isLoaded:false,
};
export const searchReducer = (state=initState,action) =>{
    switch (action.type){
        case SEARCH:{
            return{
                ...state,
                searched: action.payload,
                isLoaded: true,
            }
        }
        default:
        return state
    };
}