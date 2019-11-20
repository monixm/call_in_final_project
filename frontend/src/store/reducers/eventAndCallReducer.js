import { GET_EVENT } from '../types';
import { GET_CALL } from '../types';

const initialState = {
  event: {},
  call: {}
};

export const eventAndCallReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT: {
      return { ...state, event: action.payload };
    }
    case GET_CALL: {
      return { ...state, call: action.payload };
    }
    default:
      return state;
  }
};
