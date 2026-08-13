import React from 'react';
import { motion } from 'framer-motion';
import Motion from '../Motion';
import ArrowMotion from '../ArrowMotion';
import "./style.css";

const Certificates = () => {
    const certs = [
        { name: "Angular Fundamentals", issuer: "Master.dev" },
        { name: "Oracle OCI AI", issuer: "Oracle" },
        { name: "Oracle Data Platform", issuer: "Oracle" },
        { name: "Oracle OCI", issuer: "Oracle" },
        { name: "Bases de Docker", issuer: "DataScientist.fr" },
        { name: "Next.JS", issuer: "Scrimba" },
        { name: "ReactJs", issuer: "Udemy" },
        { name: "Git & Github", issuer: "Udemy" },
        { name: "Java (Basic)", issuer: "HackerRank" },
        { name: "JavaScript (Basic, intermédiaire)", issuer: "HackerRank" },
        { name: "SQL (Basic, intermédiaire)", issuer: "HackerRank" }
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
