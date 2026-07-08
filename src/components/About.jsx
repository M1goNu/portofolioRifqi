import { about } from "../data/portfolioData";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <span className="eyebrow">episode 02 · origin story</span>
      <h2 className="section-heading">
        Who <span className="pop">I Am</span>
      </h2>

      <div className="about__grid">
        <div className="about__panel panel">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about__paragraph">
              {p}
            </p>
          ))}
        </div>

        <div className="about__skills">
          <p className="about__skills-label">Technical Skills</p>
          <div className="about__skills-list">
            {about.skills.map((skill) => (
              <span key={skill} className="about__skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}