import React from 'react';
import { motion } from 'framer-motion';

const MyProjects = ({ img, title, link, site }) => {
  return (
    <motion.div
      className="projects-container color-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="project-img-container">
        <motion.img
          src={img}
          alt={title}
          className="project-img"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <motion.button
          className="btn btn-color-2 project-btn"
          onClick={() => window.open(link, '_blank')}
          whileHover={{ scale: 1.1, backgroundColor: "#ff4a57" }}
          transition={{ duration: 0.3 }}
        >
          Github
        </motion.button>

        {site && (
          <motion.button
            className="btn btn-color-2 project-btn"  
            onClick={() => window.open(site, '_blank')}
            whileHover={{ scale: 1.1, backgroundColor: "#ff4a57" }} 
            transition={{ duration: 0.3 }}
          >
            Visit My Site
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default MyProjects;
