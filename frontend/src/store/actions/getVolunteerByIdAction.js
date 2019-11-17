import { baseUrl } from "../constants";
import { GET_VOLUNTEER_BY_ID } from "../types";

const getVolunteerProfile = user => {
  return {
    type: GET_VOLUNTEER_BY_ID,
    payload: user
  };
};

export const getVolunteerProfileAction = volunteerId => async (dispatch, getState) => {
  let { token } = getState().userLoginReducer;
  if (!token) {
    token = localStorage.getItem("token");
  }

  const headers = new Headers({
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`
  });

  const config = {
    headers,
    method: "GET"
  };

  const response = await fetch(
    `${baseUrl}backend/api/volunteers/${volunteerId}`,
    config
  );

  const user = await response.json();
  dispatch(getVolunteerProfile(user));
};
