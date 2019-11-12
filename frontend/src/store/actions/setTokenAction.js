import { SET_TOKEN } from '../types';

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token
});

export const setTokenAction = token => async (dispatch, getState) => {
  dispatch(setToken(token));
  return token;
};
