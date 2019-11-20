import { combineReducers } from 'redux';
import { userLoginReducer } from './userLoginReducer';
import { userRegistrationReducer } from './userRegistrationReducer';
import { volunteerProfileReducer } from './volunteerProfileReducer';
import { loggedInUserReducer } from './loggedInUserReducer';
import { feedVolunteerReducer } from './feedVolunteerReducer';
import { searchReducer } from './getSearchReducer';

export const reducers = combineReducers({
  userLoginReducer,
  userRegistrationReducer,
  searchReducer,
  volunteerProfileReducer,
  loggedInUserReducer,
  feedVolunteerReducer
});
