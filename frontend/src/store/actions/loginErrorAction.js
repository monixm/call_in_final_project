import { USER_LOGIN_ERROR } from "../types";

export const loginError = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
