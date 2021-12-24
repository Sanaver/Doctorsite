import { HYDRATE } from 'next-redux-wrapper';
import * as ActionType from './types';

const initialState = {
  doctorsSearchData: [],
  isDoctorsSearchLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE: {
      const nextState = {
        ...state, // use previous state
        ...payload.doctors, // apply delta from hydration
      };

      // if we need to persist client state on next page uncomment below line.
      // if we are using an api get to new data fetch, can ignore this steps
      // if (state.doctors) nextState.doctorsSearchData = state.doctorsSearchData;
      return nextState;
    }

    case ActionType.GET_DOCTORS_LIST_REQUEST:
      return { ...state, isDoctorsSearchLoading: true };

    case ActionType.GET_DOCTORS_LIST_SUCCESS:
      return {
        ...state,
        isDoctorsSearchLoading: false,
        doctorsSearchData: payload,
      };

    case ActionType.GET_DOCTORS_LIST_FAILURE:
      return { ...state, isDoctorsSearchLoading: false };

    default:
      return state;
  }
};
