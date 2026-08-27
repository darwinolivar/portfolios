import { contactLinks } from "../data/portfolioData.js";

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-lede fade-in">
            <div className="eyebrow">Contact</div>
            <h2>
              Have a project in mind or an opportunity to discuss?
              <br />
              Let's create something meaningful together.
            </h2>
            <p>
              Whether it's a full product build, a design system, or a
              single tricky interface — I'd love to hear about it.
            </p>
          </div>

          <div className="contact-lede fade-in">
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  key={link.label}
                >
                  <span>
                    <span className="l-label">{link.label}</span>
                    <br />
                    {link.value}
                  </span>
                  <span className="arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
