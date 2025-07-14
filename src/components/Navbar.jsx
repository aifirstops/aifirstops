import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `px-4 py-2 hover:text-indigo-500 ${
      pathname === path ? "font-bold text-indigo-600" : ""
    }`;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          AiFirstOps
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/product" className={linkStyle("/product")}>
            Product
          </Link>
          <Link to="/use-cases" className={linkStyle("/use-cases")}>
            Use Cases
          </Link>
          <Link to="/about" className={linkStyle("/about")}>
            About
          </Link>
          <Link to="/careers" className={linkStyle("/careers")}>
            Careers
          </Link>
          <Link to="/contact" className={linkStyle("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
