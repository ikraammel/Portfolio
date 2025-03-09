import React from 'react';
import { motion } from 'framer-motion';
import "./style.css";
import MyProjects from './myProjects';
import Motion from "../Motion";
import ArrowMotion from "../ArrowMotion";
const Projects = () => {
  return (
    <section id="projects">
      {/* Animation du titre */}
      <Motion text1="Browse my recent" text2="Projects" />
      <div className="projects-details-container">
        <div className="about-container">
          <MyProjects
            img="tajine.jpg"
            title="Dar Tajine"
            link="https://github.com/ikraammel/streamlit-chat"
          />
          <MyProjects
            img="perf.PNG"
            title="If Perfumes"
            link="https://github.com/ikraammel/if-perfumes"
          />
        </div>
      </div>

      {/* Animation de la flèche */}
      <ArrowMotion location="#contact"/>
    </section>
  );
};

export default Projects;
