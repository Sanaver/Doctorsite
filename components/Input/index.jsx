/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import styles from '../../styles/common.module.scss';

// Type = formik | normal
// If formik => Provide name in parent <Field /> component
const Input = props => {
  const {
    label,
    placeholder = '',
    inputType = 'text',
    className,
    padding = null,
    formClasses,
    type = 'formik',

    withIcon,
    iconSrc,
    formIconClasses,

    // Formik
    field,
    form = null,

    // Native
    error = null,
  } = props;

  const { formControl, formLabel, formInput, formError, formIcon } = styles;

  // Formik
  const { touched, errors } = form || {};

  const customPadding = padding || (withIcon ? 'p-2 pl-10' : 'p-2');
  const customPosition = withIcon && 'relative';

  return (
    <div className={`${formControl} ${formClasses} ${customPosition}`}>
      {/* Label */}
      {label && (
        <label htmlFor={label} className={formLabel}>
          {label}
        </label>
      )}

      {/* Icon */}
      {withIcon && (
        <img
          src={iconSrc}
          alt="location"
          className={`${formIcon} ${formIconClasses}`}
        />
      )}

      {type === 'formik' ? (
        // =============== Formik Input =============== //
        <>
          {/* Input */}
          <input
            className={`${formInput} ${customPadding} ${className}`}
            type={inputType}
            placeholder={placeholder}
            {...field}
            {...props}
          />
          {/* Error */}
          {touched[field.name] && errors[field.name] && (
            <div className={formError}>{errors[field.name]}</div>
          )}
        </>
      ) : (
        // =============== Normal Input =============== //
        <>
          <input
            className={`${formInput} ${customPadding} ${className}`}
            type={inputType}
            placeholder={placeholder}
            {...props}
          />
          {error && <div className={formError}>{error}</div>}
        </>
      )}
    </div>
  );
};
export default Input;
