import React from "react";
import "../styles/ContactPage.scss";

export default function ContactPage() {
  return (
    <div className="contact-container">
      {/* Left Side Info */}
      <div className="contact-info">
        <h1>
          Get in <span>Touch</span> With Our Team
        </h1>
        <p>
          Consult our AI-first experts to discover the automation strategy
          that's right for your ops.
        </p>

        <div className="contact-details">
          <div>
            <span>🕒</span> Mon – Fri: 9:00am to 6:00pm CST
          </div>
          <div>
            <span>📧</span> <strong>Email:</strong> hrconnect@aifirstops.com
          </div>
          <div>
            <span>📞</span> <strong>Phone:</strong> +1 (987) 654-3210
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>
          Send us a few details and a team member will reach out to you
          shortly.
        </p>

        <form>
          <label>
            I'm a *
            <select required>
              <option value="">Select...</option>
              <option>New Customer</option>
              <option>Existing Customer</option>
              <option>Partner</option>
            </select>
          </label>

          <label>
            Your Name *
            <input type="text" required />
          </label>

          <label>
            Your Email *
            <input type="email" required />
          </label>

          <label>
            Phone Number *
            <input type="tel" required />
          </label>

          <label>
            Select your location *
            <select required>
              <option value="">Choose...</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </label>

          <label>
            Write your message *
            <textarea rows="3" required></textarea>
          </label>

          <button type="submit">Submit Message</button>
        </form>
      </div>
    </div>
  );
}
