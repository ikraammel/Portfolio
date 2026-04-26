import React from 'react';
import "./style.css";
import MyProjects from './MyProjects';
import Motion from "../Motion";
import ArrowMotion from "../ArrowMotion";

const Projects = () => {
  return (
    <section id="projects">
      {/* Animation du titre */}
      <Motion text1="Browse my recent" text2="Projects" />
      <div className="projects-details-container">
        <MyProjects
            img="glow_sense.PNG"
            title="GlowSense"
            link="https://github.com/ikraammel/GlowSense"
            site="#"
            objectFit="contain"
          />
          <MyProjects
            img="logobus.png"
            title="eBus - Mobile App"
            link="https://github.com/ikraammel/eBus_frontend"
            site="#"
          />
          <MyProjects
            img="mode.png"
            title="E-commerce Mode"
            link="https://github.com/ikraammel/e-boutique"
            site="#"
          />
          <MyProjects
            img="hotel.png"
            title="Hotel Booking"
            link="https://github.com/ikraammel/Hotel-Booking-Application"
            site="#"
          />
          <MyProjects
            img="tajine.jpg"
            title="Dar Tajine (IA Chatbot)"
            link="https://github.com/ikraammel/dar-tajine"
            site="https://dartajine.netlify.app/"
          />
          <MyProjects
            img="perf.PNG"
            title="If Perfumes (NLP)"
            link="https://github.com/ikraammel/if-perfumes"
            site="https://if-perfumes.vercel.app/"
          />
          <MyProjects
            img="Byte.PNG"
            title="Byte Brigade Site"
            link="https://github.com/ikraammel/Byte-Brigade-s-site"
            site="https://bytebrigade.netlify.app/"
          />
          <MyProjects
            img="salon.png"
            title="Salon Booking (Microservices)"
            link="https://github.com/ikraammel/Salon-Booking-backend"
            site="#"
          />
          <MyProjects
            img="cart.png"
            title="Shopping Cart API"
            link="https://github.com/ikraammel/Shopping-Cart"
            site="#"
          />
          <MyProjects
            title="Quiz Management"
            link="https://github.com/ikraammel/Quizz-app-backend"
            site="#"
          />
      </div>

      {/* Animation de la flèche */}
      <ArrowMotion location="#contact"/>
    </section>
  );
};

export default Projects;
