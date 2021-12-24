/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

const ListBox = ({ locationLabel, locationRoute, dropList }) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const boxOpenHandler = () => setIsBoxOpen(prevState => !prevState);

  return (
    <div className="border-snow border-2 m-4 rounded-md">
      <div
        className={`flex justify-between items-center cursor-pointer p-5 ${
          isBoxOpen ? `mb-5` : ''
        }`}
        onClick={boxOpenHandler}
      >
        <h3 className="text-navy font-bold">{locationLabel}</h3>
        {isBoxOpen ? <UpOutlined /> : <DownOutlined />}
      </div>
      {isBoxOpen &&
        dropList.map(spec => {
          return (
            <Link
              key={spec.slug}
              href="/doctors/[speciality]/[location]"
              as={`/doctors/${spec.slug}/${locationRoute}`}
            >
              <a className="block mb-3 mx-5 cursor-pointer text-blue font-medium text-sm hover:underline">
                {locationLabel} {spec.label}
              </a>
            </Link>
          );
        })}
    </div>
  );
};

ListBox.defaultProps = {
  locationLabel: '',
  locationRoute: '',
  dropList: {},
};

ListBox.propTypes = {
  locationLabel: PropTypes.string,
  locationRoute: PropTypes.string,
  dropList: null,
};

export default ListBox;
