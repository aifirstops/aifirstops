import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} AiFirstOps. All rights reserved.</p>
    </footer>
  );
}
