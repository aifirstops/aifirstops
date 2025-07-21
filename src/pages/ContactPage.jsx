import React, { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
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
        "service_udd0x0r",
        "template_9sl1dhx",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "GpxVZ2CpDNcUV_R21"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Floating blobs */}
      <div className="absolute top-[-6rem] left-[-6rem] w-[350px] h-[350px] bg-indigo-100 rounded-full blur-3xl opacity-40 animate-blob" />
      <div className="absolute bottom-[-4rem] right-[-6rem] w-[300px] h-[300px] bg-blue-100 rounded-full blur-2xl opacity-30 animate-blob-slow" />

      {/* Contact Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 rounded-3xl shadow-2xl border border-white/30 overflow-hidden backdrop-blur-xl"
      >
        {/* Left: Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white via-indigo-50 to-white px-10 py-14 md:py-20 flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-gray-900 tracking-tight mb-6">
            Let's Connect
          </h1>
          <p className="text-gray-600 text-base mb-4 leading-relaxed">
            Reach out to learn more about <strong>AiFirstOps</strong> or to discuss your ops challenges.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Mail className="text-indigo-600 w-6 h-6" />
            <span className="text-indigo-800 font-medium text-sm">
              hrconnect@aifirstops.com
            </span>
          </div>
        </motion.div>

        {/* Right: Form Panel */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/90 px-10 py-14 md:py-20 flex flex-col justify-center"
        >
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 transition-all shadow-lg"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
