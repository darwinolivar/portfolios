import logoImage from "../assets/images/logo.png";

const Header = () => {
  return (
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="Darwin Olivar home">
        <span class="brand__mark">DO</span>
        <span class="brand__name">
          Darwin
          <br />
          Olivar.
        </span>
      </a>
      <button
        class="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="primary-nav"
      >
        <span class="menu-toggle__label">Menu</span>
        <span class="menu-toggle__icon">
          <i></i>
          <i></i>
        </span>
      </button>
      <nav class="site-nav" id="primary-nav" aria-label="Primary navigation">
        <a class="site-nav__link" href="#about">
          About <span>01</span>
        </a>
        <a class="site-nav__link" href="#work">
          Work <span>02</span>
        </a>
        <a class="site-nav__link" href="#experience">
          Experience <span>03</span>
        </a>
        <a class="site-nav__link site-nav__link--outline" href="#contact">
          Contact Me <span>↗</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
