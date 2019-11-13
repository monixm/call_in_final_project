import { USER_LOGIN_SUCCESS } from "../types";
import { USER_LOGIN_ERROR } from "../types";

const initialState = {
  token: null,
  authenticated: null,
  loginError: null,
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
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.type
      };
    }
    default:
      return state;
  }
};
