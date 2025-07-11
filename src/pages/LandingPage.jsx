import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/LandingPage.scss";

export default function LandingPage() {
  const features = [
    {
      title: "Triage Smarter",
      text: "Classify alerts using AI for faster prioritization.",
    },
    {
      title: "Diagnose Faster",
      text: "Get enriched root causes in seconds from telemetry.",
    },
    {
      title: "Recover Automatically",
      text: "Trigger remediations with one click or automatically.",
    },
    {
      title: "Learn Continuously",
      text: "Build incident memory to avoid repeat issues.",
    },
  ];

  return (
    <motion.div
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          <div className="hero-logo-wrapper">
            <img
              src="/logos/logo1.png"
              alt="AiFirstOps Logo"
              className="hero-logo"
            />
          </div>

          <motion.h1
            className="hero-title"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Transform IT Operations with Intelligent AI Automation
          </motion.h1>

          <motion.p
            className="hero-subtext"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            AI-powered alert classification, root cause insights, and automated
            remediation at scale.
          </motion.p>

          <motion.div
            className="hero-button-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/product" className="hero-button">
              Explore
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <div className="container features-grid">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
