// src/pages/UseCasesPage.jsx
import React from "react";
import "../styles/UseCasesPage.scss";
import "../styles/main.scss";

export default function UseCasesPage() {
  return (
    <section className="use-cases-page">
      <div className="container">
        <h1 className="page-title">Built for SREs, by SREs</h1>
        <p className="description">
          AIFirstOps solves real-world SRE pain points with precision, speed, and intelligence.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Too Many Alerts?</h3>
            <p className="feature-description">
              We help classify and prioritize what matters most so your team isn’t overwhelmed.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Struggling with RCA?</h3>
            <p className="feature-description">
              Get instant root cause insights using our incident memory engine.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Losing Knowledge?</h3>
            <p className="feature-description">
              Build lasting institutional memory with AI-powered recall of past incidents.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Need Faster Recovery?</h3>
            <p className="feature-description">
              Let AI recommend or trigger remediations, reducing recovery time drastically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
