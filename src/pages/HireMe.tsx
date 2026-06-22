import { Link } from "react-router-dom";
import { useState } from "react";
import { config } from "../config";
import "./HireMe.css";

// 👉 Replace this with your own Formspree endpoint (see instructions below the code)
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const HireMe = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="hireme-page">
      <div className="hireme-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          Let's <span>Work Together</span>
        </h1>
        <p>
          Fill out the form below and I'll get back to you at{" "}
          {config.social.email}
        </p>
      </div>

      <div className="hireme-form-container">
        {status === "success" ? (
          <div className="hireme-success">
            <h3>Message Sent! 🎉</h3>
            <p>Thanks for reaching out — I'll reply to you soon.</p>
            <Link to="/" className="back-button" data-cursor="disable">
              ← Back to Home
            </Link>
          </div>
        ) : (
          <form className="hireme-form" onSubmit={handleSubmit}>
            <div className="hireme-field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="hireme-field">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className="hireme-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
              />
            </div>

            <button
              type="submit"
              className="hireme-submit"
              disabled={status === "sending"}
              data-cursor="disable"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "error" && (
              <p className="hireme-error">
                Something went wrong. Please try again, or email me directly
                at {config.social.email}.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default HireMe;
