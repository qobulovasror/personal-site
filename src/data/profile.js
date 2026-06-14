import card1 from '../assets/projects/card1.jpg';
import card2 from '../assets/projects/card2.jpg';
import card3 from '../assets/projects/card3.jpg';
import card4 from '../assets/projects/card4.jpg';
import card5 from '../assets/projects/card5.jpg';
import card6 from '../assets/projects/card6.jpg';

export const profile = {
  name: 'Asror Qobulov',
  email: 'qobulovasror0@gmail.com',
  location: 'Samarkand, Uzbekistan',
  birthYear: 2001,
  socials: {
    linkedin: 'https://www.linkedin.com/in/asrorqobulov/',
    github: 'https://github.com/qobulovasror/',
    telegram: 'https://t.me/Qobulov_Asror',
    facebook: 'https://www.facebook.com/asror.qobulov/',
    codepen: 'https://codepen.io/qobulovasror',
  },
};

export const skills = {
  frontend: [
    { name: 'React', level: 92 },
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Next.js', level: 80 },
    { name: 'Redux / Zustand', level: 78 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 84 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL / PostgreSQL', level: 75 },
    { name: 'REST & GraphQL API', level: 82 },
    { name: 'Socket.IO', level: 78 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'Figma', level: 75 },
    { name: 'React Native', level: 72 },
    { name: 'Linux / Bash', level: 78 },
    { name: 'CI/CD', level: 68 },
  ],
};

export const experience = [
  { key: 'software engineer', period: '2025 — present', endNow: true },
  { key: 'freelance', period: '2023 — 2024', endNow: false },
];

export const education = [
  { key: 'university', period: '2020 — 2024', endNow: false },
  { key: 'academy', period: '2021 — 2022', endNow: false },
];

export const projects = [
  {
    id: 'share-app',
    name: 'Share App',
    description: 'Application for sharing files, text, and links instantly. Built with React and Firebase, supports real-time sync.',
    image: card2,
    category: 'web',
    tech: ['React', 'Firebase', 'Tailwind'],
    link: 'https://qobulovasror-shareapp.netlify.app/',
    source: 'https://github.com/qobulovasror/share-app/',
    featured: true,
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description: 'Beautiful weather forecasting app showing current conditions and 7-day forecast for any city worldwide.',
    image: card3,
    category: 'web',
    tech: ['React', 'OpenWeather API'],
    link: 'https://weather-qobulovdev.netlify.app/',
    source: 'https://github.com/QobulovDev/weather-app',
  },
  {
    id: 'todo-desktop',
    name: 'Desktop TODO',
    description: 'Native desktop TODO list application built with Visual C++ — fast, lightweight, and works offline.',
    image: card4,
    category: 'desktop',
    tech: ['C++', 'Visual Studio'],
    source: 'https://github.com/qobulovasror/todo-in-visual_cpp',
  },
  {
    id: 'teacher-info',
    name: 'Teacher Info System',
    description: 'Department teacher information management system built in Visual C++ for academic use.',
    image: card5,
    category: 'desktop',
    tech: ['C++', 'WinForms'],
    source: 'https://github.com/qobulovasror/Visual-C-independent-work',
  },
  {
    id: 'todo-react',
    name: 'TODO List',
    description: 'Modern TODO list application with persistent storage, drag and drop, and beautiful animations.',
    image: card6,
    category: 'web',
    tech: ['React', 'LocalStorage'],
    link: 'https://todo-qobulovdev.netlify.app/',
  },
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'A clean and simple calculator built in React with keyboard support and a smooth UI.',
    image: card1,
    category: 'web',
    tech: ['React', 'CSS'],
    link: 'https://calculator-qobulovdev.netlify.app/',
  },
];
