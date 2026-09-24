import { experience } from "../data/portfolioData.js";

const Experience = () => {
  return (
    <section
      class="experience section-grid section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div class="section-marker">
        <span>04</span>
        <span>EXPERIENCE</span>
      </div>
      <div class="experience__heading reveal">
        <p class="section-kicker">WHERE THE WORK HAS TAKEN ME.</p>
        <h2 id="experience-title">
          Selected <em>chapters.</em>
        </h2>
      </div>

      <div class="timeline reveal">
        {experience.map((item) => (
          <article class="timeline__item" key={`${item.org}-${item.period}`}>
            <div class="timeline__date">{item.period}</div>
            <div class="timeline__body">
              <h3>{item.role}</h3>
              <p class="timeline__company">{item.org}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
