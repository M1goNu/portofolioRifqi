import { useEffect, useState } from "react";
import { projects } from "../data/portfolioData";
import "./Certificates.css";
import "./Projects.css";

// Normalizes a photo entry into { src, label } whether the data is a plain
// path string (legacy) or an object with an explicit label.
function normalizePhoto(photo) {
  return typeof photo === "string" ? { src: photo, label: null } : photo;
}

function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasPhotos = project.photos && project.photos.length > 0;
  const activePhoto = hasPhotos
    ? normalizePhoto(project.photos[activeIndex])
    : null;

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (hasPhotos && e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % project.photos.length);
      }
      if (hasPhotos && e.key === "ArrowLeft") {
        setActiveIndex(
          (i) => (i - 1 + project.photos.length) % project.photos.length
        );
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, hasPhotos, project.photos]);

  return (
    <div className="cert-modal__overlay" onClick={onClose}>
      <div
        className="cert-modal__box panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cert-modal__header">
          <div>
            <h3 className="cert-modal__title">{project.title}</h3>
            <p className="cert-modal__issuer">{project.tag}</p>
          </div>
          <button
            className="cert-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="cert-modal__body projects__modal-body">
          {hasPhotos ? (
            <>
              <div className="phone-mockup">
                <div className="phone-mockup__screen">
                  <div className="phone-mockup__notch" />
                  <img
                    src={activePhoto.src}
                    alt={
                      activePhoto.label ||
                      `${project.title} screenshot ${activeIndex + 1}`
                    }
                  />
                </div>
                {activePhoto.label && (
                  <span className="phone-mockup__label">
                    {activePhoto.label}
                  </span>
                )}
              </div>
              {project.photos.length > 1 && (
                <div className="projects__modal-thumbs">
                  {project.photos.map((photo, i) => {
                    const p = normalizePhoto(photo);
                    return (
                      <button
                        key={p.src}
                        type="button"
                        className={`projects__modal-thumb ${
                          i === activeIndex ? "is-active" : ""
                        }`}
                        onClick={() => setActiveIndex(i)}
                        aria-label={p.label || `Show screenshot ${i + 1}`}
                      >
                        <img src={p.src} alt="" />
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <p className="cert-modal__empty">
              Preview photos not yet added for this project.
            </p>
          )}
        </div>

        <p className="projects__modal-desc">{project.description}</p>

        <div className="projects__modal-stack">
          {project.stack.map((s) => (
            <span key={s} className="projects__stack-chip">
              {s}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary cert-modal__open-link"
          >
            Open Live Link ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section projects">
      <span className="eyebrow">episode 05 · Building The World</span>
      <h2 className="section-heading">
        Project &<span className="pop"> Experience</span>
      </h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <article className="projects__card panel" key={project.title}>
            <div className="projects__panel-top">
              <span className="projects__tag">{project.tag}</span>
            </div>
            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__desc">{project.description}</p>
            <div className="projects__stack">
              {project.stack.map((s) => (
                <span key={s} className="projects__stack-chip">
                  {s}
                </span>
              ))}
            </div>
            {project.photos && project.photos.length > 0 ? (
              <button
                type="button"
                className="projects__link"
                onClick={() => setActiveProject(project)}
              >
                View details →
              </button>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="projects__link"
              >
                View details →
              </a>
            )}
          </article>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}