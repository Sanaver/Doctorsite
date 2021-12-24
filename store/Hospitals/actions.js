import * as ActionType from './types';
import api, { handleOnSuccess, handleOnError } from '../../services/api';
import constants from '../../utils/constants';

/**
 * Get hospitals search lists
 */
const getHospitalsSearchAction = params => {
  return dispatch => {
    return api
      .get(constants.apiPaths.hospitals, { params })
      .then(response => {
        dispatch(
          handleOnSuccess(response, ActionType.GET_HOSPITALS_SEARCH_SUCCESS)
        );
      })
      .catch(error => {
        dispatch(
          handleOnError(error.response, ActionType.GET_HOSPITALS_SEARCH_FAILURE)
        );
      });
  };
};

/**
 * Get Hospital Details
 */
const getHospitalDetailsAction = slug => {
  const url = `${constants.apiPaths.hospital}/${slug}`;
  return dispatch => {
    return api
      .get(url)
      .then(response => {
        dispatch(
          handleOnSuccess(response, ActionType.GET_HOSPITAL_DETAILS_SUCCESS)
        );
      })
      .catch(error => {
        dispatch(
          handleOnError(
            error && error.response,
            ActionType.GET_HOSPITAL_DETAILS_FAILURE
          )
        );
      });
  };
};

export { getHospitalsSearchAction, getHospitalDetailsAction };
