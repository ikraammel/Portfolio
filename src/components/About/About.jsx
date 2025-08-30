import { motion } from "framer-motion";
import React from "react";
import AboutChild from "./AboutChild";
import "./style.css";
import Motion from "../Motion";
import { div } from "framer-motion/m";

const About = () => {
  return (
    <section id="about">
      <Motion className="section__text__p1" text1="Get to know more" text2="About me" />
      <div className="section-container">
        <motion.div
          className="about-details-container"
          initial={{ opacity: 0, y: 20 }}  
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-section-container">
            <AboutChild
              title="Experience"
              alt="experience icon"
              src="experience.png"
              p={
                <div>
                  <b>Full Stack Developer Intern</b> – OCP <br />
                  Aug 2025 <br />
                  Development of a secure e-commerce platform managing products, categories, associations, orders, and cart. <br />
                  Technologies: Java, Spring Boot, React, PostgreSQL, JWT
                </div>
              }
            />

            <AboutChild
              title="Education"
              alt="education icon"
              src="education.png"
              p={
                <div>
                  - Computer Engineering & AI Student
                  <br />
                  - Preparatory Classes <br />
                  - Baccalaureate in Mathematical Sciences A
                </div>
              }
            />
            <AboutChild
              title="Languages"
              src="langues.png"
              alt="langue icon"
              p={
                <div>
                  <b>Arabic: </b> Native <br />
                  <b>French: </b> DELF B2 <br />
                  <b>English: </b> Intermediate
                </div>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
