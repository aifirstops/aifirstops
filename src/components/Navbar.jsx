// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Product", path: "/product" },
    { label: "Use Cases", path: "/use-cases" },
    { label: "About", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          AiFirst<span className="text-neutral-600">Ops</span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`relative group transition ${
                isActive(path) ? "text-black" : "text-gray-500 hover:text-black"
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full ${
                  isActive(path) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-medium ${
                isActive(path) ? "text-black" : "text-gray-700 hover:text-black"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
