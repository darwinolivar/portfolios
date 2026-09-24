import { contactContent, contactLinks } from "../data/portfolioData.js";

const emailLink = contactLinks.find((link) => link.label === "EMAIL");
const socialLinks = contactLinks.filter((link) => link.label !== "EMAIL");

const Contact = () => {
  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__grid section-grid">
        <div className="section-marker">
          <span>05</span>
          <span>CONTACT</span>
        </div>
        <div className="contact__content reveal">
          <p className="section-kicker">{contactContent.kicker}</p>
          <h2 id="contact-title">
            {contactContent.titleBefore}
            <em>{contactContent.titleAccent}</em>
            {contactContent.titleAfter}
          </h2>
          <p>{contactContent.description}</p>
          <a className="contact__email" href={emailLink.href}>
            {emailLink.value} <span>↗</span>
          </a>
        </div>
      </div>
      <div className="contact__links section-grid reveal">
        {socialLinks.map((link) => (
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            key={link.label}
          >
            <span>{link.label}</span>
            {link.value} ↗
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
