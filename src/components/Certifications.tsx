import "./styles/Certifications.css";
import { config } from "../config";

const Certifications = () => {
  return (
    <div className="certifications-section section-container">
      <div className="certifications-container">
        <h2>
          Certifications <span>&</span>
          <br /> achievements
        </h2>
        <div className="certifications-grid">
          {config.certifications.map((cert, index) => {
            const CardWrapper = cert.certificateImage ? "a" : "div";
            const wrapperProps = cert.certificateImage
              ? {
                  href: cert.certificateImage,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <CardWrapper
                className="certification-card"
                key={index}
                {...wrapperProps}
              >
                <div className="certification-logo-wrap">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="certification-logo"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div className="certification-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                  {cert.certificateImage && (
                    <span className="certification-view-link">
                      View Certificate →
                    </span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        <h3 className="certifications-subheading">Hackathon Certificates</h3>
        <div className="certifications-grid">
          {config.hackathonCertificates.map((hack, index) => {
            const CardWrapper = hack.certificateImage ? "a" : "div";
            const wrapperProps = hack.certificateImage
              ? {
                  href: hack.certificateImage,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};
            return (
              <CardWrapper
                className="certification-card hackathon-card"
                key={index}
                {...wrapperProps}
              >
                <div className="hackathon-badge">🏆</div>
                <div className="certification-info">
                  <h4>{hack.title}</h4>
                  <span className="hackathon-position">{hack.position}</span>
                  <p>{hack.organizer}</p>
                  {hack.certificateImage && (
                    <span className="certification-view-link">
                      View Certificate →
                    </span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
