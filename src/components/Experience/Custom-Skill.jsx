import { motion } from "framer-motion";

export default function CustomSkill({ skillName, index }) {
  return (
    <motion.article
      key={index}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
    >
      <img src="checkmark.png" alt="experience icon" className="icon" />
      <div>
        <h3>{skillName}</h3>
      </div>
    </motion.article>
  );
}
