import { baseUrl } from '../constants';
import { userLoginAction } from './loginAction';

export const registrationValidationAction = data => async (
  dispatch,
  getState
) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const body = JSON.stringify(data);

  console.log(data);
  const config = {
    headers,
    body,
    method: 'POST'
  };

  const response = await fetch(
    `${baseUrl}/backend/api/registration/validation`,
    config
  );
  if (response.ok) {
    dispatch(userLoginAction());
  }
  return response.ok;
};

// export const registrationValidationAction = code => async (
//   dispatch,
//   getState
// ) => {
//   const headers = new Headers({
//     'Content-Type': 'application/json'
//   });

//   const body = JSON.stringify(code);

//   const config = {
//     headers,
//     body,
//     method: 'POST'
//   };

//   const response = await fetch(
//     `${baseUrl}backend/api/registration/validation`,
//     config
//   );
//   const code = await response.json();
//   console.log(response);
//   console.log(code);

//   if (response) {
//     dispatch(loginAction());
//   }

//   return response;
// };
