import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen overflow-hidden relative">
      {/* Animated Gradients */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-cyan-500 to-white opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-indigo-600 to-white opacity-10 blur-2xl rounded-full animate-pulse" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-32 pb-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl"
        >
          Transform IT Operations with Intelligent AI Automation
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl"
        >
          Make your SRE and Ops teams faster, smarter, and more proactive with AiFirstOps.
        </motion.p>
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="text-md md:text-lg text-gray-400 mt-4 max-w-2xl"
        >
          AI-powered alert classification, root cause insights, and auto-remediation — all in one platform.
        </motion.p>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 px-6 md:px-20 pb-24">
        <motion.div
          className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Triage Smarter",
              desc: "Classify alerts using AI.",
            },
            {
              title: "Diagnose Faster",
              desc: "Get enriched root causes in seconds.",
            },
            {
              title: "Recover Automatically",
              desc: "Trigger remediations with one click.",
            },
            {
              title: "Learn Continuously",
              desc: "Build an incident memory over time.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partner Message */}
      <motion.section
        className="relative z-10 px-6 md:px-12 pb-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-500 italic">
          Built by former SREs who managed critical healthcare infrastructure
        </p>
      </motion.section>
    </div>
  );
}
