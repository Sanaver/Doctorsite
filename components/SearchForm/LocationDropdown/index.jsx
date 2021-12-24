/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { isEmpty, filter, includes, lowerCase } from 'lodash';
import assets from '../../../public/assets';
import styles from '../styles.module.scss';
import Input from '../../Input';


const LocationDropdown = ({
  list = [],
  value,
  slug,
  setFieldValue,
  dropdownWrapperstyles,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [locationList, setLocationList] = useState(list);
  const { dropdownWrapper, dropdownListWrapper, dropdownRightIcon } = styles;
  const { icLocation, myLocation,Arrow } = assets;

  // Close Menu
  const closeMenu = () => {
    if (!slug) setFieldValue('location', '');
    setTimeout(() => {
      setShowMenu(false);
    }, 200);
  };

  // Select menu item
  const onSelectLocation = item => {
    setFieldValue('location', item.label);
    setFieldValue('locationSlug', item.slug);
  };

  // On change input value
  const handleChangeLocation = e => {
    setFieldValue('location', e.target.value);
    setFieldValue('locationSlug', '');

    // Search list
    const searchTerm = e.target.value;
    if (searchTerm) {
      const filteredList = filter(list, o =>
        includes(lowerCase(o.label), lowerCase(searchTerm))
      );
      setLocationList(filteredList);
    } else setLocationList(list);
  };

  return (
    <div className={`${dropdownWrapper} ${dropdownWrapperstyles}`}>
      {/* Location Dropdown Inputs */}
      <div className="relative w-full">
        <Field
          placeholder="Enter Location"
          component={Input}
          name="location"
          withIcon
          iconSrc={icLocation}
          padding="pl-2 pl-10 pr-10"
          formClasses="mb-5"
          onFocus={() => setShowMenu(true)}
          onBlur={() => closeMenu()}
          autoComplete="off"
          onChange={e => handleChangeLocation(e)}
          value={value}
        />
        <div className=' hidden sm:block' >
        <img src={myLocation} className={dropdownRightIcon} alt="location" />
        </div>
        <div className=' block sm:hidden' >
        <svg xmlns="http://www.w3.org/2000/svg"  className={dropdownRightIcon} width="12" height="12" viewBox="0 0 12 12">
  <g id="Arrow" transform="translate(11.827 0.274) rotate(90)">
    <path id="Path_258" data-name="Path 258" d="M4.239,8.955.213,5.161a1.246,1.246,0,0,1,0-1.394L4.239,0" transform="translate(8.176 10.423) rotate(180)" fill="none" stroke="#007aff" stroke-linecap="round" stroke-width="1"/>
    <rect id="Rectangle_1148" data-name="Rectangle 1148" width="12" height="12" transform="translate(-0.274 -0.173)" fill="none"/>
  </g>
</svg>
</div>
      </div>

      {/* Location Dropdown List */}
      {showMenu && (
        <div className={dropdownListWrapper}>
          {!isEmpty(locationList) && (
            <ul>
              {locationList.map(item => {
                return (
                  <li key={item.slug} onClick={() => onSelectLocation(item)}>
                    <span className="font-bold text-navy-dark block">
                      {item.label}
                    </span>
                    <span className="text-navy-lighter text-xs">
                      {item.sub_label}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

LocationDropdown.defaultProps = {
  list: [],
  value: '',
  slug: '',
  setFieldValue: () => {},
  dropdownWrapperstyles: '',
};

LocationDropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  slug: PropTypes.string,
  setFieldValue: PropTypes.func,
  dropdownWrapperstyles: PropTypes.string,
};

export default LocationDropdown;
