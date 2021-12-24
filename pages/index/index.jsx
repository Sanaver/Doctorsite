import React from 'react';
// import { connect } from 'react-redux';
import Home from '../home';
import { wrapper } from '../../store';
import { getSearchListAction } from '../../containers/SearchContainer';
import { getLocations } from '../../containers/LocationContainer';

const Root = () => <Home />;

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(getLocations());

  return store.dispatch(getSearchListAction());
});

export default Root;
