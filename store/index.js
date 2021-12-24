import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import doctors from './Doctors';
import search from './Search';
import contact from './Contact';
import locations from './Locations';
import home from './Home';
import specialities from './Specialities';
import hospitals from './Hospitals';

/**
 *
 * Redux devtool extention
 */
const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

/**
 * Combined Reducers
 */
const combinedReducer = combineReducers({
  doctors,
  search,
  contact,
  locations,
  home,
  specialities,
  hospitals,
});

// const reducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };

//     return nextState;
//   }

//   return combinedReducer(state, action);
// };

/**
 * Store
 */
export const initStore = (initialState = {}) => {
  return createStore(
    combinedReducer,
    initialState,
    bindMiddleware([thunkMiddleware])
  );
};

/**
 *  with redux hoc
 */
// export const useRedux = comp => withRedux(initStore)(comp);

/**
 *  redux wrapper hoc
 */
export const wrapper = createWrapper(initStore, { debug: false });
