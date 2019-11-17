import { combineReducers } from 'redux';
import { userLoginReducer } from './userLoginReducer';
import { userLogoutReducer } from './userLogoutReducer';
import { userRegistrationReducer } from './userRegistrationReducer';
import { volunteerProfileReducer } from './volunteerProfileReducer';
import { loggedInUserReducer } from './loggedInUserReducer';
import { feedVolunteerReducer } from './feedVolunteerReducer';

export const reducers = combineReducers({
  userLoginReducer,
  userLogoutReducer,
  userRegistrationReducer,
  volunteerProfileReducer,
  loggedInUserReducer,
  feedVolunteerReducer
});