import React from 'react';
import { motion } from 'framer-motion';
import Motion from '../Motion';
import ArrowMotion from '../ArrowMotion';
import "./style.css";

const Certificates = () => {
    const certs = [
        { name: "Oracle OCI / Data Platform / AI", issuer: "Oracle" },
        { name: "Next.js", issuer: "Scrimba" },
        { name: "ReactJs", issuer: "Udemy" },
        { name: "SQL (Basic, Intermediate)", issuer: "HackerRank" },
        { name: "JavaScript (Basic, Intermediate)", issuer: "HackerRank" },
        { name: "Java (Basic)", issuer: "HackerRank" },
        { name: "Git & Github", issuer: "Udemy" },
        { name: "Docker", issuer: "DataScientist.fr" }
    ];

    return (
        <section id="certificates">
            <Motion text1="Check out my" text2="Certifications" />
            <div className="certs-container">
                {certs.map((cert, index) => (
                    <motion.div 
                        key={index} 
                        className="cert-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="cert-info">
                            <h3>{cert.name}</h3>
                            <p>{cert.issuer}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <ArrowMotion location="#projects" />
        </section>
    );
};

export default Certificates;
