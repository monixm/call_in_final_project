import { baseUrl } from '../constants';
import { LOGGED_IN_ORGANISATION } from '../types';

const getLoggedInOrganisationProfile = user => {
  return {
    type: LOGGED_IN_ORGANISATION,
    payload: user
  };
};

export const getLoggedInOrganisationProfileAction = () => async (
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
    `${baseUrl}backend/api/feed/user/me`,
    config
  );
  const user = await response.json();
  const username = user.username
  const organisation_id = user.organisation.id
  localStorage.setItem('username', username)
  localStorage.setItem('organisation_id', organisation_id)
  dispatch(getLoggedInOrganisationProfile(user));
};
