import { GET_FEED_VOLUNTEER } from "../types";

const initialState = {
  feed: []
};

export const feedVolunteerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED_VOLUNTEER: {
      return { ...state, feed: action.payload };
    }
    default:
      return state;
  }
};
