import { baseUrl } from "../constants";

export const validateRegistrationAction = async data => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const body = JSON.stringify(data);

  const config = {
    headers,
    body,
    method: "POST"
  };
  const response = await fetch(`${baseUrl}backend/api/registration/validation/`, config);
  return await response.json();
};
