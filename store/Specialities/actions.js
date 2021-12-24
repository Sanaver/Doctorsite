import * as ActionType from './types';
import api, { handleOnSuccess, handleOnError } from '../../services/api';
import constants from '../../utils/constants';

/**
 * Get All Specialities
 */
const getAllSpecialitiesAction = () => {
  return dispatch => {
    dispatch({ type: ActionType.GET_ALL_SPECIALITIES_LIST_REQUEST });
    return api
      .get(constants.apiPaths.specialities)
      .then(response => {
        dispatch(
          handleOnSuccess(
            response,
            ActionType.GET_ALL_SPECIALITIES_LIST_SUCCESS
          )
        );
      })
      .catch(error => {
        dispatch(
          handleOnError(
            error.response,
            ActionType.GET_ALL_SPECIALITIES_LIST_FAILURE
          )
        );
      });
  };
};

export { getAllSpecialitiesAction };
