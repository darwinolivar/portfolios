import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolioData.js";

const Projects = () => {
  return (
    <section className="work section" id="work" aria-labelledby="work-title">
      <div className="section-grid work__heading reveal">
        <div className="section-marker">
          <span>02</span>
          <span>RECENT PROJECTS</span>
        </div>
        <div className="work__intro">
          <p className="section-kicker">SELECTED WORK, BUILT WITH INTENT.</p>
          <h2 id="work-title">
            A case-study <em>archive.</em>
          </h2>
        </div>
        <p className="work__count">
          12 projects
          <br />
          2011—2026
        </p>
      </div>

      <div className="project-grid reveal">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
