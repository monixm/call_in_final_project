import { baseUrl } from "../constants";
import { GET_FEED_VOLUNTEER } from "../types";

const getFeedVolunteer = feed => {
  return {
    type: GET_FEED_VOLUNTEER,
    payload: feed
  };
};

export const getFeedVolunteerAction = () => async (dispatch, getState) => {
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

  const response = await fetch(`${baseUrl}backend/api/feed`, config);
  console.log(response)
  const feed = await response.json();
  console.log(feed);
  dispatch(getFeedVolunteer(feed));
};
