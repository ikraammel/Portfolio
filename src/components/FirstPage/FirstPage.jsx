import React from 'react';
import { motion } from 'framer-motion';
import "./style.css";
const FirstPage = () => {
  return (
    <div>
      <nav id="desktop-nav">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ikram El houl
        </motion.div>
        <div>
          <ul className="nav-links">
            {["About", "Experience", "Projects", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                className="nav-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FirstPage;
