import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) =>
    `block px-4 py-2 hover:text-indigo-500 ${
      pathname === path ? "font-bold text-indigo-600" : "text-gray-700"
    }`;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          AiFirstOps
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className={linkStyle("/")}>Home</Link>
          <Link to="/product" className={linkStyle("/product")}>Product</Link>
          <Link to="/use-cases" className={linkStyle("/use-cases")}>Use Cases</Link>
          <Link to="/about" className={linkStyle("/about")}>About</Link>
          <Link to="/careers" className={linkStyle("/careers")}>Careers</Link>
          <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm px-4 py-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className={linkStyle("/")}>Home</Link>
          <Link to="/product" onClick={() => setIsOpen(false)} className={linkStyle("/product")}>Product</Link>
          <Link to="/use-cases" onClick={() => setIsOpen(false)} className={linkStyle("/use-cases")}>Use Cases</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={linkStyle("/about")}>About</Link>
          <Link to="/careers" onClick={() => setIsOpen(false)} className={linkStyle("/careers")}>Careers</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={linkStyle("/contact")}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
