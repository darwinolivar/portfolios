import { useEffect } from "react";

// Recreates the original vanilla-JS IntersectionObserver behavior:
// any element with the "fade-in" class becomes "visible" once it
// scrolls into view.
const useFadeInOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useFadeInOnScroll;
