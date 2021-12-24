import { HYDRATE } from 'next-redux-wrapper';
import * as ActionType from './types';

const initialState = {
  searchMenuList: null,
  searchMenuError: null,
  isSearchMenuLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      const nextState = {
        ...state, // use previous state
        ...payload.search, // apply delta from hydration
      };
      // if we need to persist client state on next page uncomment below line.
      // if we are using an api get to new data fetch, can ignore this steps
      // if (state.searchMenuList) nextState.searchMenuList = state.searchMenuList;
      return nextState;
    }

    case ActionType.GET_SEARCH_MENU_LIST_REQUEST:
      return { ...state, isSearchMenuLoading: true };

    case ActionType.GET_SEARCH_MENU_LIST_SUCCESS:
      return {
        ...state,
        isSearchMenuLoading: false,
        searchMenuList: payload,
        searchMenuError: null,
      };

    case ActionType.GET_SEARCH_MENU_LIST_FAILURE:
      return { ...state, isSearchMenuLoading: false, searchMenuError: null };

    default:
      return state;
  }
};
