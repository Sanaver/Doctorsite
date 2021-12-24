import { useDispatch, useSelector } from 'react-redux';
import {
  sendGetDoczoAppMailAction,
  hideFormStatusMessageAction,
} from '../../store/Home';

const useSendDoczoAppLink = () => {
  const dispatch = useDispatch();

  // Send get doczo mail
  const sentGetDoczoAppMail = formData =>
    dispatch(sendGetDoczoAppMailAction(formData));
  const { showFormStatus, formMessage } = useSelector(state => state.home);

  // Hide form status message
  const hideFormStatusMessage = () => dispatch(hideFormStatusMessageAction());

  return [
    sentGetDoczoAppMail,
    showFormStatus,
    formMessage,
    hideFormStatusMessage,
  ];
};

export { useSendDoczoAppLink };
