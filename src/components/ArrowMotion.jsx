import React from 'react'
import { motion } from "framer-motion";

const ArrowMotion = ({location}) => {
  return (
    <motion.img
          src="arrow.png"
          alt="arrow icon"
          className="icon arrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => (window.location.href = {location})}
    />
  )
}

export default ArrowMotion
