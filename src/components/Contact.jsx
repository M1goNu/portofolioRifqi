import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { contacts, profile } from "../data/portfolioData";
import "./Contact.css";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section contact__inner">
        <span className="eyebrow eyebrow--light">stay tuned!</span>
        <h2 className="contact__heading">
          Let's <span className="pop-light">Talk!</span>
        </h2>
        <p className="contact__subtitle">
          Open to collaborations, internships, or just a friendly hello.
          Reach out through any of the channels below ✌️
        </p>

        <div className="contact__buttons">
          {contacts.map((c) => {
            const Icon = icons[c.type];
            return (
              <a
                key={c.type}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`contact__button contact__button--${c.type}`}
              >
                <Icon size={22} />
                {c.label}
              </a>
            );
          })}
        </div>

        <p className="contact__footer">
          © {new Date().getFullYear()} {profile.name}. Made with lots thoughts and observations.
        </p>
      </div>
    </section>
  );
}