import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const AlertMessage = ({ type, message, onClick, className }) => {
  const isSuccess = type === 'success';
  return (
    <div
      className={`border px-4 py-3 rounded-lg relative
      ${
        isSuccess
          ? `${styles.successBackground} ${styles.successBorderColor} ${styles.successTextColor}`
          : `${styles.errorBackground} ${styles.errorBorderColor} ${styles.errorTextColor}`
      }
      ${className}
    `}
      role="alert"
    >
      <strong className="font-bold">{isSuccess ? `Success` : 'Failed'}</strong>
      <span className="block sm:inline-block pr-5"> {message}</span>
      <CloseOutlined
        className="absolute top-0 right-0 px-4 py-3 text-base"
        onClick={onClick}
      />
    </div>
  );
};

AlertMessage.defaultProps = {
  type: 'Type not received',
  message: 'Message not received',
  onClick: () => {},
  className: '',
};

AlertMessage.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onClick: () => {},
  className: PropTypes.string,
};

export default AlertMessage;
