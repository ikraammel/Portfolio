import React from 'react';

const SocialsContainer = ({ src, alt, location }) => {
  return (
    <div className="social-icon">
      <img
        src={src}
        alt={alt}
        className="icon"
        onClick={() => window.open(location, '_blank')}
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
};

export default SocialsContainer;