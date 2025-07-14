import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_udd0x0r", // your actual service ID
        "template_9sl1dhx",
        formData,
        "GpxVZ2CpDNcUV_R21"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => toast.error("Something went wrong. Please try again."));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-800 overflow-hidden">
      {/* Floating Backgrounds */}
      <div className="absolute top-[-5rem] left-[-5rem] w-[350px] h-[350px] bg-indigo-200 rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-[-6rem] right-[-4rem] w-[300px] h-[300px] bg-purple-200 rounded-full blur-2xl opacity-20 animate-float-slow" />

      <section className="py-24 px-6 sm:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Let’s Connect</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Reach out to learn more about AiFirstOps or to discuss your ops challenges.
          </p>
        </motion.div>

        {/* Grid: Form + Contact Info */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Block */}
          <motion.div
            className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Contact Information</h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-indigo-600" />
                <span>hrconnect@aifirstops.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              <div>
                <label className="block mb-1 font-medium text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
