import { GET_VOLUNTEER_FEED } from "../types";

const initialState = {
  call: [],
  event: [] 
};

export const feedVolunteerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOLUNTEER_FEED: {
      return { ...state, call: action.payload, event: action.payload };
    }
    default:
      return state;
  }
};
