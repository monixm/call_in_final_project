import { baseUrl } from '../constants';
import { USER_LOGIN_SUCCESS } from '../types';
import { getVolunteerProfileAction } from './getVolunteerProfileAction';

export const userLogin = token => ({
  type: USER_LOGIN_SUCCESS,
  payload: token
});

export const userLoginAction = (email, password) => async (
  dispatch,
  getState
) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const body = { email, password };

  const config = {
    body: JSON.stringify(body),
    headers,
    method: 'POST'
  };

  const response = await fetch(`${baseUrl}api/auth/token`, config);
  const token = await response.json();
  console.log(token);
  if (token) {
    localStorage.setItem('token', token);
  }
  dispatch(userLogin(token));
  dispatch(getVolunteerProfileAction());
  return token;
};
