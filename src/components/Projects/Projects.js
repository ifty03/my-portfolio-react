import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://pacific-plateau-99251.herokuapp.com/project")
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
      <Link
        style={{
          textDecoration: "none",
          margin: "15px auto",
          display: "block",
          width: "fit-content",
        }}
        className="button"
        to="/"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Projects;
