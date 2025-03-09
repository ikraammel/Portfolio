import { motion } from "framer-motion";
import React from "react";
import CustomExperience from "./CustomExperience";
import "./style.css";
import Motion from "../Motion";
import ArrowMotion from "../ArrowMotion";

const Experience = () => {
  return (
    <section id="experience">
      {/* Animation du texte "Explore my" */}
      <Motion
      text1="Explore My"
      text2="Experience"
      />

      <div className="experience-details-container">
        <div className="about-container">
          {/* Animation des détails de programmation */}
          <CustomExperience
            titre="Programming Languages"
            skills={["Python", "C language", "Javascript", "Java"]}
          />
          {/* Animation des détails du développement web */}
          <CustomExperience
            titre="Web development"
            skills={["HTML", "CSS", "Javascript", "React"]}
          />
        </div>

        {/* Animation de la flèche */}
        <ArrowMotion location="#projects"/>
      </div>
    </section>
  );
};

export default Experience;
