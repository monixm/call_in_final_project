import { baseUrl } from "../constants";
import { GET_ORGANISATION_ME_PROFILE } from "../types";

const getOrganisationProfile = profile => {
  return {
    type: GET_ORGANISATION_ME_PROFILE,
    payload: profile
  };
};

export const getOrganisationMeAction = () => async (dispatch, getState) => {

  const token = localStorage.getItem('token');

  const headers = new Headers({
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`
  });

  const config = {
    headers,
    method: "GET"
  };

  const response = await fetch(`${baseUrl}backend/api/feed/organisation/me`, config);
  const profile = await response.json();
  dispatch(getOrganisationProfile(profile));
};
