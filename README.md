# QFit - Fitness Landing Page

A modern React-based landing page for QFit, built with Vite, React, and Tailwind CSS.

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router DOM 7.13.0** - Client-side routing
- **Framer Motion 12.34.0** - Animation library
- **GSAP 3.14.2** - Advanced animations
- **React Hook Form 7.71.2** - Form handling
- **Yup 1.7.1** - Schema validation
- **Lucide React 0.563.0** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the QFit directory
3. Install dependencies:

```bash
npm install
```

4. Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
QFit/
├── public/              # Static assets
│   ├── assets/         # Images, icons, logos
│   └── fonts/          # Custom fonts
├── src/
│   ├── assets/         # Source assets
│   ├── components/     # React components
│   │   ├── common/     # Shared components
│   │   ├── layout/     # Layout components
│   │   ├── sections/   # Page sections
│   │   ├── shared/     # Shared UI elements
│   │   └── ui/         # UI components
│   ├── config/         # Configuration files
│   ├── constants/      # Constants and static data
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## Features

- Modern React 19 with hooks
- Fast development with Vite HMR
- Tailwind CSS for styling
- Responsive design
- Custom font support (Delight font family)
- Animation support with Framer Motion and GSAP
- Form validation with React Hook Form and Yup
- Client-side routing with React Router
- ESLint for code quality

## Environment Variables

See `.env.example` for all available environment variables.

## License

Private
#
# Qfit
