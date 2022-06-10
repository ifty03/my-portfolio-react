import React from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h2>This is projects section</h2>
      <div className="projects">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
