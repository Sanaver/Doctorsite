/* eslint-disable import/prefer-default-export */
import * as ActionType from './types';
import api, { handleOnSuccess, handleOnError } from '../../services/api';
import constants from '../../utils/constants';

/**
 * Get doctors search lists
 */
const getDoctorsListAction = params => {
  return dispatch => {
    return api
      .get(constants.apiPaths.doctors, { params })
      .then(response => {
        dispatch(
          handleOnSuccess(response, ActionType.GET_DOCTORS_LIST_SUCCESS)
        );
      })
      .catch(error => {
        dispatch(
          handleOnError(error.response, ActionType.GET_DOCTORS_LIST_FAILURE)
        );
      });
  };
};

export { getDoctorsListAction };
