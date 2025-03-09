import { motion } from "framer-motion";
import CustomSkill from "./Custom-Skill";

export default function CustomExperience({ titre, skills }) {
  return (
    <motion.div
      className="details-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="experience-sub-title">{titre}</h2>
      <div className="article-container">
        {skills.map((item, index) => (
          <CustomSkill skillName={item} key={index} />
        ))}
      </div>
    </motion.div>
  );
}
