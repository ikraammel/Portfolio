import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import Nav from './Nav';

const Footer = () => {
  return (
    <footer>
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-links-container">
          <ul className="nav-links">
              <Nav
                href="#about"
                text="About"
              />
              <Nav
                href="#experience"
                text="Experience"
              />
              <Nav
                href="#projects"
                text="Projects"
              />
              <Nav
                href="#contact"
                text="Contact"
              />
          </ul>
        </div>
      </motion.nav>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Copyright &copy; 2025 Ikram El Houl. All rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
