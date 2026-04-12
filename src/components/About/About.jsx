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
        <motion.div
          className="about-details-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <div className="about-section-container">
            <motion.div className="about-card-wrapper" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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

            <motion.div className="about-card-wrapper" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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

            <motion.div className="about-card-wrapper" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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
        </motion.div>
        <ArrowMotion location="#experience" />
      </div>
    </section>
  );
};

export default About;
