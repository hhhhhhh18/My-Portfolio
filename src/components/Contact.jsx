import React, { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiSend,
  FiMapPin,
} from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      // Success
      setStatus("success");

      // Clear form only after successful email sending
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-grid"></div>

      <div className="contact-container">
        {/* Section Heading */}
        <div className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's build
            <span> something.</span>
          </h2>

          <p>
            Have an idea, opportunity, or project in mind?
            <br />
            I'd love to hear about it.
          </p>
        </div>

        {/* Main Contact Content */}
        <div className="contact-content">
          {/* Left Side */}
          <div className="contact-info">
            <div className="contact-info-header">
              <span className="small-label">CONTACT</span>

              <h3>Let's connect.</h3>

              <p>
                Whether you're looking for a developer, have a project idea, or
                simply want to say hello — feel free to reach out.
              </p>
            </div>

            <div className="contact-links">
              {/* Email */}
              <a
                href="mailto:shaikhamad67612@gmail.com"
                className="contact-link"
              >
                <div className="contact-link-icon">
                  <FiMail />
                </div>

                <div className="contact-link-text">
                  <span>Email</span>
                  <strong>shaikhamad67612@gmail.com</strong>
                </div>

                <FiArrowUpRight className="contact-arrow" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hhhhhhh18"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">
                  <FiGithub />
                </div>

                <div className="contact-link-text">
                  <span>GitHub</span>
                  <strong>github.com/hhhhhhh18</strong>
                </div>

                <FiArrowUpRight className="contact-arrow" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">
                  <FiLinkedin />
                </div>

                <div className="contact-link-text">
                  <span>LinkedIn</span>
                  <strong>Connect with me</strong>
                </div>

                <FiArrowUpRight className="contact-arrow" />
              </a>
            </div>

            {/* Location */}
            <div className="contact-location">
              <FiMapPin />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="contact-form-wrapper">
            <div className="form-top">
              <span className="small-label">SEND A MESSAGE</span>

              <div className="form-status">
                <span></span>
                Open to opportunities
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="send-button"
                disabled={isSending}
              >
                <span>{isSending ? "Sending..." : "Send Message"}</span>

                {!isSending && <FiSend />}
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="contact-success">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="contact-error">
                  ✕ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <div className="footer-line"></div>

          <div className="footer-content">
            <span>© 2026 Shaik Hamad</span>

            <span className="footer-center">Built with React</span>

            <span>Full Stack Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
