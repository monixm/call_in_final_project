import { USER_LOGIN_SUCCESS } from '../types';

const initialState = {
  token: null,
  authenticated: null,
  currentUser: {}
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        currentUser: action.payload,
        authenticated: true
      };
    }
    default:
      return state;
  }
};
