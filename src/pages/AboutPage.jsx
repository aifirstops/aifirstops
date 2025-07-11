import React from "react";
import "../Styles/AboutPage.scss";

export default function AboutPage() {
  const values = [
    "✅ Reliability through Intelligence",
    "✅ Build with Empathy",
    "✅ Ship Fast, Learn Faster"
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

      <div className="highlight-box founder">
        <h2>👤 Founder</h2>
        <p>
          [Founder Name] brings years of experience leading SRE and infrastructure efforts across
          healthcare and digital platforms. Passionate about scalable ops and building
          resilient systems that make a real impact.
        </p>
      </div>

      <div className="highlight-box values">
        <h2>🌟 Our Core Values</h2>
        <ul>
          {values.map((val, idx) => (
            <li key={idx}>{val}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
