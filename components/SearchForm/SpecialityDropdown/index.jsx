/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { isEmpty } from 'lodash';
import { LoadingOutlined } from '@ant-design/icons';
import assets from '../../../public/assets';
import styles from '../styles.module.scss';
import Input from '../../Input';

const SpecialityDropdown = ({
  list,
  value,
  setFieldValue,
  loading,
  selectedLocation,
  fetchSearchResults,
  dropdownWrapperstyles,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    dropdownWrapper,
    dropdownListWrapper,
    dropdownRightIcon,
    searchDropdownTitle,
    searchDropdownImage,
  } = styles;
  const { doctors, hospitals, specialities, symptoms } = list || {};

  // Close Menu
  const closeMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 200);
  };

  // On change input value / Select menu item
  const onClickListItem = (e, searchSlug) => {
    e.preventDefault();
    setFieldValue('searchedQuery', searchSlug.label);
    setFieldValue('searchedQuerySlug', searchSlug.slug);
  };

  const handleSearchChange = e => {
    e.preventDefault();
    setFieldValue('searchedQuery', e.target.value);
    setFieldValue('searchedQuerySlug', '');
    fetchSearchResults(e.target.value, selectedLocation);
  };

  // Custom array if location is selected
  const locationSearchItems = selectedLocation
    ? [
        { slug: 'all', label: `All Doctors in ${selectedLocation}` },
        {
          slug: 'all_hospitals',
          label: `All Hospitals in ${selectedLocation}`,
        },
      ]
    : [];

  // Layout for Hospitals/Doctors
  const searchMenuWithTitle = (title, arr = [], showImage = false) =>
    !isEmpty(arr) && (
      <>
        <li className={searchDropdownTitle}>{title}</li>
        {arr.map(o => (
          <li
            className="flex"
            key={`${title}_${o.slug}`}
            onClick={e => onClickListItem(e, o)}
          >
            {showImage && (
              <img
                src={o.image || assets.doctorImageEmpty}
                alt=""
                className={searchDropdownImage}
              />
            )}
            <div>
              <p className="text-base text-navy">{o.label}</p>
              {o.sub_label && (
                <p className="text-navy-lighter text-sm">{o.sub_label}</p>
              )}
            </div>
          </li>
        ))}
      </>
    );

  // Layout for Speciality/Symptom
  const searchMenuWithoutTitle = (category, arr = []) =>
    !isEmpty(arr) &&
    arr.map((o, i) => (
      <li
        key={`${category}_${o.slug}_${i}`}
        className="flex justify-between"
        onClick={e => onClickListItem(e, o)}
      >
        <p className="text-base text-navy">{o.label}</p>
        <p className="text-navy-lighter text-sm">{category}</p>
      </li>
    ));

  return (
    <div className={`${dropdownWrapper} ${dropdownWrapperstyles}`}>
      {/* Location Dropdown Inputs */}
      <div className="relative w-full">
        <Field
          placeholder="Search doctor, hospital, speciality"
          component={Input}
          name="searchDoctorsOrOthers"
          withIcon
          iconSrc={assets.search}
          padding="pl-2 pl-10 pr-10"
          formClasses="mb-5"
          onFocus={() => setShowMenu(true)}
          onBlur={() => closeMenu()}
          autoComplete="off"
          //  TODO
          onChange={e => handleSearchChange(e, setFieldValue)}
          value={value}
        />
        {loading && <LoadingOutlined className={dropdownRightIcon} />}
      </div>

      {/* Location Dropdown List */}
      {showMenu && (
        <div className={dropdownListWrapper}>
          <ul>
            {specialities && searchMenuWithoutTitle('Speciality', specialities)}
            {symptoms && searchMenuWithoutTitle('Symptom', symptoms)}
            {/* {doctors && searchMenuWithTitle('Doctors', doctors, true)} */}
            {/* {hospitals && searchMenuWithTitle('Hospitals/Clinics', hospitals)} */}
            {selectedLocation && searchMenuWithTitle('', locationSearchItems)}
          </ul>
        </div>
      )}
    </div>
  );
};

SpecialityDropdown.defaultProps = {
  list: {},
  value: '',
  setFieldValue: () => {},
  loading: false,
  selectedLocation: '',
  fetchSearchResults: () => {},
  dropdownWrapperstyles: '',
};

SpecialityDropdown.propTypes = {
  list: null,
  value: PropTypes.string,
  setFieldValue: PropTypes.func,
  loading: PropTypes.bool,
  selectedLocation: PropTypes.string,
  fetchSearchResults: PropTypes.func,
  dropdownWrapperstyles: PropTypes.string,
};

export default SpecialityDropdown;
