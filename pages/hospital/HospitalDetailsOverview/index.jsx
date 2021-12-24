import React from 'react';
import { ceil, divide, size, chunk } from 'lodash';
import styles from '../styles.module.scss';

const HospitalDetailsOverview = ({
  about,
  address,
  specialities,
  latitude,
  longitude,
}) => {
  const { hospitalDetailsOverviewTitle, hospitalDetailsOverviewData } = styles;

  const halves = ceil(divide(size(specialities), 2));

  const specChunks = chunk(specialities, [halves]);

  const markersList = [{ latitude, longitude }];

  return (
    <div className="pt-6">
      <div className="flex mb-16">
        <h3 className={hospitalDetailsOverviewTitle}>About the hospital</h3>
        <p className={hospitalDetailsOverviewData}>{about}</p>
      </div>

      <div className="flex mb-16">
        <h3 className={hospitalDetailsOverviewTitle}>Hospital Location</h3>
        <div className={hospitalDetailsOverviewData}>
   
          <div className="pl-6">
            <p className="mb-3">{address}</p>
            {/* <Link> */}
            <a
              className="underline text-blue"
              href={`https://maps.google.com?q=${latitude},${longitude}`}
            >
              Get directions
            </a>
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className="flex mb-16">
        <h3 className={hospitalDetailsOverviewTitle}>Specialities</h3>
        <div className={hospitalDetailsOverviewData}>
          {specChunks.map((mainArr, i) => (
            <div
              className="flex flex-1 flex-col"
              key={`specialities_level_1_${i}`}
            >
              {mainArr.map((subArr, j) => (
                <p className="mb-2" key={`specialities_level_2_${j}`}>
                  {subArr}
                </p>
              ))}
            </div>
          ))}
          <div className="flex flex-grow" />
        </div>
      </div>
    </div>
  );
};
export default HospitalDetailsOverview;
