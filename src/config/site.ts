export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Frontend" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  blurb: string;
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Zaid Hasan",
  firstName: "Zaid",
  url: "https://zaidhasan.vercel.app",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  profileImages: [
    "/profile.jpg",
    "/profile2.png",
  ],
  bannerImage: "/images/cover.jpg",
  socialBannerImage: "/social-banner.png",
  initials: "ZH",
  role: "Full-Stack Developer",
  location: "India",
  timezone: "Asia/Kolkata",
  email: "zeesoffice12@gmail.com",
  greeting: "Hey, I'm Zaid",
  tagline: "Full-Stack Developer skilled in the MERN stack and Next.js, with experience shipping deployed full-stack applications.",
  about: [
    "I'm Zaid, a Full-Stack Developer who loves building clean, scalable applications with the MERN stack and Next.js. I spend my time crafting seamless digital experiences, from real-time features to robust backend architectures.",
    "I don't just write code—I ship products. I've engineered and deployed multiple full-stack platforms with secure authentication, live WebSockets, and optimized APIs, and I'm currently looking for my next challenge as an SDE or Full-Stack intern.",
    "When I'm not architecting web apps, you'll probably find me untangling complex algorithms. With over 270 problems solved on LeetCode (1604 rating) and a solid track record in competitive programming on CodeChef, I thrive on solving hard problems efficiently."
  ],
  tldr: [
    "Full-Stack Web Development.",
    "MERN Stack & Next.js.",
    "Competitive Programming (LeetCode 1604).",
    "Seeking SDE/Internship roles.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "System Design • Advanced Backend Engineering • Algorithms",
    nowBuilding: "Web Applications",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/zaidhasann",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    email: "mailto:zeesoffice12@gmail.com",
    resume: "",
    discord: "",
    medium: "",
  },
  experience: [
    {
      company: "Web3task",
      role: "Full Stack Developer Intern",
      period: "Jan 2026 – Feb 2026",
      blurb:
        "Built the landing page and footer sections in Next.js and developed 10+ reusable UI components, cutting duplicate code across pages and speeding up future feature development. Shipped code directly into a production-level codebase using Git-based workflows, participating in code reviews. Debugged and resolved UI inconsistencies across 3 breakpoints.",
      url: "",
    },
  ] as Job[],
  projects: [
    {
      title: "The Archive",
      blurb:
        "A full-stack article publishing platform built with Next.js — part literary journal, part engineer's notebook.",
      story:
        "Features a dual-mode architecture (runs on mock data/localStorage or connects to a real Supabase backend with zero code changes). Includes a full-featured TipTap editor with 16 fonts, image uploads, autosave, drag-and-drop, likes, bookmarks, followers, real-time sync, and Row-Level Security.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "TipTap", "Supabase"],
      year: "2026",
      links: {
        live: "https://the-archive-tiiy.onrender.com/",
      },
      featured: true,
      categories: ["Fullstack", "Frontend"],
    },
    {
      title: "Skill Swap",
      blurb:
        "A full-stack platform enabling users to exchange skills without monetary transactions.",
      story:
        "Built a full-stack platform using React.js, Vite, Node.js, and MongoDB Atlas. Implemented secure JWT-based authentication and a skill listing/request management system with RESTful APIs for scalable data handling. Added real-time one-to-one chat using Socket.io, supporting live bi-directional messaging between matched users. Debugged and resolved data-sync issues between concurrent user sessions to ensure consistent request/listing state.",
      stack: ["React.js", "Vite", "Node.js", "MongoDB", "Socket.io"],
      year: "2025",
      links: {
        live: "https://skill-swapp.onrender.com",
      },
      featured: true,
      categories: ["Fullstack"],
    },
    {
      title: "StudyRoom",
      blurb:
        "Collaborative learning platform supporting virtual study rooms and live session tracking.",
      story:
        "Engineered a full-stack collaborative learning platform supporting virtual study rooms and live session tracking. Built real-time features including live messaging, an interactive whiteboard, and file sharing for group and individual study sessions. Delivered analytics dashboards summarizing study session data, backed by secure JWT-based authentication.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      year: "2025",
      links: {
        live: "https://studyroomm.onrender.com",
      },
      featured: true,
      categories: ["Fullstack"],
    },
    {
      title: "DriveEase",
      blurb:
        "Full-Stack Car Rental & Booking Platform with role-based access control.",
      story:
        "Architected and developed a comprehensive car rental platform with role-based access control (RBAC), enabling users to browse fleets, calculate booking costs, and manage reservations, with a secure admin portal for fleet management. Built a responsive, high-performance frontend using React, TypeScript, and Tailwind CSS (via Vite). Engineered a REST API backend with Java 17, Spring Boot, and Spring Security for stateless JWT authentication, a PostgreSQL schema via Spring Data JPA with Flyway migrations, BCrypt hashing, and strict CORS policies.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Java 17", "Spring Boot", "PostgreSQL"],
      year: "2025",
      links: {
        live: "https://ryder-1yzh.onrender.com",
      },
      featured: true,
      categories: ["Fullstack", "Backend"],
    },
    {
      title: "Club Manch",
      blurb:
        "Club & Event Management Platform to streamline coordination of multiple clubs and events.",
      story:
        "Built a full-stack platform to streamline coordination of multiple clubs and events, including role-based access control. Designed event creation and registration workflows with centralized dashboards for club administrators. Optimized performance with server-side rendering and scalable API design for fast data handling.",
      stack: ["Next.js", "TypeScript"],
      year: "2025",
      links: {
        live: "https://clubmanchh.onrender.com",
      },
      featured: false,
      categories: ["Fullstack"],
    },
  ] as Project[],
  skills: [
    "C++",
    "JavaScript",
    "TypeScript",
    "Java",
    "React.js",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "Spring Security",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "Render",
    "Vercel",
    "Cloud Computing",
    "Supabase"
  ],
  writing: [
    {
      title: "After You Click: The Journey of a Food Delivery Order",
      summary: "An exploration of the lifecycle of a food delivery order, tracing the intricate backend processes from DNS resolution and load balancing to middleware, database transactions, and third-party API integrations.",
      date: "Aug 27, 2026",
      readingTime: "14 min read",
      url: "https://the-archive-tiiy.onrender.com/article/backend",
    }
  ] as Post[],
  github: {
    username: "zaidhasann",
    contributionsLastYear: "",
  },
  footerNote: "Built with ❤️ and hardwork"
} as const;

export type Site = typeof site;
