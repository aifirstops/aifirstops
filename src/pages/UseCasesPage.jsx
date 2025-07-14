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
  "w-10 h-10 p-2 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-600 text-white shadow-md group-hover:scale-110 transition-transform";

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
    <div className="relative bg-gradient-to-br from-sky-100 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-slate-900 dark:text-white py-20 px-4 md:px-12 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat opacity-10 dark:opacity-5 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Floating blurred shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-36 h-36 bg-sky-200 rounded-full mix-blend-overlay filter blur-3xl animate-float opacity-30 left-[10%] top-[20%]"></div>
        <div className="absolute w-24 h-24 bg-blue-300 rounded-full mix-blend-overlay filter blur-2xl animate-float-slow opacity-30 right-[15%] top-[35%]"></div>
        <div className="absolute w-28 h-28 bg-sky-300 rounded-full mix-blend-overlay filter blur-2xl animate-float opacity-20 left-[45%] top-[10%]"></div>
      </div>

      {/* Heading */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Built for SREs, by SREs
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          AIFirstOps solves real-world SRE pain points with precision, speed, and intelligence.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {useCases.map((uc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-xl p-6 rounded-2xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:rotate-[0.3deg]"
          >
            <div className="mb-4 z-10 relative">{uc.icon}</div>
            <h3 className="text-xl font-semibold mb-2 z-10 relative">
              {uc.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed z-10 relative">
              {uc.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
