import { HYDRATE } from 'next-redux-wrapper';
import * as ActionType from './types';

const initialState = {
  specialitiesList: null,
  specialitiesListError: null,
  specialitiesListLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      const nextState = {
        ...state, // use previous state
        ...payload.specialities, // apply delta from hydration
      };
      // if we need to persist client state on next page uncomment below line.
      // if we are using an api get to new data fetch, can ignore this steps
      // if (state.searchMenuList) nextState.searchMenuList = state.searchMenuList;
      return nextState;
    }

    case ActionType.GET_ALL_SPECIALITIES_LIST_REQUEST:
      return { ...state, specialitiesListLoading: true };

    case ActionType.GET_ALL_SPECIALITIES_LIST_SUCCESS:
      return {
        ...state,
        specialitiesList: payload,
        specialitiesListError: null,
        specialitiesListLoading: false,
      };

    case ActionType.GET_ALL_SPECIALITIES_LIST_FAILURE:
      return {
        ...state,
        specialitiesListError: null,
        specialitiesListLoading: false,
      };

    default:
      return state;
  }
};
