import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { lowerCase } from 'lodash';
import Button from '../Button';
import LocationDropdown from './LocationDropdown';
import SpecialityDropdown from './SpecialityDropdown';
import { useGetSearchMenuList } from '../../containers/SearchContainer';
import { useGetLocationsList } from '../../containers/LocationContainer';
import Util from '../../utils/Util';

const SearchForm = props => {
  const { type, initialValues = {} } = props;
  // const locations = constants.LocationConstants;
  const { locations } = useGetLocationsList();
  const [doSearch, searchMenuList, , searching] = useGetSearchMenuList();

  // On type search term
  // TODO : Add debounce
  const getSearchResults = (q, location) => doSearch({ q, location });

  const rowStyle = type === 'row' ? 'w-2/5 mr-4' : '';
  const customWrapStyles =
    type === 'row'
      ? 'px-5 lg:px-24 pt-3 fixed w-full bg-white'
      : 'justify-center';
  const buttonWidth = type === 'row' ? '15rem' : 'auto';

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues || {}}
      validationSchema={Yup.object().shape({
        location: Yup.string(),
        locationSlug: Yup.string(),
        searchedQuery: Yup.string(),
        searchedQuerySlug: Yup.string(),
      })}
      onSubmit={values => {
        Util.scrollToTop();
        const locationKey = values.locationSlug || 'all';
        if (values.searchedQuerySlug === 'all_hospitals') {
          Router.push('/hospitals/[location]', `/hospitals/${locationKey}`);
        } else {
          const speciality =
            lowerCase(values.searchedQuerySlug)?.replace(/\s/g, '-') || 'all';
          Router.push(
            '/doctors/[speciality]/[location]',
            `/doctors/${speciality}/${locationKey}`
          );
        }
      }}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form className={`flex flex-${type} ${customWrapStyles} `}>
            <LocationDropdown
              list={locations}
              value={values.location}
              slug={values.locationSlug}
              setFieldValue={setFieldValue}
              dropdownWrapperstyles={rowStyle}
            />
            <SpecialityDropdown
              list={searchMenuList}
              value={values.searchedQuery}
              setFieldValue={setFieldValue}
              loading={searching}
              selectedLocation={values.location}
              fetchSearchResults={getSearchResults}
              dropdownWrapperstyles={rowStyle}
            />
            <Button label="Search" width={buttonWidth} />
          </Form>
        );
      }}
    </Formik>
  );
};

SearchForm.defaultProps = {
  type: 'row',
  initialValues: {},
};

SearchForm.propTypes = {
  type: PropTypes.oneOf(['row', 'col']),
  initialValues: null,
};

export default SearchForm;
