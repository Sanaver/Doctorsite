import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import assets from '../../public/assets';

const FilterInputs = ({ isOpen, toggleFilterProperties }) => {
  const {
    filterInputsWrapper,
    filterSortInput,
    filterSortIcon,
    filterInputIcon,
    filterSortSelect,
  } = styles;
  const { sortArrows, filterNavy, filterWhite } = assets;
  return (
    <div className={filterInputsWrapper}>
      <div className={filterSortInput}>
        <img className={filterSortIcon} src={sortArrows} alt="Sort" />
        <select className={filterSortSelect} name="sort" id="select">
          <option value="relevance">Relevance</option>
          <option value="low">Price : Low to High</option>
          <option value="high">Price : High to Low</option>
          <option value="popul">Popularity</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={() => toggleFilterProperties(isOpen)}
        className={`${filterInputIcon} ${
          isOpen ? 'bg-navy' : 'bg-snow-lighter'
        }`}
      >
        <img src={isOpen ? filterWhite : filterNavy} alt="" />
      </button>
    </div>
  );
};

FilterInputs.defaultProps = {
  isOpen: false,
  toggleFilterProperties: () => {},
};

FilterInputs.propTypes = {
  isOpen: PropTypes.bool,
  toggleFilterProperties: PropTypes.func,
};

export default FilterInputs;
