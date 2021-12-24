/* eslint-disable import/prefer-default-export */
import * as ActionType from './types';
import api, { handleOnSuccess, handleOnError } from '../../services/api';
import constants from '../../utils/constants';

/**
 * Get Search form menu list
 */
const getSearchListAction = params => {
  return dispatch => {
    dispatch({ type: ActionType.GET_SEARCH_MENU_LIST_REQUEST });
    return api
      .get(constants.apiPaths.search, { params })
      .then(response => {
        dispatch(
          handleOnSuccess(response, ActionType.GET_SEARCH_MENU_LIST_SUCCESS)
        );
      })
      .catch(error => {
        dispatch(
          handleOnError(error.response, ActionType.GET_SEARCH_MENU_LIST_FAILURE)
        );
      });
  };
};

export { getSearchListAction };
