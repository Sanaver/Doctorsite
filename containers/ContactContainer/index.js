import { useDispatch, useSelector } from 'react-redux';
import {
  sendContactMailAction,
  hideFormStatusMessageAction,
} from '../../store/Contact';

const useSendContactMail = () => {
  const dispatch = useDispatch();

  // Send contact mail message
  const sendContactMail = formData => dispatch(sendContactMailAction(formData));
  const { showFormStatus, formMessage } = useSelector(state => state.contact);

  // Hide form status message
  const hideFormStatusMessage = () => dispatch(hideFormStatusMessageAction());

  return [sendContactMail, showFormStatus, formMessage, hideFormStatusMessage];
};

export { useSendContactMail };
