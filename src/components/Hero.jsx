import heroPhoto from "../assets/images/photo-no-background.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="grid-layer"></div>
        <div className="glow"></div>
        <div className="glow-2"></div>
      </div>
      <div className="wrap hero-inner">
        <div className="fade-in visible">
          <div className="eyebrow hero-eyebrow">Portfolio — 2026</div>
          <h1>
            Darwin
            <br />
            Olivar<span className="accent">.</span>
          </h1>
          <div className="hero-role">
            UI/UX Developer
            <span className="sep">/</span> Frontend Developer
          </div>
          <p className="hero-desc">
            I create thoughtful digital experiences and impactful solutions
            through creativity, strategy, and technology.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in visible">
          <div className="stack-card c1"></div>
          <div className="stack-card c2"></div>
          <div className="stack-card c3">
            <div className="stack-top">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="stack-tag">designing</div>
            </div>
            <img src={heroPhoto} alt="Hero Visual" />
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  );
};

export default Hero;
