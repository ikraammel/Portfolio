import React from 'react';

const SocialsContainer = ({ src, alt, location }) => {
  return (
      <img
        src={src}
        alt={alt}
        className="icon"
        onClick={() => window.open(location, '_blank')}
        style={{ cursor: 'pointer' }}
      />
  );
};

export default SocialsContainer;