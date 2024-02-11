import React from "react";
import "./Realisation.css";
import Project from "./Project";
import projects from "../../dataProjects";
import ContactUsSection from "../../Components/Contactus/ContactUsSection";

function Realisations() {
  return (
    <div className="realisation-container">
      <h1>Mes Projets</h1>
      <div className="projects-container">
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
      </div>
      <ContactUsSection/>
    </div>
  );
}

export default Realisations;
