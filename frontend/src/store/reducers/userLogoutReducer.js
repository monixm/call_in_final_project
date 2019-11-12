import { LOGOUT } from "../types";

export const userLogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGOUT: {
      const newState = { ...state, authenticated: false };
      return newState;
    }
    default:
      return state;
  }
};
