import { useDispatch, useSelector } from 'react-redux';
import { getAllSpecialitiesAction } from '../../store/Specialities';

const useGetAllSpecialities = () => {
  const dispatch = useDispatch();
  const getAllSpecialities = () => dispatch(getAllSpecialitiesAction());

  const {
    specialitiesList,
    specialitiesListError,
    specialitiesListLoading,
  } = useSelector(state => state.specialities);

  return [
    getAllSpecialities,
    specialitiesList,
    specialitiesListError,
    specialitiesListLoading,
  ];
};

export { useGetAllSpecialities, getAllSpecialitiesAction };
