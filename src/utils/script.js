const initPortfolioScripts = () => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  const syncHeader = () =>
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  const handleMenuToggle = () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    nav?.classList.toggle("is-open", !open);
  };

  menuToggle?.addEventListener("click", handleMenuToggle);

  const navLinks = document.querySelectorAll(".site-nav__link");
  const closeMenu = () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("is-open");
  };
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  const revealItems = document.querySelectorAll(".reveal");
  let observer;
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            instance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  return () => {
    window.removeEventListener("scroll", syncHeader);
    menuToggle?.removeEventListener("click", handleMenuToggle);
    navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    observer?.disconnect();
  };
};

export default initPortfolioScripts;
