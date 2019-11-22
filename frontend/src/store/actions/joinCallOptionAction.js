import { baseUrl } from "../constants";

export const joinCallOptionAction = (call_option_id) => async (dispatch, getState) => {
  let { token } = getState().userLoginReducer;
  if (!token) {
    token = localStorage.getItem("token");
  }

  const headers = new Headers({
    'Content-type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  const config = {
    headers,
    method: "PATCH"
  };

  const response = await fetch(`${baseUrl}backend/api/volunteers/request/call/${call_option_id}/`, config);
  const feed = await response.json();
  return feed;
};