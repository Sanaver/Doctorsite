import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FilterProperties = ({ className }) => {
  // Styles
  const {
    filterPropertiesWrapper,
    filterPropertiesTitle,
    filterPropertiesBody,
    filterPropertiesSection,
    filterPropertiesSectionTitle,
    filterPropertiesSectionCheckbox,
  } = styles;

  const filterArray = [
    {
      title: 'Gender:',
      fields: [
        { label: 'Male doctor', value: '' },
        { label: 'Female doctor', value: '' },
        { label: 'Other doctor', value: '' },
      ],
    },
    {
      title: 'Experience:',
      fields: [
        { label: '1-10 years', value: '' },
        { label: '11-20 years', value: '' },
        { label: '20+ years', value: '' },
      ],
    },
    {
      title: 'Fees:',
      fields: [
        { label: '1-200', value: '' },
        { label: '201-400', value: '' },
        { label: '401-600', value: '' },
        { label: '600 and above', value: '' },
      ],
    },
  ];

  return (
    <div className={`${filterPropertiesWrapper} ${className}`}>
      <div className={filterPropertiesTitle}>Filter by</div>
      <div className={filterPropertiesBody}>
        {filterArray.map(sec => (
          <div key={sec.title} className={filterPropertiesSection}>
            <h4 className={filterPropertiesSectionTitle}>{sec.title}</h4>
            {sec.fields.map(field => (
              <p className={filterPropertiesSectionCheckbox} key={field.value}>
                {field.label}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

FilterProperties.defaultProps = {
  className: '',
};

FilterProperties.propTypes = {
  className: PropTypes.string,
};

export default FilterProperties;
