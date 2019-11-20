import { combineReducers } from 'redux';
import { userLoginReducer } from './userLoginReducer';
import { userLogoutReducer } from './userLogoutReducer';
import { userRegistrationReducer } from './userRegistrationReducer';
import { volunteerProfileReducer } from './volunteerProfileReducer';
import { loggedInUserReducer } from './loggedInUserReducer';
import { feedVolunteerReducer } from './feedVolunteerReducer';
import { searchReducer } from './getSearchReducer';
import {organisationProfileReducer} from './organisationProfileReducer';
import { eventAndCallReducer } from './eventAndCallReducer';



export const reducers = combineReducers({
  userLoginReducer,
  userLogoutReducer,
  userRegistrationReducer,
  searchReducer,
  volunteerProfileReducer,
  loggedInUserReducer,
  feedVolunteerReducer,
  organisationProfileReducer
  eventAndCallReducer
});