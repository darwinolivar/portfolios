import { experience } from "../data/portfolioData.js";

const Experience = () => {
  return (
    <section
      className="experience section-grid section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-marker">
        <span>04</span>
        <span>EXPERIENCE</span>
      </div>
      <div className="experience__heading reveal">
        <p className="section-kicker">WHERE THE WORK HAS TAKEN ME.</p>
        <h2 id="experience-title">
          Selected <em>chapters.</em>
        </h2>
      </div>

      <div className="timeline reveal">
        {experience.map((item) => (
          <article
            className="timeline__item"
            key={`${item.org}-${item.period}`}
          >
            <div className="timeline__date">{item.period}</div>
            <div className="timeline__body">
              <h3>{item.role}</h3>
              <p className="timeline__company">{item.org}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
