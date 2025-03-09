import React from 'react';
import { motion } from 'framer-motion';
import "./style.css"
import ContactDetails from './ContactDetails';
const Contact = () => {
  return (
    <section id="contact">
      {/* Animation du texte "Get in Touch" */}
      <motion.p
        className="section__text__p1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.p>
      
      {/* Animation du titre "Contact Me" */}
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Contact Me
      </motion.h1>

      <div className="contact-info-upper-container">
        {/* Animation de l'email */}
          <ContactDetails
            src="email.png"
            alt="email icon"
            link="mailto:ikramelhoul@gmail.com"
            text="ikramelhoul@gmail.com"
          />
          <ContactDetails
            src="linkedin.png"
            alt="linkedin icon"
            link="https://www.linkedin.com/in/ikram-el-houl-720b482b6/"
            text="Linkedin"
            />
      </div>
    </section>
  );
};

export default Contact;
