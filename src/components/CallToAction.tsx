import { Link } from "react-router-dom";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Link to="/hire-me" className="cta-btn cta-btn-hire" data-cursor="disable">
          Hire Me →
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
