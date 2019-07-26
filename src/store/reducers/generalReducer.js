import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  sideMenuOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case actionTypes.END_LOADING:
      return {
        ...state,
        isLoading: false
      };

    case actionTypes.OPEN_SIDE_MENU:
      return {
        ...state,
        sideMenuOpen: true
      };

    case actionTypes.CLOSE_SIDE_MENU:
      return {
        ...state,
        sideMenuOpen: false
      };

    default:
      return state;
  }
};
