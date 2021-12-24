import React from 'react';
import PropTypes from 'prop-types';
import assets from '../../public/assets';
import Button from '../Button';
import styles from './styles.module.scss';
import Image from '../Image';

// TODO : Currency
// TODO : Display more than one hospitals for doctor
const DoctorDetailsCard = ({
  doctorDetails,
  showCallNow = true,
  isPreview,
}) => {
  const {
    doctorCardPreviewWrap,
    doctorCardImageWrapper,
    doctorCardDetails,
    doctorCardAction,
    fontDoctorTitle,
    callbtn,
  } = styles;

  // Doctor details
  const {
    image,
    name = '',
    speciality = '',
    experience,
    qualifications,
    hospital = '',
    location = '',
    phone = '',
  } = doctorDetails || {};

  const imageAlt = `${speciality} ${
    speciality && location ? 'in' : ''
  } ${location} ${speciality || location ? ' - ' : ''} ${name || 'Doctor'}`;

  const classesUsedForPreview = `px-5 py-5 border-2 rounded-lg mb-10 ${doctorCardPreviewWrap}`;

  return (
    <div
      className={`flex border-snow border-solid ${
        isPreview ? classesUsedForPreview : 'border-b-2 px-2 py-8'
      }`}
    >
      {/* Profile Image */}
      <div className={doctorCardImageWrapper}>
        <Image src={image || assets.doctorImageEmpty} alt={imageAlt} />
      </div>

      <div className={`flex flex-col flex-1 text-navy ${doctorCardDetails}`}>
        {/* Name */}
        <h2 className={`font-extrabold capitalize ${fontDoctorTitle} mb-1`}>
          {name || 'Anonymous'}
        </h2>

        {/* Designation/Year */}
        <p className="text-navy-lighter font-medium mb-2">
          {speciality}
          {speciality && experience && <span className="px-2">&#5867;</span>}
          {experience && `${experience} Years of experience`}
        </p>

        {/* Fee */}
        {qualifications && (
          <p
            className={`${!isPreview && 'text-navy-lighter'} font-medium mb-2`}
          >
            {qualifications}
          </p>
        )}

        {/* Address */}
        {!isPreview && (
          <p className="mt-1">
            <span className="underline font-bold">{hospital}</span>
            {hospital && location && ` - `}
            {location}
          </p>
        )}
      </div>

      {/* Call now button */}
      {showCallNow && (
        <div className={doctorCardAction}>
          <a href={`tel:${phone}`}>
            <Button className={callbtn} icon="callnow" label="Call now" />
          </a>
        </div>
      )}
    </div>
  );
};

DoctorDetailsCard.defaultProps = {
  doctorDetails: {},
  showCallNow: true,
  isPreview: false,
};

DoctorDetailsCard.propTypes = {
  doctorDetails: null,
  showCallNow: PropTypes.bool,
  isPreview: PropTypes.bool,
};

export default DoctorDetailsCard;
