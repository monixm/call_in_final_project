import { baseUrl } from "../constants";
import { GET_VOLUNTEER_PROFILE } from "../types";

const getVolunteerProfile = user => {
  return {
    type: GET_VOLUNTEER_PROFILE,
    payload: user
  };
};

export const getVolunteerProfileAction = id => async (dispatch, getState) => {
  console.log("id", id);
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
    `${baseUrl}backend/api/volunteers/${id}`,
    config
  );

  const user = await response.json();
  console.log("user", user);
  dispatch(getVolunteerProfile(user));
};
