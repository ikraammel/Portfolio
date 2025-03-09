import React from 'react'
import { motion } from 'framer-motion';

const Nav = ({href,text}) => {
  return (
     <motion.li
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
    >
        <a href={href}>{text}</a>
    </motion.li>
  )
}

export default Nav
