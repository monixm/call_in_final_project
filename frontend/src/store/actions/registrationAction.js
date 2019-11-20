import { baseUrl } from '../constants';
import { USER_REGISTRATION_SUCCESS } from '../types';

export const registration = code => ({
  type: USER_REGISTRATION_SUCCESS,
  payload: code
});

export const registrationAction = email => async (dispatch, getState) => {
  try {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify();

    const config = {
      headers,
      body,
      method: 'POST'
    };

    const response = await fetch(`${baseUrl}backend/api/registration`, config);
    const code = await response.json();
    console.log(response, 'response');
    dispatch(registration(code));
  } catch (error) {
    console.log(error);
  }
};
