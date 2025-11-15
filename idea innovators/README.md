# CampusConnect - Complete React Project

![Hackathon 2025](https://img.shields.io/badge/Hackathon-2025-pink)
![Team](https://img.shields.io/badge/Team-Idea%20Innovators-purple)

## Overview

CampusConnect is a comprehensive, beautiful, and responsive campus management platform built for Hackathon 2025 by Team Idea Innovators. It connects students, faculty, and administration through seamless communication and collaboration tools.

## Features

- **Authentication System**: Login, Signup, Forgot Password, Forgot ID with captcha validation
- **Home Dashboard**: CampusAI chatbot with intelligent responses and quick navigation
- **Notices**: Campus-wide announcements with priority levels
- **Lost & Found**: Report and search for lost items with images
- **Clubs & Events**: Campus club information, upcoming events, and merchandise
- **Internships**: Job opportunities with AI-powered recommender system
- **Complaints**: Submit complaints with AI-based category classification and suggestions field
- **Certifications**: Recommended courses and certifications for career growth
- **About/Contact**: Team information and contact form
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Responsive Design**: Fully responsive across all device sizes

## Tech Stack

- **React** 18.3.1
- **TypeScript** 5.5.3
- **Vite** 5.4.2
- **TailwindCSS** 3.4.1
- **React Router** 6.x
- **Framer Motion** for animations
- **Lucide React** for icons

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Test Credentials

Use these credentials to login:

| Name             | QID      | Password |
|------------------|----------|----------|
| Abhinav Parihar  | 25030170 | 1234     |
| Aman Sharma      | 25030521 | 1234     |
| Prince Kumar     | 25030313 | 1234     |
| Prateek Singh    | 25030189 | 1234     |

## Project Structure

```
src/
├── assets/          # Images and static assets
│   └── quantum_logo.png
├── backend/         # Mock backend data
│   └── users.json
├── components/      # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── contexts/        # React contexts
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── pages/          # Page components
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── ForgotPassword.tsx
│   ├── ForgotId.tsx
│   ├── Home.tsx
│   ├── Notices.tsx
│   ├── LostFound.tsx
│   ├── ClubsEvents.tsx
│   ├── Internships.tsx
│   ├── Complaints.tsx
│   ├── Certifications.tsx
│   └── About.tsx
├── App.tsx         # Main app with routing
├── main.tsx        # App entry point
└── index.css       # Global styles
```

## Key Features Implementation

### Authentication
- JSON-based mock backend (`src/backend/users.json`)
- QID, Name, and Password validation
- Auto-generated 5-letter uppercase captcha
- Protected routes for authenticated users

### CampusAI Chatbot
- Intelligent responses based on user queries
- Keywords: "internship", "event", "lost", "notice"
- Provides quick navigation to relevant pages

### Lost & Found
- Displays items with exact image URLs
- Report found items with modal form
- Mock data persistence in component state

### Internships
- AI recommender based on skills and year
- External links to Indeed job listings (AI/ML, Web Dev, Data Science, Cybersecurity, Cloud)
- Skill-based recommendation algorithm

### Complaints
- AI complaint sorter using keyword detection
- Categories: Academic, Hostel, Infrastructure, Other
- Mandatory suggestions field
- Real-time category prediction

### Design System
- Global gradient background: `from-[#001F3F] to-black`
- CampusConnect logo: `text-pink-500 drop-shadow-[0_0_8px_#ff4d94]`
- Pink to purple gradient buttons
- Hover effects with scale transformations
- Dark/Light mode support

## Team Idea Innovators

- **Abhinav Parihar** (25030170) - Full Stack Developer
- **Aman Sharma** (25030521) - Frontend Developer
- **Prince Kumar** (25030313) - Backend Developer
- **Prateek Singh** (25030189) - UI/UX Designer

## License

© 2025 Team Idea Innovators — Built with ❤️ for Hackathon 2025

---

For any queries, contact: team@campusconnect.edu
