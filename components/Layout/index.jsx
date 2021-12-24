/* eslint-disable react/no-danger */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Footers from '../Footers';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>
          {title || `Doczo - Book Doctor Appointments Easily Online`}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://www.doczo.com/images/doczo-logo.jpg"
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-171682867-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || []; function gtag()
                  {dataLayer.push(arguments)}
                  gtag('js', new Date()); gtag('config', 'UA-171682867-1');
              `,
          }}
        /> */}
      </Head>
      <Navbar />
      {children}
      <Footers />
    </>
  );
};

Layout.defaultProps = {
  children: PropTypes.node,
  title: 'Doczo - Book Doctor Appointments Easily | Online Doctor Consultations',
  description: 'Find Best Hospitals & Doctors Near You. Get trusted reviews from verified patients. Covered all over major locations in India - Trivandrum, Kochi, Calicut etc.',
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
