import React from 'react';
import styles from '../../styles/common.module.scss';

const Textarea = props => {
  const {
    label,
    placeholder = '',
    formClasses = '',
    type = 'formik',

    // Formik
    field,
    form = null,

    // Native
    onChange,
    error = null,
  } = props;

  const { formControl, formLabel, formTextarea, formError } = styles;

  // Formik
  const { touched, errors } = form || {};
  return (
    <div className={`${formControl} ${formClasses}`}>
      {/* Label */}
      {label && (
        <label htmlFor={label} className={formLabel}>
          {label}
        </label>
      )}
      {type === 'formik' ? (
        // =============== Formik Textarea =============== //
        <>
          {/* Textarea */}
          <textarea
            className={formTextarea}
            type="text"
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
        // =============== Normal Textarea =============== //
        <>
          <textarea
            className={formTextarea}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            {...props}
          />
          {error && <div className={formError}>{error}</div>}
        </>
      )}
    </div>
  );
};
export default Textarea;
