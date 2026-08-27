import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolioData.js";

const Projects = () => {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head fade-in">
          <div className="eyebrow">Recent Projects</div>
          <h2>Selected work, built with intent.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
