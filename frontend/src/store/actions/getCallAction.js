import { baseUrl } from "../constants";
import { GET_CALL } from "../types";

const getCall = call => {
  return {
    type: GET_CALL,
    payload: call
  };
};

export const getCallAction = callId => async (dispatch, getState) => {
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

  const response = await fetch(`${baseUrl}backend/api/calls/${callId}`, config);
  const call = await response.json();
  dispatch(getCall(call));
  console.log('in the callaction', call)
};
