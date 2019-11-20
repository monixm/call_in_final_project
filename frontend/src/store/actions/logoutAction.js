import { LOGOUT } from '../types';

export const userLogout = () => {
  localStorage.clear();
  return {
    type: LOGOUT
  };
};
