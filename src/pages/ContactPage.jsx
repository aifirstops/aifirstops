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
        "service_udd0x0r", // ✅ EmailJS service ID
        "template_9sl1dhx", // ✅ EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "GpxVZ2CpDNcUV_R21" // ✅ EmailJS public key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error); // 👈 Check console for detailed message
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-200 text-gray-800 overflow-hidden">
      {/* Floating visuals */}
      <div className="absolute top-[-5rem] left-[-5rem] w-[350px] h-[350px] bg-indigo-200 rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-[-6rem] right-[-4rem] w-[300px] h-[300px] bg-purple-300 rounded-full blur-2xl opacity-30 animate-float-slow" />

      <section className="py-24 px-6 sm:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Let’s Connect
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to learn more about AiFirstOps or to discuss your ops challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Block */}
          <motion.div
            className="bg-white/50 backdrop-blur-lg border border-white/30 rounded-3xl p-10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
              Contact Information
            </h2>
            <ul className="space-y-5 text-gray-700 text-lg">
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-indigo-600" />
                <span>hrconnect@aifirstops.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-3xl p-10 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg"
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
