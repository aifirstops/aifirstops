// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} AiFirstOps. Built for SREs, by SREs.
    </footer>
  );
}
