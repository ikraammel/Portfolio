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
                  <div className="experience-timeline">

                    <div className="exp-entry">
                      <div className="exp-dot exp-dot--recent"></div>

                      <div className="exp-content">
                        <span className="exp-badge">July – August 2026</span>

                        <h4 className="exp-title">
                          Full Stack Developer Intern
                        </h4>

                        <span className="exp-company">
                          Microdata
                        </span>

                        <p className="exp-desc">
                          Design and development of a web application for delivery
                          and logistics operations management, enabling delivery
                          creation from orders, driver assignment, and delivery tracking.
                        </p>

                        <p className="exp-desc">
                          Integration of QR codes, PDF generation, and development
                          of a Power BI dashboard for logistics operations monitoring.
                        </p>

                        <div className="exp-tags">
                          <span>Angular</span>
                          <span>Java</span>
                          <span>Spring Boot</span>
                          <span>Spring Security</span>
                          <span>JWT</span>
                          <span>PostgreSQL</span>
                          <span>Power BI</span>
                        </div>
                      </div>
                    </div>

                    <div className="exp-divider"></div>

                    <div className="exp-entry">
                      <div className="exp-dot exp-dot--old"></div>

                      <div className="exp-content">
                        <span className="exp-badge exp-badge--old">
                          August 2025
                        </span>

                        <h4 className="exp-title">
                          Full Stack Developer Intern
                        </h4>

                        <span className="exp-company">
                          OCP Group
                        </span>

                        <p className="exp-desc">
                          Development of a secure e-commerce platform managing
                          products, categories, associations, orders, and cart.
                        </p>

                        <div className="exp-tags">
                          <span>Java</span>
                          <span>Spring Boot</span>
                          <span>React</span>
                          <span>PostgreSQL</span>
                          <span>JWT</span>
                        </div>
                      </div>
                    </div>

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
