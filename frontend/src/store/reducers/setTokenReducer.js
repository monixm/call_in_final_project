import { SET_TOKEN } from '../types';

const initialState = {
  token: null,
  authenticated: null
};

export const setTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return { ...state, token: action.payload, authenticated: true };
    }
    default:
      return state;
  }
};
