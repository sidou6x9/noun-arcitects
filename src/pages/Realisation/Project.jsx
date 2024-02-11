import React from "react";
import "./Project.css"
const Project = ({ title, description }) => {
  return (
    <div className="project">
        <section></section>
        <div className="project-text">
        <h3>{title}</h3>
      <p>{description}</p>
        </div>
     
    </div>
  );
};

export default Project;