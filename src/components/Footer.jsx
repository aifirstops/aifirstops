// /src/components/Footer.jsx
import React from "react";
import "../Styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} AIFirstOps. Built for SREs, by SREs.</p>
        <div className="socials">
          </div>
      </div>
    </footer>
  );
}
