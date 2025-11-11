import { Portfolio, Project, Skill, SkillCategory, ContactInfo } from '../models';

// Create sample projects
const projects = [
  new Project(
    '1',
    'Personal Portfolio Website',
    'A modern, responsive portfolio website built with React and TypeScript using object-oriented programming principles. Features include project showcase, skills display, and contact information.',
    ['React', 'TypeScript', 'Vite', 'CSS3'],
    'https://via.placeholder.com/400x300/667eea/ffffff?text=Portfolio',
    new Date('2024-11-01'),
    'https://github.com/username/portfolio',
    'https://portfolio.example.com'
  ),
  new Project(
    '2',
    'E-Commerce Platform',
    'Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
    ['React', 'Node.js', 'MongoDB', 'Express'],
    'https://via.placeholder.com/400x300/f093fb/ffffff?text=E-Commerce',
    new Date('2024-09-15'),
    'https://github.com/username/ecommerce'
  ),
  new Project(
    '3',
    'Task Management App',
    'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    'https://via.placeholder.com/400x300/4ade80/ffffff?text=Task+Manager',
    new Date('2024-08-20'),
    'https://github.com/username/task-manager',
    'https://tasks.example.com'
  )
];

// Create sample skills
const skills = [
  // Frontend
  new Skill('React', SkillCategory.FRONTEND, 5),
  new Skill('TypeScript', SkillCategory.FRONTEND, 4),
  new Skill('JavaScript', SkillCategory.FRONTEND, 5),
  new Skill('HTML5', SkillCategory.FRONTEND, 5),
  new Skill('CSS3', SkillCategory.FRONTEND, 4),
  new Skill('Vue.js', SkillCategory.FRONTEND, 3),
  
  // Backend
  new Skill('Node.js', SkillCategory.BACKEND, 4),
  new Skill('Express', SkillCategory.BACKEND, 4),
  new Skill('Python', SkillCategory.BACKEND, 3),
  new Skill('REST APIs', SkillCategory.BACKEND, 4),
  
  // Database
  new Skill('MongoDB', SkillCategory.DATABASE, 4),
  new Skill('PostgreSQL', SkillCategory.DATABASE, 3),
  new Skill('Firebase', SkillCategory.DATABASE, 4),
  
  // DevOps
  new Skill('Git', SkillCategory.DEVOPS, 5),
  new Skill('Docker', SkillCategory.DEVOPS, 3),
  new Skill('CI/CD', SkillCategory.DEVOPS, 3),
  
  // Tools
  new Skill('VS Code', SkillCategory.TOOLS, 5),
  new Skill('Webpack', SkillCategory.TOOLS, 3),
  new Skill('Vite', SkillCategory.TOOLS, 4)
];

// Create contact info
const contactInfo = new ContactInfo(
  'your.email@example.com',
  'https://github.com/yourusername',
  'https://linkedin.com/in/yourusername',
  'https://twitter.com/yourusername'
);

// Create the portfolio instance
export const portfolioData = new Portfolio(
  'Your Name',
  'Full Stack Developer',
  'Passionate developer with expertise in building modern web applications using cutting-edge technologies. Specialized in React, TypeScript, and creating scalable, user-friendly solutions.',
  projects,
  skills,
  contactInfo
);
