import React from "react";
import { motion } from "framer-motion";

const AboutChild = ({ title, alt, src, p }) => {
  return (
    <motion.div 
      className="details-container"
      whileHover={{ y: -10, scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <motion.img 
        src={src} 
        alt={alt} 
        className="icon" 
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
      />
      <h3>{title}</h3>
      <div>{p}</div>
    </motion.div>
  );
};

export default AboutChild;
