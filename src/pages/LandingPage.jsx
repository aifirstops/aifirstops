import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, RefreshCw, Brain } from "lucide-react";

const features = [
  {
    title: "Triage Smarter",
    desc: "Classify alerts using AI",
    icon: Cpu,
  },
  {
    title: "Diagnose Faster",
    desc: "Get enriched root causes in seconds",
    icon: Zap,
  },
  {
    title: "Recover Automatically",
    desc: "Trigger remediations with one click",
    icon: RefreshCw,
  },
  {
    title: "Learn Continuously",
    desc: "Build an incident memory over time",
    icon: Brain,
  },
];

export default function LandingPage() {
  return (
    <main className="relative bg-white text-black overflow-hidden font-sans">
      {/* Floating Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-neutral-200 rounded-full blur-[140px] opacity-30 animate-blob z-0" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-neutral-300 rounded-full blur-[160px] opacity-20 animate-blob z-0" />

      {/* Hero Section */}
      <section className="relative z-10 pt-28 pb-20 px-6 md:px-16 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Transform IT Operations with Intelligent AI Automation
          </h1>
          <p className="text-lg text-neutral-700 mb-3">
            Make your SRE and Ops teams faster, smarter, and more proactive with{" "}
            <span className="font-semibold text-black">AiFirstOps</span>.
          </p>
          <p className="text-md text-neutral-500 max-w-2xl mx-auto">
            AI-powered alert classification, root cause insights, and auto-remediation — all in one platform.
          </p>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-neutral-100 rounded-md">
                  <f.icon size={20} />
                </div>
                <h3 className="text-md font-semibold">{f.title}</h3>
              </div>
              <p className="text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partner Message */}
      <section className="mt-32 text-center text-sm text-neutral-500 relative z-10 px-4 pb-24">
        Built by former SREs who managed critical healthcare infrastructure.
      </section>
    </main>
  );
}
