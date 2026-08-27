const ProjectCard = ({ project }) => {
  const { image, title, description, tags, link } = project;

  return (
    <article className="project-card fade-in">
      <div className="project-visual">
        <div className="mockframe">
          <div className="mock-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="mock-body">
            <img src={image} alt={title} />
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tag-row">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <div className="project-links">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live Demo →
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
