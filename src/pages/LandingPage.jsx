import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-4 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Welcome to AiFirstOps
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl"
        >
          Transform IT Operations with Intelligent AI Automation
        </motion.p>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          AiFirstOps offers a cutting-edge platform to optimize and automate your IT operations,
          reduce downtime, and elevate decision-making through AI.
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "AI-Driven Incident Management",
              desc: "Automate triaging, root cause analysis, and resolution with intelligent workflows.",
            },
            {
              title: "Smart Observability",
              desc: "Detect anomalies before they become outages using predictive insights.",
            },
            {
              title: "Seamless Integrations",
              desc: "Plug into your existing tools like ServiceNow, PagerDuty, Slack, and more.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why AiFirstOps */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Why AiFirstOps?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Designed for modern enterprises, AiFirstOps blends AI, automation, and observability
          into a unified platform that helps SREs, DevOps teams, and IT leaders deliver unmatched
          performance and reliability.
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Unified AI Ops",
              desc: "Centralize monitoring, alerting, and automation across hybrid environments.",
            },
            {
              title: "Faster MTTR",
              desc: "Resolve incidents in record time with automated root cause analysis.",
            },
            {
              title: "Cost Optimization",
              desc: "Eliminate redundant alerts, reduce noise, and optimize resource usage.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
