import { GET_ORGANISATION_PROFILE } from "../types";


const initialState = {
    profile: [],
}

export const organisationProfileReducer = (state = initialState, action) => {
    if (action.type === GET_ORGANISATION_PROFILE) {
        const newState = { ...state, profile: [...state.profile] }
        newState.profile = action.payload
        console.log(newState.profile)
        return newState
    }
    return state
};