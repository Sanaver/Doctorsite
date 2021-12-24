/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/index.css';
import 'nprogress/nprogress.css';
import dynamic from 'next/dynamic';
import { wrapper } from '../store';

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar');
  },
  { ssr: false }
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
};

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   console.log('_app >>>>>>>>>>>>>', ctx.query);
//   return {
//     pageProps: {
//       ...(Component.getInitialProps
//         ? await Component.getInitialProps(ctx)
//         : {}),
//     },
//   };
// };

export default wrapper.withRedux(MyApp);
