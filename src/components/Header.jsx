const Header = () => {
  return (
    <header>
      <nav className="wrap">
        <a href="#" className="logo">
          D<span>.</span>Olivar
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </div>
        <a href="#contact" className="nav-cta">
          Contact Me
        </a>
      </nav>
    </header>
  );
};

export default Header;
