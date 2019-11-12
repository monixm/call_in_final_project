import { combineReducers } from 'redux';
import { userLoginReducer } from './userLoginReducer';
import { userLogoutReducer } from './userLogoutReducer';
import { userRegistrationReducer } from './userRegistrationReducer';
import { volunteerProfileReducer } from './volunteerProfileReducer';

export const reducers = combineReducers({
  userLoginReducer,
  userLogoutReducer,
  userRegistrationReducer,
  volunteerProfileReducer
});