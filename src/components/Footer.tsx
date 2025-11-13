import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Portfolio MK 1. Built with care by Elliot.</p>
      </div>
    </footer>
  );
};

export default Footer;
