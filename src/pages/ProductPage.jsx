import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  BrainCircuit,
  Search,
  Wrench,
  PlayCircle,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    title: "Alert Ingestion",
    icon: <Server className="w-7 h-7 text-blue-600" />,
    description:
      "Integrates with Dynatrace, Prometheus, Splunk for seamless incident intake.",
  },
  {
    title: "AI Classification Engine",
    icon: <BrainCircuit className="w-7 h-7 text-blue-600" />,
    description:
      "Categorizes incidents (e.g., memory leak, deployment issue).",
  },
  {
    title: "Context Enrichment",
    icon: <Search className="w-7 h-7 text-blue-600" />,
    description:
      "Pulls logs, metrics, and matches past cases using vector memory.",
  },
  {
    title: "Remediation Recommendations",
    icon: <Wrench className="w-7 h-7 text-blue-600" />,
    description:
      "Suggests steps like restarting pods or scaling services.",
  },
  {
    title: "Action Executor",
    icon: <PlayCircle className="w-7 h-7 text-blue-600" />,
    description:
      "Executes automations via GitOps or K8s workflows.",
  },
  {
    title: "SRE Dashboard",
    icon: <LayoutDashboard className="w-7 h-7 text-blue-600" />,
    description:
      "Visualizes issues, timelines, and fixes.",
  },
];

export default function ProductPage() {
  return (
    <main className="pt-28 pb-24 px-6 md:px-12 bg-white text-gray-900">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          AI-first Incident Intelligence Platform
        </h1>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* FOOTER NOTE */}
      <div className="mt-20 text-center text-sm text-gray-500 italic">
        Empowering modern incident response through intelligent automation.
      </div>
    </main>
  );
}
