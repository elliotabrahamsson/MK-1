# MK-1 Personal Portfolio

A modern, responsive personal portfolio website built with React and TypeScript using object-oriented programming principles.

## Features

- **Object-Oriented Architecture**: Uses TypeScript classes for Portfolio, Project, Skill, and ContactInfo models
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Component-Based**: Modular React components for easy maintenance and scalability
- **Smooth Navigation**: Smooth scrolling and active section tracking
- **Professional Sections**:
  - Hero section with introduction
  - About section with statistics
  - Projects showcase with filtering
  - Skills display with proficiency levels
  - Contact form with social links

## Technology Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with flexbox and grid
- **ESLint** - Code quality and consistency

## Project Structure

```
src/
├── models/           # OOP models (Portfolio, Project, Skill, ContactInfo)
├── components/       # React components
├── styles/          # CSS modules for each component
├── data/            # Portfolio data
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Object-Oriented Design

The project demonstrates OOP principles through:

### Models

1. **Portfolio Class**: Main portfolio manager
   - Manages projects and skills collections
   - Provides methods for data manipulation
   - Encapsulates portfolio information

2. **Project Class**: Represents a portfolio project
   - Private properties with getters
   - Methods for formatting and validation
   - Maintains data encapsulation

3. **Skill Class**: Represents a technical skill
   - Categorization using enums
   - Proficiency level management
   - Computed properties for display

4. **ContactInfo Class**: Manages contact information
   - Social links management
   - Validation methods
   - Data encapsulation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/elliotabrahamsson/MK-1.git
cd MK-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Update Portfolio Data

Edit `src/data/portfolioData.ts` to customize:
- Personal information
- Projects
- Skills
- Contact information

### Styling

Each component has its own CSS file in `src/styles/`. Modify these files to customize the appearance.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!

## Author

Built with ❤️ using React and TypeScript
