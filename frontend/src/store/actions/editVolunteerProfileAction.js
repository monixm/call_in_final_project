import { baseUrl } from '../../store/constants';
import { getLoggedInUserProfileAction } from './getLoggedInUserProfileAction';

export const editVolunteerProfileAction = data => async (
  dispatch,
  getState
) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getState().tokenReducer.token}`
  });
  const body = JSON.stringify(data);
  console.log('body', body);

  const config = {
    headers,
    body,
    method: 'PATCH'
  };

  const response = await fetch(`${baseUrl}/api/me/`, config);
  const userprofile = await response.json();
  dispatch(getLoggedInUserProfileAction(userprofile));
  console.log('userprof', userprofile);
  return userprofile;
};
