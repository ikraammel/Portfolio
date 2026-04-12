import React from "react";
import CustomExperience from "./CustomExperience";
import "./style.css";
import Motion from "../Motion";
import ArrowMotion from "../ArrowMotion";

const Experience = () => {
  const experiences = [
    { titre: "Programming Languages", skills: ["Javascript", "TypeScript", "Java", "Python", "Flutter"] },
    { titre: "Web Development", skills: ["HTML", "CSS", "Next.js", "React"] },
    { titre: "Frameworks & Libs", skills: ["Spring Boot", "Hibernate", "Spring Security", "JWT", "Microservices"] },
    { titre: "Databases", skills: ["PostgreSQL", "MySQL"] },
    { titre: "Tools & DevOps", skills: ["Git", "Github", "Docker", "Jenkins", "Postman"] },
    { titre: "Languages", skills: ["Arabic (Native)", "French (B2)", "English (Intermediate)"] },
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
        <ArrowMotion location="#certificates" />
      </div>
    </section>
  );
};

export default Experience;
