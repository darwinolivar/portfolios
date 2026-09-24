import logoImage from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="site-header" data-header>
      <a className="brand" href="#top" aria-label="Darwin Olivar home">
        <span className="brand__mark">DO</span>
        <span className="brand__name">
          Darwin
          <br />
          Olivar.
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="primary-nav"
      >
        <span className="menu-toggle__label">Menu</span>
        <span className="menu-toggle__icon">
          <i></i>
          <i></i>
        </span>
      </button>
      <nav
        className="site-nav"
        id="primary-nav"
        aria-label="Primary navigation"
      >
        <a className="site-nav__link" href="#about">
          About <span>01</span>
        </a>
        <a className="site-nav__link" href="#work">
          Work <span>02</span>
        </a>
        <a className="site-nav__link" href="#experience">
          Experience <span>03</span>
        </a>
        <a className="site-nav__link site-nav__link--outline" href="#contact">
          Contact Me <span>↗</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
