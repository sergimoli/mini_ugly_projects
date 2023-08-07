import { useState } from "react";
import "./ProjectItem.css";
const url = "../src/assets/";
function ProjectItem({ project }) {
  const { id, image, name, description, urlSourceCode, urlToRun } = project;

  const imageUrl = url + image + ".png";

  return (
    <div>
      <figure className="project-item">
        {project && (
          <>
            <div className="project-title">
              {id} - {name}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href={urlToRun} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={project.name} />
              </a>
              <div className="project-description">{description}</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <a
                  href={urlSourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check source code
                </a>
              </div>
              <div>
                <a href={urlToRun} target="_blank" rel="noopener noreferrer">
                  Run project
                </a>
              </div>
            </div>
          </>
        )}
      </figure>
    </div>
  );
}

export default ProjectItem;
