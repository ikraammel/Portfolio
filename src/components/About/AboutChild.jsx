import React from "react";
import { motion } from "framer-motion";

const AboutChild = ({ title, alt, src, p }) => {
  return (
    <motion.div 
      className="details-container"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <img src={src} alt={alt} className="icon" />
      <h3>{title}</h3>
      <div>{p}</div>
    </motion.div>
  );
};

export default AboutChild;
