/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import assets from '../../public/assets';

const Image = ({ src, placeholder, alt, ...props }) => {
  return (
    <img
      src={src}
      onError={e => {
        e.target.onerror = null;
        e.target.src = placeholder;
      }}
      alt={alt}
      {...props}
    />
  );
};

Image.defaultProps = {
  placeholder: assets.doctorImageEmpty,
  alt: 'Doczo',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
