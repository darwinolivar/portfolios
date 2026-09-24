import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/portfolioData.js";

const Projects = () => {
  return (
    <section class="work section" id="work" aria-labelledby="work-title">
      <div class="section-grid work__heading reveal">
        <div class="section-marker">
          <span>02</span>
          <span>RECENT PROJECTS</span>
        </div>
        <div class="work__intro">
          <p class="section-kicker">SELECTED WORK, BUILT WITH INTENT.</p>
          <h2 id="work-title">
            A case-study <em>archive.</em>
          </h2>
        </div>
        <p class="work__count">
          12 projects
          <br />
          2011—2026
        </p>
      </div>

      <div class="project-grid reveal">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </section>

    // <section id="work">
    //   <div className="wrap">
    //     <div className="section-head fade-in">
    //       <div className="eyebrow">Recent Projects</div>
    //       <h2>Selected work, built with intent.</h2>
    //     </div>

    //     <div className="project-list">
    //       {projects.map((project) => (
    //         <ProjectCard project={project} key={project.id} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Projects;
