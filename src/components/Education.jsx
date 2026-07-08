import { education } from "../data/portfolioData";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <span className="eyebrow">episode 03 · Leveling Up</span>
      <h2 className="section-heading">
        Education <span className="pop">Journey</span>
      </h2>

      <ol className="education__list">
        {education.map((item, i) => (
          <li key={item.title} className="education__item">
            <div className="education__marker">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="education__card panel">
              <span className="education__period">{item.period}</span>
              <h3 className="education__title">{item.title}</h3>
              <p className="education__place">{item.place}</p>
              <p className="education__desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}