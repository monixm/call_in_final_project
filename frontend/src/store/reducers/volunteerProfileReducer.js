import { GET_VOLUNTEER_PROFILE } from '../types';

const initialState = {
  user: []
};

export const volunteerProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOLUNTEER_PROFILE: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};
