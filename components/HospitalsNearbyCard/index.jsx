import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from '../Image';

const HospitalsNearbyCard = ({ details, wrapperclass }) => {
  const {
    hospitalsNearbyCardWrapper,
    hospitalsNearbyCardImage,
    hospitalsNearbyCardDetails,
  } = styles;
  const {
    image,
    name,
    slug,
    doctors_count,
    specialities_count,
    address,
    website,
    location = "all"
  } = details;

  return (
    <Link href={`/hospital/${slug}/${location}`}>
      <a className={`${hospitalsNearbyCardWrapper} ${wrapperclass}`}>
        <Image className={hospitalsNearbyCardImage} src={image} alt={website} />
        <div className={hospitalsNearbyCardDetails}>
          <h5 className="font-extrabold text-xl mb-1">{name}</h5>
          <p className="mb-4">
            {doctors_count} doctors {specialities_count} specialities
          </p>
          <p className="text-navy-lighter">{address}</p>
        </div>
      </a>
    </Link>
  );
};

HospitalsNearbyCard.defaultProps = {
  details: {},
  wrapperclass: '',
};

HospitalsNearbyCard.propTypes = {
  details: null,
  wrapperclass: PropTypes.string,
};
export default HospitalsNearbyCard;
