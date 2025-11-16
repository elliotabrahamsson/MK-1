import React from "react";
import "../styles/Header.css";

// Header komponent props interface. Tar emot activeSection och onNavigate callback.
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
            {/* mappar ut navigeringsknappar för varje sektion */}
            {sections.map((section) => (
              <li
                key={section}
                className={`nav-item ${
                  activeSection === section.toLowerCase() ? "active" : ""
                }`}
              >
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
