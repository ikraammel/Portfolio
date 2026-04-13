import { motion } from "framer-motion";
import React from "react";
import AboutChild from "./AboutChild";
import "./style.css";
import Motion from "../Motion";
import ArrowMotion from "../ArrowMotion";

const About = () => {
  return (
    <section id="about">
      <Motion className="section__text__p1" text1="Get to know more" text2="About me" />
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-section-container">
            <motion.div 
              className="about-card-wrapper" 
              initial={{ opacity: 0, y: 50, scale: 0.8 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AboutChild
                title="Experience"
                alt="experience icon"
                src="experience.png"
                p={
                  <div>
                    <b>Full Stack Developer Intern</b> – OCP <br />
                    August 2025 <br />
                    Development of a secure e-commerce platform managing products, categories, associations, orders, and cart.
                    Technologies: Java, Spring Boot, React, PostgreSQL, JWT
                  </div>
                }
              />
            </motion.div>

            <motion.div 
              className="about-card-wrapper" 
              initial={{ opacity: 0, y: 50, scale: 0.8 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AboutChild
                title="Education"
                alt="experience icon"
                src="education.png"
                p={
                  <div>
                    <b>ENSA Safi</b> <br />
                    2024 - Present: Computer Engineering & AI <br />
                    2022 - 2024: Preparatory Classes <br />
                    2021 - 2022: Baccalaureate Sciences Mathématiques A
                  </div>
                }
              />
            </motion.div>

            <motion.div 
              className="about-card-wrapper" 
              initial={{ opacity: 0, y: 50, scale: 0.8 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
            </motion.div>
          </div>
        </div>
        <ArrowMotion location="#experience" />
      </div>
    </section>
  );
};

export default About;
