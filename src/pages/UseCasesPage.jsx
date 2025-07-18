import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Activity,
  ServerCrash,
  CloudLightning,
  RefreshCcw,
  Cpu,
} from "lucide-react";

const iconClasses =
  "w-10 h-10 p-2 rounded-xl bg-blue-100 text-blue-600 shadow-sm group-hover:scale-110 transition-transform";

const useCases = [
  {
    icon: <AlertTriangle className={iconClasses} />,
    title: "Reduce Alert Fatigue",
    description:
      "Cut through the noise by auto-grouping, deduplicating, and classifying alerts that matter.",
  },
  {
    icon: <ServerCrash className={iconClasses} />,
    title: "Accelerate Root Cause Analysis",
    description:
      "Pinpoint probable causes using AI trained on telemetry and historical incident patterns.",
  },
  {
    icon: <CloudLightning className={iconClasses} />,
    title: "Resolve Faster with Automation",
    description:
      "Trigger predefined remediations or full playbooks based on enriched, contextual events.",
  },
  {
    icon: <RefreshCcw className={iconClasses} />,
    title: "Learn From Every Incident",
    description:
      "Feed postmortems and analyst feedback back into the system to prevent future failures.",
  },
  {
    icon: <Cpu className={iconClasses} />,
    title: "AI-Powered Classifications",
    description:
      "Auto-tag incidents like ‘memory leak’ or ‘deployment failure’ — no manual triage needed.",
  },
  {
    icon: <Activity className={iconClasses} />,
    title: "Prevent Future Incidents",
    description:
      "Detect and mitigate repeating issues early using vector similarity and anomaly patterns.",
  },
];

export default function UseCasesPage() {
  return (
    <main className="bg-white text-gray-900 py-24 px-6 md:px-12">
      {/* Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold mb-4">Built for SREs, by SREs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          AiFirstOps solves real-world SRE pain points with precision, speed, and intelligence.
        </p>
      </motion.div>

      {/* Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {useCases.map((uc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 hover:shadow-xl shadow-md rounded-2xl p-6 transition-transform hover:-translate-y-2"
          >
            <div className="mb-4">{uc.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {uc.description}
            </p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
