import React from 'react'

const SocialsContainer = ({src,alt,location}) => {
  return (
    <div id="socials-container">
        <img
            src={src}
            alt={alt}
            className="icon"
            onClick={() => (window.location.href={location})}
          />
        </div>
  )
}

export default SocialsContainer
