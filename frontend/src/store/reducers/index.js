import { combineReducers } from 'redux';
import { userLoginReducer } from './userLoginReducer';
import { setTokenReducer } from './setTokenReducer';
import { userRegistrationReducer } from './userRegistrationReducer';
import { volunteerProfileReducer } from './volunteerProfileReducer';

export const reducers = combineReducers({
  userLoginReducer,
  setTokenReducer,
  userRegistrationReducer,
  volunteerProfileReducer
});
