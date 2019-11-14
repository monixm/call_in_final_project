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

  const response = await fetch(`${baseUrl}backend/api/auth/token/`, config);
  const token = await response.json();
  console.log(token);
 
  console.log(response);
  if (token) {
    localStorage.setItem("token", token.access);
    dispatch(userLogin(token.access));
  }
  return token;
};
