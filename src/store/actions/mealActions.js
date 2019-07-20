import * as actionTypes from './actionTypes';
import http, { mealAPI } from '../../assets/utils/httpService';

export const createMeal = (meal, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING
  });

  http
    .post(`${mealAPI}`, meal)
    .then(() => {
      dispatch({
        type: actionTypes.END_LOADING
      });
      if (callback) callback();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: actionTypes.END_LOADING
      });
    });
};
