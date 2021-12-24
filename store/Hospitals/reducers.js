import { HYDRATE } from 'next-redux-wrapper';
import * as ActionType from './types';

const initialState = {
  hospitalsSearchData: [],
  hospitalsSearchError: null,
  hospitalsSearchLoading: false,
  hospitalDetailsData: null,
  hospitalDetailsError: null,
  hospitalDetailsLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      const nextState = {
        ...state, // use previous state
        ...payload.hospitals, // apply delta from hydration
      };

      // if we need to persist client state on next page uncomment below line.
      // if we are using an api get to new data fetch, can ignore this steps
      // if (state.doctors) nextState.doctorsSearchData = state.doctorsSearchData;
      return nextState;
    }

    case ActionType.GET_HOSPITALS_SEARCH_REQUEST:
      return { ...state, hospitalsSearchLoading: true };

    case ActionType.GET_HOSPITALS_SEARCH_SUCCESS:
      return {
        ...state,
        hospitalsSearchLoading: false,
        hospitalsSearchData: payload,
      };

    case ActionType.GET_HOSPITALS_SEARCH_FAILURE:
      return { ...state, hospitalsSearchLoading: false };

    // Hospital Details
    case ActionType.GET_HOSPITAL_DETAILS_REQUEST:
      return { ...state, hospitalDetailsLoading: true };

    case ActionType.GET_HOSPITAL_DETAILS_SUCCESS:
      return {
        ...state,
        hospitalDetailsLoading: false,
        hospitalDetailsData: payload,
      };

    case ActionType.GET_HOSPITAL_DETAILS_FAILURE:
      return { ...state, hospitalDetailsLoading: false };

    default:
      return state;
  }
};
