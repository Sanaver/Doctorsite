/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../store/Locations';

const useGetLocationsList = () => {
  const dispatch = useDispatch();
  const getLocationsList = query => dispatch(getLocations(query));

  const { locations, isLocationsLoading } = useSelector(
    state => state.locations
  );

  return { getLocationsList, locations, isLocationsLoading };
};

export { useGetLocationsList, getLocations };
