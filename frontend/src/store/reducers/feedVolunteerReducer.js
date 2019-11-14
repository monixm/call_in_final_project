import { GET_FEED_VOLUNTEER } from "../types";

const initialState = {
  call: null,
  event: null
};

export const feedVolunteerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED_VOLUNTEER: {
      return { ...state, call: action.payload, event: action.payload };
    }
    default:
      return state;
  }
};
