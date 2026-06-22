import "./styles/ExperienceModal.css";

interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  logo?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  offerLetterImage?: string;
  certificateImage?: string;
}

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

const ExperienceModal = ({ experience, onClose }: ExperienceModalProps) => {
  return (
    <div className="exp-modal-overlay" onClick={onClose}>
      <div className="exp-modal" onClick={(e) => e.stopPropagation()}>
        <button className="exp-modal-close" onClick={onClose} data-cursor="disable">
          ✕
        </button>

        <div className="exp-modal-header">
          {experience.logo && (
            <img
              src={experience.logo}
              alt={experience.company}
              className="exp-modal-logo"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
          <div>
            <h3>{experience.position}</h3>
            <p className="exp-modal-company">
              {experience.company} · {experience.period}
            </p>
          </div>
        </div>

        <p className="exp-modal-description">{experience.description}</p>

        {experience.responsibilities.length > 0 && (
          <div className="exp-modal-section">
            <h4>Key Highlights</h4>
            <ul>
              {experience.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {experience.technologies.length > 0 && (
          <div className="exp-modal-section">
            <h4>Technologies</h4>
            <div className="exp-modal-tech-list">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="exp-modal-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {(experience.offerLetterImage || experience.certificateImage) && (
          <div className="exp-modal-section">
            <h4>Documents</h4>
            <div className="exp-modal-docs">
              {experience.offerLetterImage && (
                <a
                  href={experience.offerLetterImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-modal-doc-card"
                >
                  <img
                    src={experience.offerLetterImage}
                    alt="Offer Letter"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.style.display = "none";
                    }}
                  />
                  <span>Offer Letter →</span>
                </a>
              )}
              {experience.certificateImage && (
                <a
                  href={experience.certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-modal-doc-card"
                >
                  <img
                    src={experience.certificateImage}
                    alt="Certificate"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.style.display = "none";
                    }}
                  />
                  <span>Certificate →</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceModal;
