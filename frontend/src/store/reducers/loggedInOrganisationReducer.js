import { LOGGED_IN_ORGANISATION } from '../types';

const initialState = {
    profile: {}
}

export const loggedInOrganisationReducer = (state = initialState, action) => {
    if (action.type === LOGGED_IN_ORGANISATION) {
        const newState = { ...state, profile: {...state.profile} }
        newState.profile = action.payload
        return newState
    }
    return state
};
