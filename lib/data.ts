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
      description: `This project is a comprehensive construction management system built using the MERN stack, designed to efficiently manage and monitor all aspects of construction operations. The platform centralizes project data, including project details, employee records, task assignments, and operational workflows, ensuring seamless coordination across teams.

The system implements Role-Based Access Control (RBAC) to provide secure and structured access for different user roles such as admins, managers, and employees. Authentication and authorization are handled using JWT (JSON Web Tokens), ensuring secure session management, while bcrypt is used for password encryption to protect user credentials.

To enhance performance, the application leverages Redis caching, significantly reducing data retrieval time and improving overall system responsiveness. Additionally, Redux is used for efficient state management, enabling smooth handling of complex UI interactions.

The frontend is developed using React.js with modern UI components, delivering a responsive and user-friendly interface, while the backend is powered by Node.js and Express.js, ensuring scalable and robust API handling.

Overall, the system provides a secure, scalable, and high-performance solution for managing construction projects and operational data in a centralized manner.`,
      descriptionMobile: `This is a MERN-based construction management system that centralizes project, employee, and operational data. It uses RBAC for secure role-based access, JWT for authentication, and bcrypt for password security. Redis caching improves performance, while Redux manages complex UI state. The system is designed to be scalable, secure, and efficient for real-world construction workflows.`,
      techStack: ["MERN", "Redux", "Redis", "JWT", "Bcrypt", "AWS S3", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn UI", "RBAC"],
      highlights: [
        "Reduced data processing latency by 70% using Redis caching",
        "Implemented RBAC for multi-level secure access",
        "Built with shadcn UI for a modern dashboard interface",
        "Redux state management for complex data flows",
      ],
      liveLink: "https://alsabah-dashboard.pages.dev",
      githubLink: "",
      category: "Enterprise",
      color: "blue",
    },
    {
      id: "bee-tennis",
      title: "Bee-Tennis",
      shortDesc: "Tennis enrollment platform with real-time registration and Stripe payments",
      description: `This project is a modern tennis enrollment and management platform designed to streamline player registration, training bookings, and tournament participation. The system allows users to easily register online, enroll in training programs, and book coaching plans through a seamless and user-friendly interface.

The application is built using React.js with TypeScript, ensuring a scalable and maintainable frontend architecture. Redux is used for efficient state management, enabling smooth handling of user data, bookings, and real-time updates. The UI is developed using shadcn UI components, providing a clean and responsive design.

For backend and real-time data handling, Firebase is used to manage authentication, database operations, and live updates. The platform integrates Stripe payment gateway, allowing users to securely book training plans and complete transactions online.

An advanced admin dashboard is implemented to manage players, training sessions, tournaments, and registrations from a centralized interface. This improves operational efficiency and provides better control over platform activities.

Overall, the system delivers a secure, scalable, and user-friendly solution for tennis academies to manage registrations, training programs, and tournaments efficiently.`,
      techStack: ["HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "JavaScript", "TypeScript", "React.js", "Redux", "Firebase", "Stripe"],
      highlights: [
        "Real-time player registration using Firebase",
        "Stripe payment gateway integration",
        "Admin dashboard for tournament management",
        "Optimized React architecture for better UX",
      ],
      liveLink: "https://beetennis.pages.dev",
      githubLink: "",
      category: "Web App",
      color: "green",
      descriptionMobile: `A complete tennis enrollment and management platform that effortlessly handles online player registration, dynamic training plan bookings, and multi-tier tournament enrollments. Engineered using modern web technologies like React.js, TypeScript, Redux, and real-time Firebase, complete with Stripe integration for secure checkout. It also offers a fully-featured admin dashboard to centrally monitor users, coaching sessions, and real-time operational data.`,
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
      liveLink: "https://ai-content-generator-mu-pink.vercel.app",
      githubLink: "https://github.com/Ashishkumar/Ai_content_generator",
      category: "AI Tool",
      color: "purple",
      descriptionMobile: "",
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
      descriptionMobile: "",
    },
    {
      id: "reliable-fuel",
      title: "Reliable Fuel",
      shortDesc: "Fuel order management system with real-time tracking and Stripe payments",
      description: `This project is a fuel delivery management system designed to simplify the process of ordering and delivering fuel online. The platform allows customers to place fuel orders, track delivery status in real-time, and make secure payments through an integrated system.

The application is built using React.js with Redux, ensuring efficient state management and smooth handling of order workflows. Firebase is used for real-time database operations and live order tracking, enabling instant updates between customers, admins, and delivery drivers.

An admin dashboard provides centralized control to manage customer orders, assign deliveries to drivers, and monitor overall system activity. Delivery drivers can update order status in real-time, improving transparency and operational efficiency.

The platform also integrates Stripe payment gateway, allowing users to make secure online payments. The system is optimized for performance, delivering a fast and reliable experience for both customers and administrators.`,
      techStack: ["HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "JavaScript", "TypeScript", "React.js", "Redux", "Firebase", "Stripe"],
      highlights: [
        "Real-time order tracking with Firebase",
        "40% reduction in page load time",
        "Stripe payment integration",
        "Admin dashboard for order management",
      ],
      liveLink: "https://reliable-fuel-app.pages.dev/signi",
      githubLink: "",
      category: "Web App",
      color: "red",
      descriptionMobile: `A comprehensive fuel delivery management system that enables customers to seamlessly place online orders, track live deliveries, and perform secure transactions using Stripe. Built natively on a robust Javascript stack powered by React.js, Redux, and Firebase. It features a fully responsive design and includes a high-level admin dashboard designed to centrally administer complete order lifecycle, customer analytics, and optimize driver dispatch operations.`,
    },
    {
      id: "star-clinic",
      title: "Star Clinic Management",
      shortDesc: "Clinic management platform for doctors with secure dashboard handling facilities and emails.",
      description: `This project is a modern clinic and healthcare management application tailored specifically for doctors and medical staff to streamline patient care, facility management, and surgical operations. The platform offers an extensive suit of tools for scheduling patient appointments, managing specialized facilities such as surgery wards, and overseeing complete clinic administration.

The application leverages React.js and Redux to deliver a scalable and highly responsive user interface. Using Firebase for real-time data handling, the app enables instant updates for appointment bookings, facility scheduling, and patient history retrieval, ensuring seamless coordination across the clinic.

An advanced centralized admin dashboard empowers doctors to effectively manage all operational aspects of the clinic. The system also accommodates an integrated automated email notification module that ensures patients and staff are promptly informed of schedules and surgery preparations.

Additionally, Stripe is integrated to securely handle online payments for consultations and medical facility limits. The robust architecture guarantees an optimized, scalable, and fully secure healthcare management solution.`,
      techStack: ["HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "JavaScript", "TypeScript", "React.js", "Redux", "Firebase", "Stripe"],
      highlights: [
        "Advanced admin dashboard for complete clinic management",
        "Automated email notifications for patient coordination",
        "Integration of surgical and specialized facility tracking",
        "Secure Stripe payment configurations for health services",
      ],
      liveLink: "https://starclinic-app-main.pages.dev/",
      githubLink: "",
      category: "Health Tech",
      color: "teal",
      descriptionMobile: `A highly responsive clinic administration platform built for doctors to manage patient appointments, surgical facilities, and online payments globally. Developed exclusively using React.js, Redux, and Firebase alongside Stripe, the app features a centralized dashboard for facility control and automated email notifications for dependable communication.`,
    },
    {
      id: "ai-support-chatbot",
      title: "AI Support Chatbot",
      shortDesc: "Intelligent customer helpdesk and website assistant powered by Gemini AI.",
      description: `An advanced support chatbot solution developed specifically for live websites to automate customer help queries and seamlessly provide detailed information to users. The system incorporates the powerful Gemini API to analyze complex customer questions and generate intelligent, context-aware responses in real-time.

At the core of the application lies a comprehensive centralized backend dashboard that allows administrators to fully manage and oversee the chatbot's interactions. The dashboard offers transparent analytics on customer inquiries, enables manual monitoring, and allows operators to closely track conversational workflows to ensure top-notch customer support.

Utilizing modern technologies like React.js and Tailwind CSS for the frontend, coupled with robust server mechanisms, the platform delivers an extremely smooth and responsive chat interface. This setup greatly reduces overall response time, minimizing human workload, and improving overall customer engagement metrics across the live space.`,
      techStack: ["React.js", "Tailwind CSS", "Gemini API", "Node.js", "Express.js", "MongoDB", "Shadcn UI", "Admin Dashboard"],
      highlights: [
        "Gemini AI integration for intelligent real-time conversational responses",
        "Comprehensive admin dashboard for chat administration control",
        "Automated website customer support reducing operational bottlenecks",
        "Highly responsive chat interface utilizing Tailwind and React.js",
      ],
      liveLink: "https://chatbot-widget-d83.pages.dev/",
      githubLink: "",
      category: "AI Tool",
      color: "blue",
      descriptionMobile: `An intelligent customer support chatbot powered by the Gemini AI API, designed specifically to automate website assistance and user inquiries. Built natively with React.js and Tailwind CSS, the system includes an extensive administrative dashboard allowing staff to tightly manage chat histories, dictate support parameters, and analyze conversational data.`,
    },
    {
      id: "worldwide-news",
      title: "Worldwide News Portal",
      shortDesc: "Real-time category-based worldwide news aggregator powered by News API.",
      description: `A highly interactive and dynamic news aggregator built with React.js that seamlessly keeps users updated with worldwide happenings in real-time. The application directly leverages the News API to fetch top headlines and categorize them precisely into fields such as technology, science, sports, and business.

The web app is structured utilizing a combination of Tailwind CSS and Bootstrap to provide a highly responsive and visually appealing interface across all device formats. This ensures that users can effortlessly switch between different news categories and read the full articles completely unhindered regardless of their screen size.

Furthermore, the project actively utilizes robust JavaScript functionalities to manage component states, handle asynchronous API requests smoothly, and optimize the overarching user experience, making global information easily accessible at a click.`,
      techStack: ["React.js", "News API", "Bootstrap", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      highlights: [
        "Real-time worldwide news fetching via external News API",
        "Categorized news browsing for specific global topics",
        "Highly responsive UI combining Tailwind CSS and Bootstrap",
        "Optimized asynchronous data mapping mechanisms",
      ],
      liveLink: "https://news07webapp.vercel.app/",
      githubLink: "",
      category: "Web App",
      color: "indigo",
      descriptionMobile: `A fast, real-time news aggregator that fetches worldwide headlines using the News API. Built dynamically with React.js, Tailwind CSS, and Bootstrap, the app allows users to filter news by specific categories seamlessly. It provides a highly responsive interface ensuring global information is easily accessible across any mobile or tablet device.`,
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Web App",
      shortDesc: "A modern e-commerce storefront with dynamic cart functionality.",
      description: `An elegant and scalable e-commerce platform developed to deliver a seamless online shopping experience. The application features a dynamic storefront outlining vast catalogs of products with intuitive filtering and sorting parameters suitable for retail scopes.

The frontend infrastructure utilizes React.js alongside state management powered by Redux ensuring complex product data, shopping cart logic, and user session context remain perfectly synchronized across the platform.

The UI leverages a combination of Tailwind CSS and specialized Shadcn UI components yielding a highly polished, responsive interface that functions beautifully across the full spectrum of desktop and mobile devices.`,
      techStack: ["HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "JavaScript", "TypeScript", "React.js", "Redux"],
      highlights: [
        "Advanced shopping cart logic powered by robust Redux implementations",
        "Polished, responsive product storefront via Tailwind and Shadcn UI",
        "Dynamic catalog filtering and data mapping structures",
        "Optimized frontend routing algorithms for swifter navigation",
      ],
      liveLink: "",
      githubLink: "",
      category: "E-Commerce",
      color: "orange",
      descriptionMobile: `A fully responsive e-commerce web platform showcasing advanced storefronts. Employing React.js and Redux, it gracefully handles complex shopping cart logic and dynamic product rendering. Built natively utilizing Tailwind CSS and Shadcn UI components for an incredibly aesthetic and functional shopping interaction.`,
    },
  ],
};

export type Project = typeof portfolioData.projects[0];
