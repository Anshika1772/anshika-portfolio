import { useState } from "react";
import "./styles/Career.css";
import { config } from "../config";
import ExperienceModal from "./ExperienceModal";

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  if (period.includes(" - ")) {
    return period.split(" - ")[0]; // Show start year for ranges
  }
  return period; // Single year like "2026"
};

const Career = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              {/* LEFT: Year + Role stacked */}
              <div className="career-info-in">
                <h3 className="career-year-label">{getDisplayYear(exp.period)}</h3>
                <div className="career-role">
                  <div className="career-role-header">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="career-logo"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    )}
                    <h4>{exp.position}</h4>
                  </div>
                  <h5>{exp.company}</h5>
                </div>
              </div>
              {/* RIGHT: Description */}
              <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p style={{ margin: 0 }}>{exp.description}</p>
                <button
                  className="career-view-details"
                  onClick={() => setActiveIndex(index)}
                  data-cursor="disable"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <ExperienceModal
          experience={config.experiences[activeIndex]}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  );
};

export default Career;
