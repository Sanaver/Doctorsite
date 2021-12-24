import { HYDRATE } from 'next-redux-wrapper';
import * as ActionType from './types';

const initialState = {
  locations: [],
  isLocationsLoading: false,
  home: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.locations };
    case ActionType.FETCH_LOCATIONS_REQUEST:
      return { ...state, isLocationsLoading: true };
    case ActionType.FETCH_LOCATIONS_SUCCESS:
      return { ...state, isLocationsLoading: false, locations: action.payload };
    case ActionType.FETCH_LOCATIONS_FAILED:
      return {
        ...state,
        isLocationsLoading: false,
        locations: initialState.locations,
      };
    default:
      return state;
  }
};
