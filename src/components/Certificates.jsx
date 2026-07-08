import { useEffect, useState } from "react";
import { certificates } from "../data/portfolioData";
import "./Certificates.css";

function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="cert-modal__overlay" onClick={onClose}>
      <div
        className="cert-modal__box panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cert-modal__header">
          <div>
            <h3 className="cert-modal__title">{cert.title}</h3>
            <p className="cert-modal__issuer">
              {cert.issuer} · {cert.year}
            </p>
          </div>
          <button
            className="cert-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="cert-modal__body">
          {cert.file ? (
            <img
              src={cert.file}
              alt={cert.title}
              className="cert-modal__image"
            />
          ) : (
            <p className="cert-modal__empty">
              Certificate file not yet added.
            </p>
          )}
        </div>

        {cert.file && (
          <a
            href={cert.file}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary cert-modal__open-link"
          >
            Open in New Tab ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="section certificates">
      <span className="eyebrow">episode 04 · ACHIEVEMENTS UNLOCKED</span>
      <h2 className="section-heading">
        Certificates & <span className="pop">Badges</span>
      </h2>

      <div className="certificates__grid">
        {certificates.map((cert, i) => (
          <button
            type="button"
            className="certificates__card"
            key={cert.title}
            onClick={() => setActiveCert(cert)}
            style={{
              "--card-color": cert.color,
              "--rotate": `${i % 2 === 0 ? -2 : 2}deg`,
            }}
          >
            <div className="certificates__medal">
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="certificates__medal-img"
              />
            </div>
            <h3 className="certificates__title">{cert.title}</h3>
            <p className="certificates__issuer">{cert.issuer}</p>
            <span className="certificates__year">{cert.year}</span>
            <span className="certificates__hint">View certificate →</span>
          </button>
        ))}
      </div>

      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}