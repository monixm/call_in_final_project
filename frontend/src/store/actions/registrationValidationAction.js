import { baseUrl } from "../constants";

export const registrationValidationAction = code => async (
  dispatch,
  getState
) => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const body = JSON.stringify(code);

  const config = {
    headers,
    body,
    method: "POST"
  };

  const response = await fetch(
    `${baseUrl}backend/api/registration/validation`,
    config
  );
  const code = await response.json();
  console.log(response);
  console.log(code);

  if (response) {
    dispatch(loginAction());
  }

  return response;
};
