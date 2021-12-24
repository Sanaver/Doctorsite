import { useDispatch, useSelector } from 'react-redux';
import {
  getHospitalsSearchAction,
  getHospitalDetailsAction,
} from '../../store/Hospitals';

const useGetHospitalsSearch = () => {
  const dispatch = useDispatch();

  // Query : { location }
  const getHospitalsList = query => dispatch(getHospitalsSearchAction(query));

  const {
    hospitalsSearchData,
    hospitalsSearchError,
    hospitalsSearchLoading,
  } = useSelector(state => state.hospitals);

  return [
    getHospitalsList,
    hospitalsSearchData,
    hospitalsSearchError,
    hospitalsSearchLoading,
  ];
};

const useGetHospitalDetails = () => {
  const dispatch = useDispatch();

  // Query : slug
  const getHospitalDetails = slug => dispatch(getHospitalDetailsAction(slug));

  const {
    hospitalDetailsData,
    hospitalDetailsError,
    hospitalDetailsLoading,
  } = useSelector(state => state.hospitals);

  return [
    getHospitalDetails,
    hospitalDetailsData,
    hospitalDetailsError,
    hospitalDetailsLoading,
  ];
};

export {
  useGetHospitalsSearch,
  getHospitalsSearchAction,
  useGetHospitalDetails,
  getHospitalDetailsAction,
};
