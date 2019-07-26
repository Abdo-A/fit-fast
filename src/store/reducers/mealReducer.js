import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  allMeals: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_MEALS:
      return {
        ...state,
        allMeals: action.payload
      };

    default:
      return state;
  }
};
