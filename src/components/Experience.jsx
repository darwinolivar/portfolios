import { experience } from "../data/portfolioData.js";

const Experience = () => {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head fade-in">
          <div className="eyebrow">Experience</div>
          <h2>Where the work has taken me.</h2>
        </div>
        <div className="timeline fade-in">
          {experience.map((item) => (
            <div className="t-item" key={item.period}>
              <div className="t-period">{item.period}</div>
              <h3>
                {item.role}
                <br />
                <span className="t-org">
                  <strong>{item.org}</strong>
                </span>
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
