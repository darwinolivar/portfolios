const About = () => {
  return (
    <section
      class="about section-grid section"
      id="about"
      aria-labelledby="about-title"
    >
      <div class="section-marker">
        <span>01</span>
        <span>ABOUT ME</span>
      </div>
      <div class="about__copy reveal">
        <p class="section-kicker">A PRACTICE ROOTED IN CLARITY</p>
        <h2 id="about-title">
          I make the complex feel <em>considered.</em>
        </h2>
        <p>
          I'm Darwin Olivar, a UI/UX Developer and Frontend Developer focused on
          building intuitive, accessible, and visually engaging digital
          experiences. Expert in translating complex UI/UX designs into
          responsive, pixel-perfect frontend architecture using Umbraco CMS,
          .NET MVC, React.js, and modern web technologies. Proven track record
          of improving site performance, managing full content lifecycles, and
          collaborating across cross-functional teams to deliver seamless
          digital experiences.
        </p>
      </div>
      <div class="about__features reveal">
        <article class="feature">
          <span class="feature__number">01</span>
          <h3>End-to-end</h3>
          <p>
            From UX research and wireframes to shipped, production-ready
            front-end code
          </p>
        </article>
        <article class="feature">
          <span class="feature__number">02</span>
          <h3>Umbraco & Web</h3>
          <p>
            Comfortable across CMS-driven builds and modern JavaScript
            frameworks
          </p>
        </article>
        <article class="feature">
          <span class="feature__number">03</span>
          <h3>Detail-first</h3>
          <p>
            Systems-minded about typography, spacing, and interaction — never an
            afterthought
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
