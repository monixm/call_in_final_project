import { baseUrl } from "../constants";
import { USER_REGISTRATION_SUCCESS } from "../types";

export const registration = token => ({
  type: USER_REGISTRATION_SUCCESS,
  payload: token
});

export const registrationAction = email => async (dispatch, getState) => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const body = JSON.stringify(email);

  const config = {
    headers,
    body,
    method: "POST"
  };
  const response = await fetch(`${baseUrl}backend/api/registration`, config);
  const token = await response.json();
  if (response) {
    localStorage.setItem("token", token);
  }
  dispatch(registration(token));
  return token;
};
