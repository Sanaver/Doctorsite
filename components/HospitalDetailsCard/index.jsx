import React from 'react';
import PropTypes from 'prop-types';
import { size, lowerCase } from 'lodash';
import assets from '../../public/assets';
import Button from '../Button';
import styles from './styles.module.scss';
import Image from '../Image';
import Link from 'next/link';

const HospitalDetailsCard = ({ hospitalDetails, showCallNow }) => {
  const {
    hospitalCardWrapper,
    hospitalCardImageWrapper,
    hospitalCardDetails,
    hospitalCardAction,
    fontHospitalTitle,
    fontHospitalFeeTitle,
    callbtn,
  } = styles;

  const {
    image,
    name,
    doctorsCount,
    specialities,
    address,
    website,
    phone = '',
    slug,
    location,
  } = hospitalDetails || {};

  const gotoHospitalPage = `/hospital/${slug}/${lowerCase(location) || 'all'}`;

  return (
    <div className={`${hospitalCardWrapper}`}>
      {/* Profile Image */}
      <div className={hospitalCardImageWrapper}>
        <Image src={image || assets.doctorImageEmpty} alt={website} />
      </div>

      <div className={`flex flex-col flex-1 text-navy ${hospitalCardDetails}`}>
        {/* Hospital Name */}
        <h2 className={`font-extrabold ${fontHospitalTitle} mb-1`}>
          <Link href={gotoHospitalPage}>
            <a>{name || 'Hospital'}</a>
          </Link>
        </h2>

        {/* doctors/specialities */}
        <p className="text-navy-lighter font-medium mb-2">
          {doctorsCount} doctors <span className="px-2">&#5867;</span>
          {size(specialities)} specialities
        </p>

        {/* Fee */}
        {/* <p className={`"font-medium mb-2 ${fontHospitalFeeTitle}"`}>
          ₹250 - ₹560 Consultatin fees
        </p> */}

        {/* Address */}
        <p className="mt-1">{address}</p>
      </div>

      {/* Call now button */}
      {showCallNow && (
        <div className={hospitalCardAction}>
          <a href={`tel:${phone}`}>
            <Button className={callbtn} icon="callnow" label="Call now" />
          </a>
        </div>
      )}
    </div>
  );
};

HospitalDetailsCard.defaultProps = {
  hospitalDetails: {},
  showCallNow: true,
};

HospitalDetailsCard.propTypes = {
  hospitalDetails: null,
  showCallNow: PropTypes.bool,
};

export default HospitalDetailsCard;
