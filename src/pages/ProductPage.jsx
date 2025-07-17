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
    icon: <Server className="w-8 h-8 text-blue-600" />,
    description: "Integrates with Dynatrace, Prometheus, Splunk for seamless incident intake.",
  },
  {
    title: "AI Classification Engine",
    icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
    description: "Categorizes incidents like memory leak, deployment issue, or CPU spike.",
  },
  {
    title: "Remediation Recommendations",
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    description: "Suggests recovery steps such as restarting pods or scaling services.",
  },
  {
    title: "Context Enrichment",
    icon: <Search className="w-8 h-8 text-blue-600" />,
    description: "Fetches logs, metrics, and correlates with similar past cases using vector memory.",
  },
  {
    title: "Automation Execution",
    icon: <Layers3 className="w-8 h-8 text-blue-600" />,
    description: "Executes custom playbooks and workflows with full audit logging.",
  },
  {
    title: "Feedback Loop",
    icon: <Repeat className="w-8 h-8 text-blue-600" />,
    description: "Learns from resolved alerts and analyst feedback to improve accuracy.",
  },
];

export default function ProductPage() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen overflow-hidden relative">
      {/* Gradient Circles */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-cyan-400 to-white opacity-10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-blue-500 to-white opacity-10 blur-2xl rounded-full animate-pulse" />

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 md:px-12 pt-36 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight max-w-5xl mx-auto"
        >
          AI-first Incident Intelligence Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
        >
          Purpose-built for IT Ops teams to detect, classify, and resolve incidents faster using AI.
        </motion.p>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 md:px-20 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Key Platform Capabilities
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer Note */}
      <motion.section
        className="relative z-10 px-6 md:px-12 pb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-500 italic">
          Designed for DevOps. Powered by intelligence.
        </p>
      </motion.section>
    </div>
  );
}
