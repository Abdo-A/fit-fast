import * as actionTypes from './actionTypes';
import http, { mealAPI } from '../../assets/utils/httpService';

export const createMeal = (meal, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING
  });

  http
    .post(`${mealAPI}`, meal)
    .then(() => {
      if (callback) callback();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_LOADING
      });
    });
};

export const getAllMeals = (callback) => (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING
  });

  http
    .get(`${mealAPI}/all`)
    .then((res) => {
      if (callback) callback();

      dispatch({
        type: actionTypes.GET_ALL_MEALS,
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data
      });
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_LOADING
      });
    });
};
