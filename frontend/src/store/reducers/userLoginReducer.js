import { USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, LOGOUT } from '../types';

const initialState = {
  token: null,
  authenticated: false,
  loginError: null,
  error: false,
  errorMessage: ''
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        authenticated: true
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload,
        token: null,
        authenticated: false,
        errorMessage: 'Incorrect username or password'
      };
    }
    case LOGOUT: {
      return {
        ...state,
        authenticated: false,
        token: null
      };
    }
    default:
      return state;
  }
};
