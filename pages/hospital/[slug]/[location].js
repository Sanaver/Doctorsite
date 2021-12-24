import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { size, isEmpty, filter, join } from 'lodash';
import assets from '../../../public/assets';
import { wrapper } from '../../../store';
import Layout from '../../../components/Layout';
import SearchForm from '../../../components/SearchForm';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import HospitalDetailsOverview from '../HospitalDetailsOverview';
import HospitalDetailsDoctors from '../HospitalDetailsDoctors';
import {
  useGetHospitalDetails,
  getHospitalDetailsAction,
} from '../../../containers/HospitalsContainer';
import Util from '../../../utils/Util';
import { getLocations } from '../../../containers/LocationContainer';
import { getAllSpecialitiesAction } from '../../../containers/SpecialitiesContainer';
import styles from '../styles.module.scss';
import HospitalsNearbyCard from '../../../components/HospitalsNearbyCard';


const Hospital = () => {
  const {
    hospitalDetailsWrapper,
    hospitalDetailsSummaryImg,
    hospitalDetailsSummaryData,
    hospitalDetailsSummaryTitle,
    hospitalDetailsNearbySection,
    hospitalDetailsNearbyDivider,
    callbtn,
  } = styles;
  const [, hospitalDetailsData] = useGetHospitalDetails();
  const {
    name,
    phone,
    image,
    website,
    address,
    about,
    slug,
    specialities,
    location,
    doctors,
    nearbyHospitals,
    latitude,
    longitude,
  } = hospitalDetailsData || {};

  const [filteringSpeciality, setFilteringSpeciality] = useState('All Doctors');
  const [filteredDoctorsList, setFilteredDoctorsList] = useState([]);
  const [showOverview, setShowOverview] = useState(false);

  // Filter Doctors list
  const onFilterDoctors = (selectedSpec = 'All Doctors') => {
    const filteredList =
      selectedSpec !== 'All Doctors'
        ? filter(doctors, ['speciality', selectedSpec])
        : doctors;
    setFilteringSpeciality(selectedSpec);
    setFilteredDoctorsList(filteredList);
  };

  // For Doctor's count based on speciality
  const getDoctorCountForSpeciality = spec =>
    spec !== 'All Doctors'
      ? size(filter(doctors, ['speciality', spec]))
      : size(doctors);

  useEffect(() => {
    if (!isEmpty(doctors)) setFilteredDoctorsList(doctors);
  }, [doctors]);

  return (
    <Layout
      title={`Best Hospital in ${location} | ${name} | Doczo`}
      description={`Looking for best hospital near ${location}? Find and book online consultation with the best doctors in ${name}, ${address}. Specialities: ${join(
        specialities,
        ', '
      )}`}
    >
      {/* Search Form */}
      <SearchForm />

      <div className={hospitalDetailsWrapper}>
        {/* Summary */}
        <div className="flex mb-8">
          <Image
            className={hospitalDetailsSummaryImg}
            src={image || assets.doctorImageEmpty}
            alt={website}
          />
          <div className={hospitalDetailsSummaryData}>
            <div>
              <h1 className={hospitalDetailsSummaryTitle}>{name}</h1>
              <h2 className="mb-1">
                {address}.{'  '}
                <Link href="/TODO">
                  <a className="underline text-blue"> Change Location</a>
                </Link>
              </h2>
              <p className="text-navy-lighter font-medium mb-2">
                {size(doctors)} Doctor{Util.valPlural(doctors)}{' '}
                <span className="px-2">&#5867;</span> {size(specialities)}{' '}
                {size(specialities) === 1 ? 'Speciality' : 'Specialities'}
              </p>
            </div>
            <a href={`tel:${phone}`}>
              <Button className={callbtn} icon="callnow" label="Call now" />
            </a>
          </div>
        </div>

        {/* Tabs */}
        <ul className="flex border-b border-snow font-bold text-xl text-navy-lighter pt-8 mb-6">
          <li
            className={`-mb-px mr-1 py-2 px-6 cursor-pointer ${!showOverview &&
              'border-b-2 border-blue text-blue'}`}
            onClick={() => setShowOverview(false)}
          >
            DOCTORS
          </li>
          <li
            className={`mr-1 py-2 px-6 cursor-pointer ${showOverview &&
              'border-b-2 border-blue text-blue'}`}
            onClick={() => setShowOverview(true)}
          >
            OVERVIEW
          </li>
        </ul>

        {/* Content */}
        {showOverview ? (
          <HospitalDetailsOverview
            about={about}
            address={address}
            specialities={specialities}
            latitude={latitude}
            longitude={longitude}
          />
        ) : (
          <HospitalDetailsDoctors
            specialities={specialities}
            selectedSpeciality={filteringSpeciality}
            doctors={filteredDoctorsList}
            onFilterDoctors={onFilterDoctors}
            hospitalName={`${name} ${location && ', '} ${location}`}
            getDoctorCountForSpeciality={getDoctorCountForSpeciality}
          />
        )}

        <div>
          <h3 className="font-extrabold text-center text-2xl">
            OTHER HOSPITALS NEARBY
          </h3>
          <p
            className={`${hospitalDetailsNearbyDivider} mx-auto border-blue border-2 mt-3 border-solid`}
          />

          <div className="flex justify-between mt-10 mb-16">
            {nearbyHospitals?.map(nearby => (
              <HospitalsNearbyCard
                wrapperclass={hospitalDetailsNearbySection}
                details={nearby}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const { slug, location } = query;

    await store.dispatch(getLocations());
    await store.dispatch(getAllSpecialitiesAction());

    return store.dispatch(getHospitalDetailsAction(slug));
  }
);

export default Hospital;
