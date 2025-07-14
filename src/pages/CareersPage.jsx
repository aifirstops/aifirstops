import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Globe, Users, Heart } from "lucide-react";

const perks = [
  {
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    title: "Remote-first",
    desc: "Work from anywhere with async flexibility.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Tight-knit Team",
    desc: "Collaborate with passionate, driven engineers.",
  },
  {
    icon: <Heart className="w-8 h-8 text-indigo-600" />,
    title: "Impactful Mission",
    desc: "Build tools that empower SREs and automate IT Ops.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    title: "Equity Options",
    desc: "You’re not just joining — you’re owning part of the journey.",
  },
];

export default function CareersPage() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-screen text-gray-800 overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute top-[-6rem] left-[-6rem] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-40 animate-float" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-200 rounded-full blur-3xl opacity-30 animate-float-slow" />

      <section className="text-center py-24 px-6 sm:px-10 relative z-10">
        {/* Hero */}
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Join the Future of AI-Driven Operations
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Be part of a team that’s redefining how IT Ops works — faster,
          smarter, and fully automated.
        </motion.p>

        {/* Perks Section */}
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Work With Us?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-3">{perk.icon}</div>
              <h4 className="text-lg font-semibold text-indigo-700 mb-1">
                {perk.title}
              </h4>
              <p className="text-gray-600 text-sm">{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-white/70 backdrop-blur-lg border border-white/30 p-10 rounded-2xl max-w-2xl mx-auto shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-indigo-700">
            Excited to build the future with us?
          </h3>
          <p className="text-gray-700 mb-6">
            Even if there’s no open role listed, we’d love to hear from talented
            folks. Send us your resume and tell us how you can make an impact at
            AiFirstOps.
          </p>
          <a
            href="mailto:hrconnect@aifirstops.com"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Send Your Resume
          </a>
        </motion.div>
      </section>
    </div>
  );
}
