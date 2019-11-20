import { baseUrl } from "../constants";
import { GET_EVENT } from "../types";

const getEvent = event => {
  return {
    type: GET_EVENT,
    payload: event
  };
};

export const getEventAction = eventId => async (dispatch, getState) => {
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

  const response = await fetch(`${baseUrl}backend/api/events/${eventId}`, config);
  const event = await response.json();
  dispatch(getEvent(event));
};
