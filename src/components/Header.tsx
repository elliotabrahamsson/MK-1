import React from "react";
import "../styles/Header.css";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const sections = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section} className="nav-item">
                <button
                  className={`nav-link ${
                    activeSection === section.toLowerCase() ? "active" : ""
                  }`}
                  onClick={() => onNavigate(section.toLowerCase())}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
