import { USER_REGISTRATION_SUCCESS, REGISTRATION_VALIDATION } from '../types';

const initialState = {
  registered: false,
  validated: false,
  code: null,
  email: null
};

export const userRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTRATION_SUCCESS: {
      return { ...state, email: action.payload, registered: true };
    }
    case REGISTRATION_VALIDATION: {
      return { ...state, validated: true, code: action.payload };
    }
    default:
      return state;
  }
};
