/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorsListAction } from '../../store/Doctors';

const useGetDoctorSearch = () => {
  const dispatch = useDispatch();

  // Query : { speciality, location }
  const getDoctorsList = query => dispatch(getDoctorsListAction(query));

  const doctorsSearchError = null;
  const { doctorsSearchData, isDoctorsSearchLoading } = useSelector(
    state => state.doctors
  );

  return [
    getDoctorsList,
    doctorsSearchData,
    doctorsSearchError,
    isDoctorsSearchLoading,
  ];
};

export { useGetDoctorSearch, getDoctorsListAction };
