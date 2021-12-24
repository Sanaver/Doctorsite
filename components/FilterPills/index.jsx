/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import assets from '../../public/assets';
import styles from './styles.module.scss';

const FilterPills = ({
  text = '',
  isClickablePill = false,
  onClickPill,
  className,
  ...props
}) => {
  const { filterPillsWrapper } = styles;
  return (
    text &&
    // Clickable button
    (isClickablePill ? (
      <button
        className={styles[className]}
        type="submit"
        onClick={() => onClickPill(props)}
        {...props}
      >
        {text}
      </button>
    ) : (
      // Normal Pill
      <div className={`${filterPillsWrapper} ${className}`}>
        {text}
        <img
          onClick={() => onClickPill(props)}
          src={assets.closeButtonNavy}
          alt="Close"
        />
      </div>
    ))
  );
};

FilterPills.defaultProps = {
  text: '',
  isClickablePill: false,
  onClickPill: () => {},
  className: '',
};

FilterPills.propTypes = {
  text: PropTypes.string,
  isClickablePill: PropTypes.bool,
  onClickPill: PropTypes.func,
  className: PropTypes.string,
};

export default FilterPills;
