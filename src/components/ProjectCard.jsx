const ProjectCard = ({ project, index }) => {
  const { image, title, description, tags, link } = project;

  return (
    <article className="project reveal">
      <div className="project__media">
        <img src={image} alt={title} />
        <span className="project__index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="project__body">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="project__meta">
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <a
              className="project__link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
