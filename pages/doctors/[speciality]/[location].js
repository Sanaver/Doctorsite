/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { isEmpty, size, find, lowerCase } from 'lodash';
import { useRouter } from 'next/router';
import { wrapper } from '../../../store';
import assets from '../../../public/assets';
import Util from '../../../utils/Util';
import constants from '../../../utils/constants';
import Layout from '../../../components/Layout';
import SearchForm from '../../../components/SearchForm';
import FilterProperties from '../../../components/FilterProperties';
import styles from '../../../styles/search.module.scss';
import {
  useGetDoctorSearch,
  getDoctorsListAction,
} from '../../../containers/DoctorsContainer';
import { useGetSearchMenuList } from '../../../containers/SearchContainer';
import { getLocations } from '../../../containers/LocationContainer';
import {
  useGetAllSpecialities,
  getAllSpecialitiesAction,
} from '../../../containers/SpecialitiesContainer';
import JsonLd from '../../../components/JsonLd';
import DoctorDetailsCard from '../../../components/DoctorDetailsCard';

// TODO : Might need count(pagination) and designation/location(form) from api
// TODO : "0 general physicians near...." - corresponding text if doctor/hosp spclty is selected.
// TODO : Placeholder image for no results found
const Doctors = () => {
  const {
    searchPageWrapper,
    searchPageBodyWrapper,
    searchPageListWrapper,
    searchPageWrapperSubtitle,
    searchPageFiltersList,
  } = styles;
  const router = useRouter();
  const locationsList = constants.LocationConstants;
  const { location, speciality } = router.query || {};

  // Search Initial value object
  const searchInitialValues = {
    location: Util.readableSlug(location) || '',
    locationSlug: Util.readableSlug(location) || '',
    searchedQuery: Util.readableSlug(speciality) || '',
    searchedQuerySlug: Util.readableSlug(speciality) || '',
  };

  // Filter UI Toggle
  const [showFilter, setShowFilter] = useState(false);
  const [searchFormInitialValues, setSearchFormInitialValues] = useState(
    searchInitialValues
  );
  const toggleFilterProperties = e => setShowFilter(!e);

  const [, doctorsList] = useGetDoctorSearch();
  const [doSearch] = useGetSearchMenuList();
  const [, allSpecialitiesList] = useGetAllSpecialities();

  // To set current speciality label from slug
  useEffect(() => {
    let obj = {
      ...searchFormInitialValues,
    };
    // Speciality
    if (!isEmpty(allSpecialitiesList)) {
      const currentSpec = find(allSpecialitiesList, ['slug', speciality]);
      const specKey =
        lowerCase(speciality) === 'all' ? '' : Util.readableSlug(speciality);
      obj = {
        ...obj,
        searchedQuery: currentSpec ? currentSpec.label : specKey,
        searchedQuerySlug: currentSpec ? currentSpec.slug : speciality || '',
      };
    }
    // Locations
    if (!isEmpty(locationsList)) {
      const currLoc = find(locationsList, ['slug', location]);
      const locationKey =
        lowerCase(location) === 'all' ? '' : Util.readableSlug(location);
      obj = {
        ...obj,
        location: currLoc ? currLoc.label : locationKey,
        locationSlug: currLoc ? currLoc.slug : location || '',
      };
    }
    // Call search API with label to populate search list
    doSearch({
      q: obj.searchedQuery,
      location: obj.location,
    });
    setSearchFormInitialValues(obj);
  }, [router.query]);

  // META Tags
  const metaSpec =
    searchFormInitialValues &&
      searchFormInitialValues.searchedQuery &&
      lowerCase(searchFormInitialValues.searchedQuery) !== 'all'
      ? searchFormInitialValues.searchedQuery
      : 'Doctor';
  const metaLoc =
    searchFormInitialValues &&
      searchFormInitialValues.location &&
      lowerCase(searchFormInitialValues.location) !== 'all'
      ? searchFormInitialValues.location
      : '';

  const valPlural = Util.valPlural(doctorsList);

  const title = `${size(doctorsList)} Best ${metaSpec}${valPlural} ${metaLoc ? `in ${metaLoc}` : ''
    }`;
  const description = `Looking for Best ${metaSpec}${valPlural} ${metaLoc ? `in ${metaLoc}` : ''
    }?`;

  const structuredData = doctorsList?.map(item => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: item?.name,
      image: item?.image
        ? item?.image
        : 'https://www.doczo.com/images/emptyDoctorDp.svg',
      telephone: item?.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: item?.address,
        addressLocality: item?.location,
        postalCode: '',
        addressCountry: 'IN',
      },
    };
  });

  return (
    <Layout title={title} description={description}>
      {structuredData?.map((item, i) => (
        <JsonLd key={i} data={item} />
      ))}
      {/* Search Form */}
      <SearchForm initialValues={searchFormInitialValues || {}} />

      <div className={`flex flex-col mt-24 ${searchPageWrapper}`}>
        {/* Filter Inputs */}
        <div className="flex mb-3 justify-between items-center">
          {!isEmpty(doctorsList) && (
            <h1 className={searchPageWrapperSubtitle}>
              {size(doctorsList)} Best {metaSpec}
              {valPlural} {metaLoc ? `near ${metaLoc}` : ''}
            </h1>
          )}
          {/* <FilterInputs
            isOpen={showFilter}
            toggleFilterProperties={toggleFilterProperties}
          /> */}
        </div>

        {/* Filter Properties */}
        {showFilter && <FilterProperties className="mb-8" />}

        {/* <div className={searchPageFiltersList}>
          <FilterPills text="Fee 200-400" className="mr-3 mb-3" />
          <FilterPills text="Female doctor" className="mr-3 mb-3" />
          <FilterPills text="Clear all filter" isClickablePill className="mb-3" />
        </div> */}

        {/* Filtered List */}
        <div className={searchPageBodyWrapper}>
          <div
            className={`flex flex-col flex-3 ${searchPageListWrapper} ${isEmpty(doctorsList) ? 'w-full' : ''
              }`}
          >
            {!isEmpty(doctorsList) ? (
              doctorsList.map(item => (
                <DoctorDetailsCard key={item._id} doctorDetails={item} />
              ))
            ) : (
              <div className="mx-auto">
                <img src={assets.noResultRed} alt="No results" />
                <p className="mt-3">No results found.</p>
              </div>
            )}
          </div>

          {/* Location */}
          <div className="w-2/5" />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const { location, speciality } = query;

    let filterQuery = {};
    if (location !== 'all') filterQuery = { ...filterQuery, location };
    if (speciality !== 'all') filterQuery = { ...filterQuery, speciality };

    await store.dispatch(getLocations());
    await store.dispatch(getAllSpecialitiesAction());

    return store.dispatch(getDoctorsListAction(filterQuery));
  }
);

export default Doctors;
