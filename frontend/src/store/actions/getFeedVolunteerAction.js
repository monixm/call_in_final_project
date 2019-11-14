import { baseUrl } from "../constants";
import { GET_VOLUNTEER_FEED } from "./types";

const getFeedVolunteer = feed => {
  return {
    type: GET_VOLUNTEER_FEED,
    payload: feed
  };
};

export const getFeedVolunteerAction = () => async (dispatch, getState) => {
  console.log("getFeedAction");
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

  const response = await fetch(`${baseUrl}api/feed`, config);
  const feed = await response.json();
  console.log(feed);
  dispatch(getFeedVolunteer(feed));
};
