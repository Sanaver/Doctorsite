import * as ActionType from './types';
import api, { handleOnSuccess, handleOnError } from '../../services/api';
import constants from '../../utils/constants';

// TODO: to be removed, for Test
const updateHome = () => {
  return dispatch => {
    dispatch({ type: 'UPDATE_HOME', payload: 'updated' });
  };
};

/**
 * Get locations list
 */
const getLocations = () => {
  return dispatch => {
    dispatch({ type: ActionType.FETCH_LOCATIONS_REQUEST });

    return api
      .get(constants.apiPaths.locations)
      .then(response => {
        dispatch(handleOnSuccess(response, ActionType.FETCH_LOCATIONS_SUCCESS));
      })
      .catch(error => {
        dispatch(
          handleOnError(error.response, ActionType.FETCH_LOCATIONS_FAILED)
        );
      });
  };
};

export { getLocations, updateHome };
