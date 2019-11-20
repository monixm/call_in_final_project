import { baseUrl } from "../constants";
import { GET_ORGANISATION_PROFILE } from "../types";

const getOrganisationProfile = profile => {
  return {
    type: GET_ORGANISATION_PROFILE,
    payload: profile
  };
};

export const getOrganisationProfileAction = (id) => async (dispatch, getState) => {

  const token = localStorage.getItem('token');

  const headers = new Headers({
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`
  });

  const config = {
    headers,
    method: "GET"
  };

  const response = await fetch(`${baseUrl}backend/api/organisations/${id}/`, config);
  const profile = await response.json();
  dispatch(getOrganisationProfile(profile));
};
