import React from "react";
import "../Styles/AboutPage.scss";

export default function AboutPage() {
  const values = [
    {
      title: "✅ Reliability through Intelligence",
      description: "We ensure systems stay up with smart alerting and automation."
    },
    {
      title: "✅ Build with Empathy",
      description: "We design with real user pain points in mind, always."
    },
    {
      title: "✅ Ship Fast, Learn Faster",
      description: "We move quickly, learn from incidents, and improve continuously."
    }
  ];

  return (
    <section className="about-page">
      <div className="hero">
        <h1>Our Mission</h1>
        <p>
          AIFirstOps was born from firsthand experience managing complex IT infrastructure
          in high-stakes environments. We saw how hard it was to keep systems reliable while
          drowning in alerts, fragmented tools, and knowledge gaps.
        </p>
        <p>
          That’s why we built AIFirstOps — to make incident management smarter, faster,
          and scalable through AI.
        </p>
      </div>

      <div className="core-values-grid">
        {values.map((val, idx) => (
          <div className="core-value-card" key={idx}>
            <h2>{val.title}</h2>
            <p>{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
