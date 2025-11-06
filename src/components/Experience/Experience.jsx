import React from "react";
import CustomExperience from "./CustomExperience";
import "./style.css";
import Motion from "../Motion";
import ArrowMotion from "../ArrowMotion";

const Experience = () => {
  const experiences = [
    { titre: "Programming Languages", skills: ["Python", "Java", "TypeScript"] },
    { titre: "Web Development", skills: ["HTML", "CSS", "Javascript", "React"] },
    { titre: "Frameworks", skills: ["Spring Boot","Next.js"] },
    { titre: "Libraries", skills: ["React", "Hibernate"] },
    { titre: "Databases", skills: ["PostgreSQL", "MySQL"] },
    { titre: "Tools", skills: ["Git", "Github", "VsCode", "IntelliJ IDEA", "Postman", "DBeaver"] },
  ];

  return (
    <section id="experience">
      {/* Animation du texte "Explore my" */}
      <Motion text1="Explore My" text2="Experience" />

      <div className="experience-details-container">
        <div className="experience-section-container">
          {/* Génération dynamique des sections */}
          {experiences.map((exp, index) => (
            <CustomExperience key={index} titre={exp.titre} skills={exp.skills} />
          ))}
        </div>

        {/* Animation de la flèche */}
        <ArrowMotion location="#projects" />
      </div>
    </section>
  );
};

export default Experience;
