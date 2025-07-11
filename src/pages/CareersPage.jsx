// /src/pages/CareersPage.jsx
import React from "react";
import "../styles/CareersPage.scss";

export default function CareersPage() {
  const roles = ["AI/ML Engineer", "Full Stack Developer", "DevOps Engineer"];
  const perks = [
    "🌍 Remote-first culture",
    "🚀 Direct product impact",
    "🤖 Solve real-world AI + Ops challenges"
  ];

  return (
    <div className="careers-fullscreen">
      <section className="careers-page">
        <div className="header">
          <h1>Join Us in Shaping the Future of Intelligent Ops</h1>
          <p>
            We’re building the future of AI-powered operations — and we want curious, passionate teammates to help us get there.
          </p>
        </div>

        <div className="content-grid">
          <div className="card">
            <h2>📌 Open Roles</h2>
            <ul>
              {roles.map((role, idx) => (
                <li key={idx}>{role}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>💡 Why Work with Us</h2>
            <ul>
              {perks.map((perk, idx) => (
                <li key={idx}>{perk}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="apply-section">
          <button className="primary-btn">Apply Now</button>
          <button className="secondary-btn">Send Resume</button>
        </div>
      </section>
    </div>
  );
}
