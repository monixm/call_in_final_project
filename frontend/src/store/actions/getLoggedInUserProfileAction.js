import { baseUrl } from '../constants';
import { LOGGED_IN_USER } from '../types';

const getLoggedInUserProfile = user => {
  return {
    type: LOGGED_IN_USER,
    payload: user
  };
};

export const getLoggedInUserProfileAction = () => async (
  dispatch,
  getState
) => {
  let { token } = getState().userLoginReducer;
  if (!token) {
    token = localStorage.getItem('token');
  }

  const headers = new Headers({
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  });

  const config = {
    headers,
    method: 'GET'
  };

  const response = await fetch(
    `${baseUrl}backend/api/feed/volunteer/me`,
    config
  );
  // console.log(response, 'response from fetch');
  const user = await response.json();
  dispatch(getLoggedInUserProfile(user));
};
