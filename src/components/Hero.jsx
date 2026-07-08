import { profile } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  const initial = profile.name?.charAt(0)?.toUpperCase() || "?";

  return (
    <section id="top" className="hero">
      <span className="hero__star hero__star--1">✦</span>
      <span className="hero__star hero__star--2">✦</span>
      <span className="hero__star hero__star--3">✦</span>

      <div className="hero__inner">
        <div className="hero__photo-wrap">
          <div className="hero__burst" aria-hidden="true" />
          <div className="hero__photo-frame">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`Foto ${profile.name}`}
                className="hero__photo"
              />
            ) : (
              <div className="hero__photo hero__photo--placeholder">
                <span>{initial}</span>
              </div>
            )}
          </div>
          <div className="hero__sticker">HI, IT'S Rifqi!</div>
        </div>

        <div className="hero__text">
          <span className="eyebrow">episode 01 · the name of the person</span>
          <h1 className="hero__title">
            Hi, I'm <span className="pop">{profile.name}</span>!
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__bubble panel">
            <p>{profile.shortDescription}</p>
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}