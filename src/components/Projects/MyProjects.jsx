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
        {img && img !== "" ? (
          <motion.img
            src={img}
            alt={title}
            className="project-img"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/600x400/475569/ffffff?text=" + title;
            }}
          />
        ) : (
          <div className="project-img placeholder-img" style={{ 
            backgroundColor: '#475569', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            padding: '1.2rem',
            textAlign: 'center',
            height: '150px',
            borderRadius: '1rem',
            lineHeight: '1.4',
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}>
            <span style={{ display: 'block', maxHeight: '100%', overflow: 'hidden' }}>{title}</span>
          </div>
        )}
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <motion.button
          className="btn btn-color-2 project-btn"
          onClick={() => window.open(link, '_blank')}
          whileHover={{ scale: 1.1, backgroundColor: "#475569" }}
          transition={{ duration: 0.3 }}
        >
          Github
        </motion.button>

        {/* Bouton vers le site - masqué si '#' ou absent */}
        {site && site !== "#" && (
          <motion.button
            className="btn btn-color-2 project-btn"  
            onClick={() => window.open(site, '_blank')}
            whileHover={{ scale: 1.1, backgroundColor: "#475569" }} 
            transition={{ duration: 0.3 }}
          >
            Visit Site
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default MyProjects;
