import * as ActionType from './types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionType.SEND_DOCZO_APP_MAIL_SUCCSS:
      return {
        ...state,
        showFormStatus: true,
        formMessage: {
          type: 'success',
          message:
            'Thank you for your interest in Doczo, we will SMS you the app link. ',
        },
      };

    case ActionType.SEND_DOCZO_APP_MAIL_FAILURE:
      return {
        ...state,
        showFormStatus: true,
        formMessage: {
          type: 'failed',
          message: 'Mail sending failed please try again. ',
        },
      };

    case ActionType.HIDE_FORM_STATUS_MESSAGE:
      return {
        ...state,
        showFormStatus: false,
      };

    default:
      return state;
  }
};
