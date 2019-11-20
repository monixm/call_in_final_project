import { GET_ORGANISATION_ME_PROFILE } from "../types";


const initialState = {
    profile: {},
}

export const organisationMeReducer = (state = initialState, action) => {
    if (action.type === GET_ORGANISATION_ME_PROFILE) {
        const newState = { ...state, profile: {...state.profile} }
        newState.profile = action.payload
        console.log('state', newState.profile)
        return newState
    }
    return state
};