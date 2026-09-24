import { contactContent, contactLinks } from "../data/portfolioData.js";

const emailLink = contactLinks.find((link) => link.label === "EMAIL");
const socialLinks = contactLinks.filter((link) => link.label !== "EMAIL");

const Contact = () => {
  return (
    <section
      class="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div class="contact__grid section-grid">
        <div class="section-marker">
          <span>05</span>
          <span>CONTACT</span>
        </div>
        <div class="contact__content reveal">
          <p class="section-kicker">{contactContent.kicker}</p>
          <h2 id="contact-title">
            {contactContent.titleBefore}
            <em>{contactContent.titleAccent}</em>
            {contactContent.titleAfter}
          </h2>
          <p>{contactContent.description}</p>
          <a class="contact__email" href={emailLink.href}>
            {emailLink.value} <span>↗</span>
          </a>
        </div>
      </div>
      <div class="contact__links section-grid reveal">
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
