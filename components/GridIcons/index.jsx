/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import assets from '../../public/assets';
import styles from './styles.module.scss';

const GridIcons = ({ iconSrc, iconSize, title, route }) => {
  return (
    <div className="w-full  bg-gray-500 mb-10 text-center">
      <Link
        href="/doctors/[speciality]/[location]"
        as={`/doctors/${route}/all`}
      >
        <a className={styles.gridItem}>
          <div className="bg-blue-lighter h-20 w-20 sm:h-24 sm:w-24  sm:h-32 sm:w-32 rounded-full flex justify-center items-center mx-auto cursor-pointer">
            <img className={`${iconSize} w-12 h-12  sm:w-16 sm:h-20 ml-auto mr-auto `} src={iconSrc} alt="" />
          </div>
          <p className="text-center mt-3 text-navy-dark font-medium cursor-pointer  text-xs sm:text-lg ">
            {title}
          </p>
        </a>
      </Link>
    </div>
  );
};

GridIcons.defaultProps = {
  iconSrc: assets.primaryCare,
  iconSize: 'h-13',
  title: '',
  route: '/',
};

GridIcons.propTypes = {
  iconSrc: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  iconSize: PropTypes.string,
  title: PropTypes.string,
  route: PropTypes.string,
};

export default GridIcons;
