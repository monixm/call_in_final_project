import { USER_REGISTRATION_SUCCESS } from '../types';

const initialState = {
  token: null,
  authenticated: null,
  registered: false,
  validated: false
};

export const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTRATION_SUCCESS: {
      return { ...state, registered: true };
    }
    default:
      return state;
  }
};
