import heroPhoto from "../assets/images/photo-no-background.png";

const Hero = () => {
  return (
    <section class="hero section-grid" aria-labelledby="hero-title">
      <div class="hero__rail">
        <span>PORTFOLIO — 2026</span>
        <span class="hero__rail-line"></span>
      </div>
      <div class="hero__content reveal">
        <p class="eyebrow hero__eyebrow">
          UI/UX DEVELOPER <b>/</b> FRONTEND DEVELOPER
        </p>
        <h1 class="hero__title" id="hero-title">
          <span>Darwin</span>
          <span>
            Olivar<span class="hero__period">.</span>
          </span>
        </h1>
        <p class="hero__intro">
          I create thoughtful digital experiences and impactful solutions
          through creativity, strategy, and technology.
        </p>
        <div class="hero__actions">
          <a class="button button--accent" href="#work">
            View My Work <span>↓</span>
          </a>
          <a class="button button--text" href="#contact">
            Contact Me <span>↗</span>
          </a>
        </div>
      </div>
      <div class="hero__visual reveal" aria-label="Abstract visual composition">
        <div class="hero__visual-top">
          <span>01 / 01</span>
          <span class="hero__status">
            <i></i> designing
          </span>
        </div>
        <div class="hero__visual-grid"></div>
        <div class="hero__visual-note">
          THOUGHTFUL
          <br />
          DIGITAL
          <br />
          EXPERIENCES
        </div>
        <div class="hero__visual-orbit"></div>
      </div>
      <div class="hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <i></i>
      </div>
    </section>
  );
};

export default Hero;
