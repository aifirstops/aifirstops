import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Code,
  Briefcase,
  Globe,
  Users,
  Heart,
} from "lucide-react";

const openRoles = [
  {
    icon: <Cpu className="w-10 h-10 text-indigo-600" />,
    title: "AI/ML Engineer",
  },
  {
    icon: <Code className="w-10 h-10 text-indigo-600" />,
    title: "Full Stack Developer",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    title: "DevOps Engineer",
  },
];

const perks = [
  {
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    title: "Remote-first culture",
    desc: "Work from anywhere with async collaboration.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Direct product impact",
    desc: "Shape the AI Ops stack used by global teams.",
  },
  {
    icon: <Heart className="w-8 h-8 text-indigo-600" />,
    title: "Real-world AI + Ops",
    desc: "Solve meaningful engineering problems that matter.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    title: "Ownership & Equity",
    desc: "Be a part of something big — and own a piece of it.",
  },
];

export default function CareersPage() {
  return (
    <div className="relative bg-white text-gray-900">
      <section className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        {/* Hero */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Us in Shaping the Future of Intelligent Ops
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Help us build a smarter, faster, AI-first future. We’re hiring brilliant minds like yours.
        </motion.p>

        {/* Open Roles */}
        <h2 className="text-2xl font-semibold text-center mb-8">Open Roles</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {openRoles.map((role, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-white border border-gray-200 shadow-md p-8 rounded-2xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{role.icon}</div>
              <h4 className="text-lg font-medium">{role.title}</h4>
            </motion.div>
          ))}
        </div>

        {/* Why Work With Us */}
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-md transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-3">{perk.icon}</div>
              <h4 className="text-base font-semibold text-indigo-700 mb-1">
                {perk.title}
              </h4>
              <p className="text-gray-600 text-sm">{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-indigo-50 border border-indigo-100 rounded-2xl p-10 text-center shadow-inner max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Ready to make a difference?
          </h3>
          <p className="text-gray-700 mb-6">
            We’re always open to brilliant minds. Drop us your resume — we’d love to hear from you.
          </p>
          <a
            href="mailto:hrconnect@aifirstops.com"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Send Your Resume
          </a>
        </motion.div>
      </section>
    </div>
  );
}
