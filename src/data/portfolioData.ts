import {
  Portfolio,
  Project,
  Skill,
  SkillCategory,
  ContactInfo,
} from "../models";

// Create sample projects
const projects = [
  new Project(
    "1",
    "Personal Portfolio Website",
    "A modern, responsive portfolio website built with React and TypeScript using object-oriented programming principles. Features include project showcase, skills display, and contact information.",
    ["React", "TypeScript", "Vite", "CSS3"],
    "https://via.placeholder.com/400x300/667eea/ffffff?text=Portfolio",
    new Date("2025-11-01"),
    "https://github.com/elliotabrahamsson/MK-1"
  ),
  new Project(
    "2",
    "E-Commerce Platform",
    "Full-Stack project that my team and I worked on during our education in ITHS frontend development program.",
    [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Express",
      "Tailwind CSS",
      "Node.js",
      "Node mailer",
    ],
    "https://via.placeholder.com/400x300/f093fb/ffffff?text=E-Commerce",
    new Date("2024-06-15"),
    "https://github.com/elliotabrahamsson/AO-BEA-2.0"
  ),
];

// Create sample skills
const skills = [
  // Frontend
  new Skill("React", SkillCategory.FRONTEND, 4),
  new Skill("TypeScript", SkillCategory.FRONTEND, 3),
  new Skill("JavaScript", SkillCategory.FRONTEND, 3),
  new Skill("HTML5", SkillCategory.FRONTEND, 4),
  new Skill("CSS3", SkillCategory.FRONTEND, 3),
  new Skill("Vue.js", SkillCategory.FRONTEND, 4),
  new Skill("Angular", SkillCategory.FRONTEND, 2),

  // Backend
  new Skill("Node.js", SkillCategory.BACKEND, 3),
  new Skill("Express", SkillCategory.BACKEND, 3),
  new Skill("C#", SkillCategory.BACKEND, 1),
  new Skill("REST APIs", SkillCategory.BACKEND, 2),

  // Database
  new Skill("MongoDB", SkillCategory.DATABASE, 1),
  new Skill("PostgreSQL", SkillCategory.DATABASE, 3),

  // DevOps
  new Skill("Git", SkillCategory.DEVOPS, 2),
  new Skill("Docker", SkillCategory.DEVOPS, 1),
  new Skill("CI/CD", SkillCategory.DEVOPS, 3),

  // Tools
  new Skill("VS Code", SkillCategory.TOOLS, 4),
  new Skill("Visual Studio", SkillCategory.TOOLS, 2),
  new Skill("Vite", SkillCategory.TOOLS, 4),
];

// Create contact info
const contactInfo = new ContactInfo(
  "elliotsson@outlook.com",
  "https://github.com/elliotabrahamsson",
  "https://www.linkedin.com/in/elliot-abrahamsson-a8558a267/"
);

// Create the portfolio instance
export const portfolioData = new Portfolio(
  "Elliot Abrahamsson",
  "Junior Full Stack Developer",
  "Passionate developer who loves to learn new technologies. Most comfortable with React, Vue, TypeScript, and Tailwind CSS.",
  projects,
  skills,
  contactInfo
);
