import { motion } from 'framer-motion';  // Corrected import
import React from 'react';

const Motion = ({ text1, text2 }) => {
  return (
    <div>
      <motion.p
        className="section__text__p1"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {text1}
      </motion.p>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {text2}
      </motion.h1>
    </div>
  );
};

export default Motion;
