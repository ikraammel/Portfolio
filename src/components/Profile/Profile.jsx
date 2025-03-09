import React from 'react';
import { motion } from 'framer-motion';
import "./style.css";
import Motion from "../Motion";
import SocialsContainer from './SocialsContainer';
const Profile = () => {
  return (
    <section id="profile">
      <motion.div
        className="section_pic-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="ikramm.png" alt="Ikram" />
      </motion.div>
      <div className="section__text">
        <Motion text1="Hello, I'm" text2="Ikram El Houl" />
        <p className="section__text__p2">Computer Science & AI student</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('CV_ELHOUL_IKRAM.pdf')}>Download CV</button>
          <button className="btn btn-color-1" onClick={() => (window.location.href='#contact')}>Contact Info</button>
        </div>
        <SocialsContainer 
          src="linkedin.png"
          alt="My linkedin profile"
          location="https://www.linkedin.com/in/ikram-el-houl-720b482b6/'"
        />
        <SocialsContainer
          src="github.png"
          alt="My github profile"
          location="'https://github.com/ikraammel'"
        />
      </div>
    </section>
  );
};

export default Profile;
