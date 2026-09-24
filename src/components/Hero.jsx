import heroPhoto from "../assets/images/photo-no-background.png";

const Hero = () => {
  return (
    <section className="hero section-grid" aria-labelledby="hero-title">
      <div className="hero__rail">
        <span>PORTFOLIO — 2026</span>
        <span className="hero__rail-line"></span>
      </div>
      <div className="hero__content reveal">
        <p className="eyebrow hero__eyebrow">
          UI/UX DEVELOPER <b>/</b> FRONTEND DEVELOPER
        </p>
        <h1 className="hero__title" id="hero-title">
          <span>Darwin</span>
          <span>
            Olivar<span className="hero__period">.</span>
          </span>
        </h1>
        <p className="hero__intro">
          I create thoughtful digital experiences and impactful solutions
          through creativity, strategy, and technology.
        </p>
        <div className="hero__actions">
          <a className="button button--accent" href="#work">
            View My Work <span>↓</span>
          </a>
          <a className="button button--text" href="#contact">
            Contact Me <span>↗</span>
          </a>
        </div>
      </div>
      <div
        className="hero__visual reveal"
        aria-label="Abstract visual composition"
      >
        <div className="hero__visual-top">
          <span>01 / 01</span>
          <span className="hero__status">
            <i></i> designing
          </span>
        </div>
        <div className="hero__visual-grid"></div>
        <div className="hero__visual-note">
          THOUGHTFUL
          <br />
          DIGITAL
          <br />
          EXPERIENCES
        </div>
        <div className="hero__visual-orbit"></div>
      </div>
      <div className="hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <i></i>
      </div>
    </section>
  );
};

export default Hero;
