import { baseUrl } from '../constants';
import { SET_TOKEN } from '../types';
import { setTokenAction } from '../actions/setTokenAction';
import { getVolunteerProfileAction } from './getVolunteerProfileAction';

export const Registration = token => ({
  type: SET_TOKEN,
  payload: token
});

export const registrationAction = data => async (dispatch, getState) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const body = JSON.stringify(data);

  console.log(data);

  const config = {
    headers,
    body,
    method: 'POST'
  };

  const response = await fetch(`${baseUrl}backend/api/registration`, config);
  const tokenfetch = await fetch(`${baseUrl}backend/api/auth/token`, config);
  const token = await tokenfetch.json();
  console.log(token);
  if (response.ok) {
    localStorage.setItem('token', token);
  }
  dispatch(setTokenAction(token));
  //   dispatch(getVolunteerProfileAction());
  return token;
};
