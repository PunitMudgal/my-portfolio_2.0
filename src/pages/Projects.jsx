import React from "react";
import "../styles/projects.css";
import Project from "../components/Project";
import { ProjectData } from "../data/ProjectData";

export default function Projects() {
  return (
    <div id="project" className="project section-padding">
      <div className="project-page">
        <h1>Projects</h1>
        <div className="underline" />
        <p>Here you can see the project i made using react.</p>
        <div className="project-page-content">
          {ProjectData.map((data) => (
            <Project key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
