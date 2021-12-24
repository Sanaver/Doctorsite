import { useDispatch, useSelector } from 'react-redux';
import { getSearchListAction } from '../../store/Search/actions';

const useGetSearchMenuList = () => {
  const dispatch = useDispatch();

  // Query => { q, location }
  // q = search term, location = location
  const getSearchList = query => dispatch(getSearchListAction(query));

  const { searchMenuList, searchMenuError, isSearchMenuLoading } = useSelector(
    state => state.search
  );

  return [getSearchList, searchMenuList, searchMenuError, isSearchMenuLoading];
};

export { useGetSearchMenuList, getSearchListAction };
