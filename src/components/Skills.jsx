import { skillGroups } from "../data/portfolioData.js";

const Skills = () => {
  return (
    <section
      class="skills section-grid section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div class="section-marker">
        <span>03</span>
        <span>SKILLS</span>
      </div>
      <div class="skills__heading reveal">
        <p class="section-kicker">TOOLS OF THE CRAFT.</p>
        <h2 id="skills-title">
          A working <em>system.</em>
        </h2>
      </div>
      <div class="skills__list reveal">
        {skillGroups.map((group, index) => (
          <div className="skill-group" key={group.title}>
            <span class="skill-group__index">
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
