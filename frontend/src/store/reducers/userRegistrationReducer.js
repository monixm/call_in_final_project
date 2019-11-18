import { USER_REGISTRATION_SUCCESS } from '../types';

const initialState = {
  registered: false,
  validated: false,
  email: null
};

export const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTRATION_SUCCESS: {
      return { ...state, registered: true, email: action.payload };
    }
    default:
      return state;
  }
};
