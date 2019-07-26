import * as actionTypes from './actionTypes';

export const openSideMenu = () => (dispatch) => {
  dispatch({
    type: actionTypes.OPEN_SIDE_MENU
  });
};

export const closeSideMenu = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLOSE_SIDE_MENU
  });
};

export const toggleSideMenu = () => (dispatch, getState) => {
  const sideMenuOpen = getState().general.sideMenuOpen;
  if (sideMenuOpen) {
    dispatch({
      type: actionTypes.CLOSE_SIDE_MENU
    });
  } else {
    dispatch({
      type: actionTypes.OPEN_SIDE_MENU
    });
  }
};
