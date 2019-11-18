import { GET_VOLUNTEER_BY_ID } from "../types";

const initialState = {
  volunteer: null
};

export const volunteerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOLUNTEER_BY_ID: {
      return { ...state, volunteer: action.payload };
    }
    default:
      return state;
  }
};
