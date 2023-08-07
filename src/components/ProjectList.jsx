import { miniprojects } from "../data/miniprojects";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css";

function ProjectList() {
  return (
    <div className="projects-container">
      {miniprojects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
