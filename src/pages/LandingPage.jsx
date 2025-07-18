// src/pages/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import GearImg from "../assets/new-white-gear.png";
import { Cpu, Zap, RefreshCw, Brain } from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      title: "Triage Smarter",
      desc: "Classify alerts using AI",
      icon: <Cpu size={20} className="text-blue-500" />,
    },
    {
      title: "Diagnose Faster",
      desc: "Get enriched root causes in seconds",
      icon: <Zap size={20} className="text-green-500" />,
    },
    {
      title: "Recover Automatically",
      desc: "Trigger remediations with one click",
      icon: <RefreshCw size={20} className="text-purple-500" />,
    },
    {
      title: "Learn Continuously",
      desc: "Build an incident memory over time",
      icon: <Brain size={20} className="text-pink-500" />,
    },
  ];

  return (
    <main className="pt-5 pb-24 px-6 md:px-12 bg-white text-gray-900">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Transform IT Operations
            <br />
            with Intelligent AI Automation
          </h1>
          <p className="text-lg text-gray-600">
            Make your SRE and Ops teams faster, smarter, and more proactive with AiFirstOps.
          </p>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-md relative mt-8 lg:mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl p-6 border border-gray-100">
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-60 h-60 bg-blue-100/30 rounded-full blur-[80px] z-0" />
            <img
              src={GearImg}
              alt="Gear"
              className="relative z-10 w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* FEATURES GRID */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-24 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-2 mb-2">
              {f.icon}
              <h3 className="font-semibold text-gray-900 text-lg">{f.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* PARTNER MESSAGE */}
      <div className="mt-16 text-center text-sm text-gray-500">
        Built by former SREs who managed critical healthcare infrastructure.
      </div>
    </main>
  );
}
