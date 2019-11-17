import { GET_VOLUNTEER_BY_ID } from "../types";

const initialState = {
  user: null
};

export const volunteerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOLUNTEER_BY_ID: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};
