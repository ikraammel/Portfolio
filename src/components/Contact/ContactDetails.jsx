import React from 'react'
import { motion } from 'framer-motion';
const ContactDetails = ({src,alt,link,text}) => {
  return (
    <motion.div
          className="contact-info-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
    >
      <img src={src} alt={alt} className="icon email-icon" />
          <p>
            <a href={link}>{text}</a>
          </p>
    </motion.div>
    
  )
}

export default ContactDetails
