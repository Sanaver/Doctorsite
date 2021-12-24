/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { isEmpty, size, find, lowerCase } from 'lodash';
import { useRouter } from 'next/router';
import styles from '../../styles/search.module.scss';
import assets from '../../public/assets';
import Util from '../../utils/Util';
import constants from '../../utils/constants';
import Layout from '../../components/Layout';
import SearchForm from '../../components/SearchForm';
import { wrapper } from '../../store';
import {
  useGetHospitalsSearch,
  getHospitalsSearchAction,
} from '../../containers/HospitalsContainer';
import { getLocations, location } from '../../containers/LocationContainer';
import { getAllSpecialitiesAction } from '../../containers/SpecialitiesContainer';
import { useGetSearchMenuList } from '../../containers/SearchContainer';
import HospitalDetailsCard from '../../components/HospitalDetailsCard';

// TODO : Might need count(pagination) and designation/location(form) from api
// TODO : "0 general physicians near...." - corresponding text if doctor/hosp spclty is selected.
// TODO : Placeholder image for no results found
const Hospitals = () => {
  const {
    searchPageWrapper,
    searchPageBodyWrapper,
    searchPageListWrapper,
    searchPageWrapperSubtitle,
    searchPageFiltersList,
  } = styles;
  const router = useRouter();

  // Location values (hardcoded)
  const locationsList = constants.LocationConstants;

  const { location } = router.query || {};

  // Search Initial value object
  const searchInitialValues = {
    location: Util.readableSlug(location) || '',
    locationSlug: Util.readableSlug(location) || '',
    searchedQuery: `All Hospitals in ${Util.readableSlug(location)}`,
    searchedQuerySlug: 'all_hospitals',
  };

  const [searchFormInitialValues, setSearchFormInitialValues] = useState(
    searchInitialValues
  );

  const [, hospitalsList] = useGetHospitalsSearch();
  const [doSearch] = useGetSearchMenuList();

  // To set current speciality label from slug
  useEffect(() => {
    let obj = {
      ...searchFormInitialValues,
    };
    // Locations
    if (!isEmpty(locationsList)) {
      const currLoc = find(locationsList, ['slug', location]);
      const locationKey =
        lowerCase(location) === 'all' ? '' : Util.readableSlug(location);
      obj = {
        ...obj,
        location: currLoc ? currLoc.label : locationKey,
        locationSlug: currLoc ? currLoc.slug : location || '',
        searchedQuery: `All Hospitals in ${Util.readableSlug(
          currLoc ? currLoc.label : locationKey
        )}`,
      };
    }
    // Call search API with label to populate search list
    doSearch({
      location: obj.location,
    });
    setSearchFormInitialValues(obj);
  }, [router.query]);

  // META Tags
  const metaLoc =
    searchFormInitialValues &&
      searchFormInitialValues.location &&
      lowerCase(searchFormInitialValues.location) !== 'all'
      ? searchFormInitialValues.location
      : '';

  const valPlural = Util.valPlural(hospitalsList);

  const title = `${size(hospitalsList)} Best Hospital${valPlural} ${metaLoc ? `in ${metaLoc}` : ''
    }`;
  const description = `Looking for Best Hospital${valPlural} ${metaLoc ? `in ${metaLoc}` : ''
    }?`;

  return (
    <Layout title={title} description={description}>
      {/* Search Form */}
      <SearchForm initialValues={searchFormInitialValues || {}} />

      <div className={`flex flex-col ${searchPageWrapper}`}>
        {/* Filter Inputs */}
        <div className="flex mb-3 justify-between items-center mt-24">
          {!isEmpty(hospitalsList) && (
            <h1 className={searchPageWrapperSubtitle}>
              {size(hospitalsList)} Best Hospital{valPlural}
              {metaLoc ? ` near ${metaLoc}` : ''}
            </h1>
          )}
        </div>

        {/* Filtered List */}
        <div className={searchPageBodyWrapper}>
          <div
            className={`flex flex-col flex-3 ${searchPageListWrapper} ${isEmpty(hospitalsList) ? 'w-full' : ''
              }`}
          >
            {!isEmpty(hospitalsList) ? (
              hospitalsList.map(item => (
                <HospitalDetailsCard key={item._id} hospitalDetails={item} />
              ))
            ) : (
              <div className="mx-auto">
                <img src={assets.noResultRed} alt="No results" />
                <p className="mt-3">No results found.</p>
              </div>
            )}
          </div>

          {/* Location */}

        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const { location } = query;

    await store.dispatch(getLocations());
    await store.dispatch(getAllSpecialitiesAction());

    return store.dispatch(getHospitalsSearchAction({ location }));
  }
);

export default Hospitals;
