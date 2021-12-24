import React from 'react';
import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './style.module.scss';
import assets from '../../public/assets';

const Button = props => {
  const {
    disablePresetTheme,
    type,
    className,
    label,
    disabled,
    loading,
    loadingText,
    icon,
    iconAfter,
    iconClassName,
    onClick,
    width,
  } = props;

  const { btn, buttonImg, commonBtnStyle } = styles;

  const buttonStyles = `
    ${btn} ${styles[`btn-${type}`]} ${className}
  `;

  const loadingLabel = loadingText || label;

  const buttonIcon = icon && (
    <img
      className={`${buttonImg} ${iconClassName}`}
      src={assets[icon]}
      alt=""
    />
  );

  return (
    <button
      className={`${commonBtnStyle} ${
        disablePresetTheme ? className : buttonStyles
      }`}
      style={width && { width }}
      type="submit"
      disabled={disabled || loading}
      onClick={onClick}
    >
      {!iconAfter && <>{loading ? <LoadingOutlined /> : buttonIcon}</>}
      {loading ? loadingLabel : label}
      {iconAfter && <>{loading ? <LoadingOutlined /> : buttonIcon}</>}
    </button>
  );
};

Button.defaultProps = {
  disablePresetTheme: false,
  type: 'blue',
  className: '',
  disabled: false,
  loading: false,
  loadingText: null,
  onClick: () => {},
  icon: null,
  iconClassName: '',
  iconAfter: false,
  width: null,
};

Button.propTypes = {
  disablePresetTheme: PropTypes.bool,
  type: PropTypes.oneOf(['blue', 'green', 'red', 'navy']),
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  iconAfter: PropTypes.bool,
  width: PropTypes.string,
};

export default Button;
