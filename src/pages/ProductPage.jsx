// src/pages/ProductPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  BrainCircuit,
  Wrench,
  Search,
  Layers3,
  Repeat,
} from "lucide-react";

const features = [
  {
    title: "Alert Ingestion",
    icon: <Server className="w-8 h-8 text-indigo-600" />,
    description:
      "Integrates with Dynatrace, Prometheus, Splunk for seamless incident intake.",
  },
  {
    title: "AI Classification Engine",
    icon: <BrainCircuit className="w-8 h-8 text-indigo-600" />,
    description:
      "Categorizes incidents like memory leak, deployment issue, or CPU spike.",
  },
  {
    title: "Remediation Recommendations",
    icon: <Wrench className="w-8 h-8 text-indigo-600" />,
    description:
      "Suggests recovery steps such as restarting pods or scaling services.",
  },
  {
    title: "Context Enrichment",
    icon: <Search className="w-8 h-8 text-indigo-600" />,
    description:
      "Fetches logs, metrics, and correlates with similar past cases using vector memory.",
  },
  {
    title: "Automation Execution",
    icon: <Layers3 className="w-8 h-8 text-indigo-600" />,
    description:
      "Executes custom playbooks and workflows with full audit logging.",
  },
  {
    title: "Feedback Loop",
    icon: <Repeat className="w-8 h-8 text-indigo-600" />,
    description:
      "Learns from resolved alerts and analyst feedback to improve accuracy.",
  },
];

export default function ProductPage() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden relative">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center flex items-center justify-center px-6">
        <div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-10 pointer-events-none animate-pulse"
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            AI-first Incident Intelligence Platform
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Purpose-built for IT Ops teams to detect, classify, and resolve incidents faster using AI.
          </p>
        </motion.div>
      </section>

      {/* Features with Scroll Reveal and Pattern */}
      <section className="py-24 px-6 md:px-16 bg-gray-100 relative z-10">
        <div className="absolute inset-0 bg-[url('/dots.svg')] bg-contain opacity-10 pointer-events-none" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 relative z-10"
        >
          Key Platform Capabilities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
