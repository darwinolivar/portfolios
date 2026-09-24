import { skillGroups } from "../data/portfolioData.js";

const Skills = () => {
  return (
    <section
      className="skills section-grid section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-marker">
        <span>03</span>
        <span>SKILLS</span>
      </div>
      <div className="skills__heading reveal">
        <p className="section-kicker">TOOLS OF THE CRAFT.</p>
        <h2 id="skills-title">
          A working <em>system.</em>
        </h2>
      </div>
      <div className="skills__list reveal">
        {skillGroups.map((group, index) => (
          <div classNameName="skill-group" key={group.title}>
            <span className="skill-group__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{group.title}</h3>
            {group.items.map((item) => (
              <ul>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
