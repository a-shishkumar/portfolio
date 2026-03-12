export const portfolioData = {
  name: "Ashish Kumar",
  title: "MERN Stack Developer",
  tagline: "Building scalable full-stack applications with modern technologies",
  email: "ashishkr.0727@gmail.com",
  phone: "8810565599",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  portfolio: "https://portfolio.com",

  about: `I'm a passionate MERN Stack Developer with 7 months of hands-on experience building scalable full-stack applications. I specialize in crafting responsive user interfaces and robust REST APIs using MongoDB, Express.js, React.js, and Node.js.

I thrive on solving complex problems with clean, efficient code. From real-time chat applications to AI-powered content generators, I love bringing ideas to life. Currently working as a Software Engineer at Uxdlab Software, where I build enterprise-grade dashboards with Redis caching and role-based access control.

When I'm not coding, I'm exploring new technologies and sharpening my skills to stay ahead in this fast-evolving industry.`,

  skills: {
    Languages: ["JavaScript", "TypeScript", "Java", "C"],
    Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "Socket.IO"],
    Databases: ["MongoDB", "MySQL", "Redis", "Firebase"],
    "Tools & Platforms": ["Git", "GitHub", "Postman", "VS Code", "Vercel", "ThunderClient", "Stripe"],
    Concepts: ["Authentication", "RBAC", "API Development"],
  },

  experience: [
    {
      role: "Software Engineer",
      company: "Uxdlab Software",
      duration: "Aug 2025 - Present",
      projects: ["Alsabah Construction Management Dashboard", "Bee-Tennis"],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "R.D. Engineering College",
      duration: "Aug 2021 - July 2025",
      percentage: "70%",
    },
    {
      degree: "Class XII, CBSE",
      institution: "P.C. Sr.Sec. School",
      duration: "Apr 2020 - Mar 2021",
      percentage: "84%",
    },
    {
      degree: "Class X, CBSE",
      institution: "P.C. Sr.Sec. School",
      duration: "Apr 2018 - Aug 2019",
      percentage: "88%",
    },
  ],

  certificates: ["Certificate of completion in ReactJS for beginners by Simplilearn"],

  projects: [
    {
      id: "alsabah-dashboard",
      title: "Alsabah Construction Management Dashboard",
      shortDesc: "Full-stack construction management dashboard with Redis caching and RBAC",
      description: `A comprehensive enterprise-grade construction management dashboard built using the MERN stack. This platform manages projects, employees, and operational data for a construction company.

The system features Redis caching that reduced data processing latency by 70%, making large dataset operations significantly faster. Redux state management handles complex UI state across the application.

Role-Based Access Control (RBAC) ensures secure data management with different permission levels for admins, managers, and employees. The modern UI is built with React.js and shadcn UI components.`,
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Redis", "shadcn UI", "RBAC"],
      highlights: [
        "Reduced data processing latency by 70% using Redis caching",
        "Implemented RBAC for multi-level secure access",
        "Built with shadcn UI for a modern dashboard interface",
        "Redux state management for complex data flows",
      ],
      liveLink: "",
      githubLink: "",
      category: "Enterprise",
      color: "blue",
    },
    {
      id: "bee-tennis",
      title: "Bee-Tennis",
      shortDesc: "Tennis enrollment platform with real-time registration and Stripe payments",
      description: `A tennis enrollment platform developed using React and Firebase with real-time player registration and coaching sign-ups. The platform streamlines the enrollment process for tennis academies and coaching centers.

An admin dashboard allows staff to manage tournaments, users, and registrations efficiently from a single interface. Stripe payment gateway integration enables smooth, secure transaction processing.

The React architecture was optimized to significantly improve workflow efficiency and deliver a seamless user experience for both players and administrators.`,
      techStack: ["React.js", "Firebase", "Stripe", "Admin Dashboard"],
      highlights: [
        "Real-time player registration using Firebase",
        "Stripe payment gateway integration",
        "Admin dashboard for tournament management",
        "Optimized React architecture for better UX",
      ],
      liveLink: "",
      githubLink: "",
      category: "Web App",
      color: "green",
    },
    {
      id: "ai-content-generator",
      title: "AI Content Generator",
      shortDesc: "Next.js app with Gemini AI for dynamic content generation",
      description: `An AI-powered content generation platform built with Next.js, React, and Tailwind CSS. The application integrates Google's Gemini AI to dynamically generate high-quality content based on user prompts and templates.

Authentication is handled securely using Clerk, providing seamless sign-in/sign-up flows. Database operations are optimized using Drizzle ORM for efficient, type-safe queries.

Next.js server-side rendering improved performance and SEO, reducing load time by 30%. The responsive interface works seamlessly across all device sizes.`,
      techStack: ["Next.js", "React", "TailwindCSS", "JavaScript", "Gemini AI", "Clerk", "Drizzle ORM"],
      highlights: [
        "Gemini AI integration for dynamic content generation",
        "Clerk authentication for secure user management",
        "30% reduction in load time with Next.js SSR",
        "Drizzle ORM for type-safe database operations",
      ],
      liveLink: "",
      githubLink: "",
      category: "AI Tool",
      color: "purple",
    },
    {
      id: "chat-app",
      title: "Real-Time Chat App",
      shortDesc: "MERN stack chat application with Socket.IO for real-time messaging",
      description: `A real-time chat application built on the MERN stack with Socket.IO for instant message delivery. The app supports multiple chat rooms, private messaging, and stores complete chat history.

REST APIs built with Node.js and Express.js handle user authentication, room management, and message retrieval. JWT-based authentication ensures secure sessions.

MongoDB stores user data and complete chat history, enabling users to access their message history across sessions. The React frontend delivers a smooth, responsive chat experience.`,
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "JWT"],
      highlights: [
        "Real-time messaging with Socket.IO",
        "JWT-based authentication",
        "Persistent chat history with MongoDB",
        "Multiple chat rooms support",
      ],
      liveLink: "",
      githubLink: "",
      category: "Full Stack",
      color: "orange",
    },
    {
      id: "reliable-fuel",
      title: "Reliable Fuel",
      shortDesc: "Fuel order management system with real-time tracking and Stripe payments",
      description: `A fuel order management system built with React, Redux, and Firebase featuring real-time order tracking. The platform allows customers to place fuel orders online and track delivery status in real-time.

An admin dashboard provides comprehensive control over orders, deliveries, and customer data from a centralized interface. Redux ensures consistent state management across the complex order workflow.

Stripe payment integration enables secure online transactions. Backend workflow optimization reduced page load time by 40%, delivering a fast, reliable experience for customers and admins alike.`,
      techStack: ["React.js", "Redux", "Firebase", "Stripe", "Admin Dashboard"],
      highlights: [
        "Real-time order tracking with Firebase",
        "40% reduction in page load time",
        "Stripe payment integration",
        "Admin dashboard for order management",
      ],
      liveLink: "",
      githubLink: "",
      category: "Web App",
      color: "red",
    },
  ],
};

export type Project = typeof portfolioData.projects[0];
