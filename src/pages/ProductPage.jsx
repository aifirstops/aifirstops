import React from "react";
import "../Styles/ProductPage.scss";

export default function ProductPage() {
  const topFeatures = [
    {
      title: "Alert Ingestion",
      text: "Integrates with Dynatrace, Prometheus, Splunk for seamless incident intake.",
    },
    {
      title: "AI Classification Engine",
      text: "Categorizes incidents like memory leak, deployment issue, or CPU spike.",
    },
    {
      title: "Remediation Recommendations",
      text: "Suggests recovery steps such as restarting pods or scaling services.",
    },
  ];

  const bottomFeatures = [
    {
      title: "Context Enrichment",
      text: "Fetches logs, metrics, and correlates with similar past cases using vector memory.",
    },
    {
      title: "Automation Execution",
      text: "Executes custom playbooks and workflows with full audit logging.",
    },
    {
      title: "Feedback Loop",
      text: "Learns from resolved alerts and analyst feedback to improve accuracy.",
    },
  ];

  return (
    <div className="product-page-fullscreen">
      <div className="product-page">
        <h1 className="page-title">AI-first Incident Intelligence Platform</h1>
        <div className="features-grid">
          {topFeatures.map((feature, idx) => (
            <div key={`top-${idx}`} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="features-grid">
          {bottomFeatures.map((feature, idx) => (
            <div key={`bottom-${idx}`} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
