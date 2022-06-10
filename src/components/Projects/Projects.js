import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <div style={{ minHeight: "1200px" }}>
      <div className="projects">
        {projects?.map((project) => (
          <Project project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
