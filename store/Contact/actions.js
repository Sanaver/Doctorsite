/* eslint-disable import/prefer-default-export */
import * as ActionType from './types';
import api, { handleOnSuccess, handleOnError } from '../../services/api';
import constants from '../../utils/constants';

/**
 * Send Contact Mail
 */
const sendContactMailAction = contactFormData => {
  return dispatch => {
    return api
      .post(constants.apiPaths.contact, contactFormData)
      .then(response => {
        dispatch(
          handleOnSuccess(response, ActionType.SEND_CONTACT_MAIL_SUCCESS)
        );
      })
      .catch(error => {
        dispatch(
          handleOnError(error.response, ActionType.SEND_CONTACT_MAIL_FAILURE)
        );
      });
  };
};

/**
  Hide contact form status message
*/
const hideFormStatusMessageAction = () => ({
  type: ActionType.HIDE_FORM_STATUS_MESSAGE,
});

export { sendContactMailAction, hideFormStatusMessageAction };
