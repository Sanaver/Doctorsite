import React, { useState } from 'react';
import { size, take } from 'lodash';
import styles from '../../../styles/search.module.scss';
import Util from '../../../utils/Util';
import Button from '../../../components/Button';
import DoctorDetailsCard from '../../../components/DoctorDetailsCard';
import FilterPills from '../../../components/FilterPills';

const HospitalDetailsDoctors = ({
  specialities = [],
  selectedSpeciality,
  doctors = [],
  onFilterDoctors,
  hospitalName,
  getDoctorCountForSpeciality = () => {},
}) => {
  const { searchPageWrapperSubtitle, searchPageFiltersList } = styles;

  const [isShowMore, setIsShowMore] = useState(false);

  const valPlural = Util.valPlural(doctors);

  const getShowingSpecialities = isShowMore
    ? specialities
    : take(specialities, 9);

  return (
    <div className="pt-6">
      <div className="mb-10">
        <h2 className="mb-3 font-bold text-xl">Show doctor by specialities</h2>

        <div className={searchPageFiltersList}>
          <FilterPills
            text={`All Doctors (${getDoctorCountForSpeciality('All Doctors')})`}
            isClickablePill
            onClickPill={() => onFilterDoctors('All Doctors')}
            className={
              selectedSpeciality === 'All Doctors'
                ? 'solidBtnPill_active'
                : 'solidBtnPill'
            }
          />
          {getShowingSpecialities.map(spec => (
            <FilterPills
              key={spec}
              text={`${spec} (${getDoctorCountForSpeciality(spec)})`}
              isClickablePill
              onClickPill={() => onFilterDoctors(spec)}
              className={
                selectedSpeciality === spec
                  ? 'solidBtnPill_active'
                  : 'solidBtnPill'
              }
            />
          ))}
          {size(specialities) > 9 && (
            <Button
              disablePresetTheme
              className="text-blue underline"
              label={isShowMore ? 'Show less' : `Show more`}
              onClick={() => setIsShowMore(!isShowMore)}
            />
          )}
        </div>
      </div>

      <h1 className={`${searchPageWrapperSubtitle} mb-12`}>
        {size(doctors)}{' '}
        {selectedSpeciality !== 'All Doctors' ? selectedSpeciality : 'doctor'}
        {valPlural} in {hospitalName}
      </h1>

      <div className="flex flex-wrap justify-between">
        {doctors.map((doc, i) => (
          <DoctorDetailsCard
            key={`doctors_${i}`}
            isPreview
            showCallNow={false}
            doctorDetails={doc}
          />
        ))}
      </div>
    </div>
  );
};
export default HospitalDetailsDoctors;
