import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

const values = [
  {
    title: "Speed",
    description:
      "Resolve incidents in record time with instant context and intelligent automation.",
  },
  {
    title: "Precision",
    description:
      "AI-driven insights eliminate noise and provide accurate root cause analysis.",
  },
  {
    title: "Reliability",
    description:
      "Built to empower SRE teams with confidence, consistency, and control.",
  },
  {
    title: "Learning",
    description:
      "Improve continuously through incident feedback and adaptive memory.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-800 overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 opacity-50 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 opacity-40 rounded-full blur-3xl animate-float-slow"></div>

      <section className="text-center py-24 px-6 sm:px-10 relative z-10">
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-gray-900"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Meet AiFirstOps
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto mb-12 text-gray-700"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          We're pioneering the AI-first era of incident management —
          where speed, automation, and insight lead the way.
        </motion.p>

        {/* Mission Section */}
        <motion.div
          className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto mb-20 border border-white/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Empower Site Reliability Engineers to resolve incidents faster with
            intelligent automation, real-time context, and actionable insights —
            all designed to boost confidence and reduce burnout.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.h2
          className="text-3xl font-semibold mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeInUp}
        >
          Core Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              variants={fadeInUp}
            >
              <h3 className="text-indigo-700 font-semibold text-xl mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
