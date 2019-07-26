import { combineReducers } from 'redux';

import mealReducer from './mealReducer';
import generalReducer from './generalReducer';

export default combineReducers({
  meal: mealReducer,
  general: generalReducer
});
