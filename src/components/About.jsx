const About = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="fade-in">
            <div className="eyebrow">About Me</div>
            <p className="about-lede">
              I'm <strong>Darwin Olivar</strong>, a UI/UX Developer and
              Frontend Developer focused on building intuitive, accessible,
              and visually engaging digital experiences. Expert in
              translating complex UI/UX designs into responsive,
              pixel-perfect frontend architecture using Umbraco CMS, .NET
              MVC, React.js, and modern web technologies. Proven track
              record of improving site performance, managing full content
              lifecycles, and collaborating across cross-functional teams to
              deliver seamless digital experiences.
            </p>
          </div>
          <div className="about-side fade-in">
            <div className="about-stat">
              <div className="num">End-to-end</div>
              <div className="label">
                From UX research and wireframes to shipped, production-ready
                front-end code
              </div>
            </div>
            <div className="about-stat">
              <div className="num">Umbraco &amp; Web</div>
              <div className="label">
                Comfortable across CMS-driven builds and modern JavaScript
                frameworks
              </div>
            </div>
            <div className="about-stat">
              <div className="num">Detail-first</div>
              <div className="label">
                Systems-minded about typography, spacing, and interaction —
                never an afterthought
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
