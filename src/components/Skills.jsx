import { skillGroups } from "../data/portfolioData.js";

const Skills = () => {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head fade-in">
          <div className="eyebrow">Skills</div>
          <h2>Tools of the craft.</h2>
        </div>
        <div className="skills-grid fade-in">
          {skillGroups.map((group) => (
            <div className="skill-col" key={group.title}>
              <h3>{group.title}</h3>
              {group.items.map((item) => (
                <div className="skill-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
