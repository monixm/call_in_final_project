import { LOGGED_IN_USER } from '../types';

const initialState = {
  user: null
};

export const loggedInUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_USER: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};
