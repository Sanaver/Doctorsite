import * as ActionType from './types';

const INITIAL_STATE = {
  isContactLoading: false,
  showFormStatus: false,
  formMessage: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionType.SEND_CONTACT_MAIL_SUCCESS:
      return {
        ...state,
        showFormStatus: true,
        formMessage: {
          type: 'success',
          message: ' We got your query. A Doczo representative will reach out to you soon. ',
        },
      };

    case ActionType.SEND_CONTACT_MAIL_FAILURE:
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
