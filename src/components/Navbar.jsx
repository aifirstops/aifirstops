// /src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";

export default function Navbar() {
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">AIFirstOps</Link>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path} className={pathname === link.path ? "active" : ""}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
