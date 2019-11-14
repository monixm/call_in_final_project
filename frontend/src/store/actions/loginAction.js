import { baseUrl } from "../constants";
import { USER_LOGIN_SUCCESS } from "../types";

export const userLogin = token => ({
  type: USER_LOGIN_SUCCESS,
  payload: token
});

export const userLoginAction = (username, password) => async (
  dispatch,
  getState
) => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const body = { username, password };

  const config = {
    body: JSON.stringify(body),
    headers,
    method: "POST"
  };

  const fetchToken = await fetch(`${baseUrl}backend/api/auth/token/`, config);
  const response = await fetchToken.json();
  const token = response.access
  console.log(token);
 
  console.log(response);
  if (token) {
    localStorage.setItem("token", token);
    dispatch(userLogin(token));
  }
};
