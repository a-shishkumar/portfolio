# Ashish Kumar — Portfolio

A professional, multi-page portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- ✅ Multi-page: Home, About, Skills, Education, Projects, Contact
- ✅ Light / Dark mode toggle (persists in localStorage)
- ✅ Each project has its own detail page (`/projects/[id]`)
- ✅ Resume View & Download on home page
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth animations & scroll reveals
- ✅ Clean, professional UI

## Setup Instructions

### 1. Install Node.js
Download from [nodejs.org](https://nodejs.org) (v18+ recommended)

### 2. Install dependencies
```bash
npm install
```

### 3. Add your resume PDF
Place your resume PDF at:
```
public/resume.pdf
```

### 4. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production
```bash
npm run build
npm start
```

## Customizing Your Data

All your personal info, projects, skills, and education are in one file:
```
lib/data.ts
```

### Adding project links
In `lib/data.ts`, update each project's `liveLink` and `githubLink`:
```ts
{
  id: "ai-content-generator",
  liveLink: "https://your-deployed-app.vercel.app",
  githubLink: "https://github.com/yourusername/ai-content-generator",
  ...
}
```

### Adding a new project
Add a new object to the `projects` array in `lib/data.ts`:
```ts
{
  id: "my-new-project",       // unique URL slug
  title: "My New Project",
  shortDesc: "Short description...",
  description: `Full description paragraph 1.

Paragraph 2.`,
  techStack: ["React", "Node.js"],
  highlights: ["Feature 1", "Feature 2"],
  liveLink: "https://...",
  githubLink: "https://...",
  category: "Web App",
  color: "blue",              // blue | green | purple | orange | red
}
```

## Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo → Deploy
4. Done! ✅

## Project Structure

```
ashish-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, theme)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── skills/page.tsx     # Skills page
│   ├── education/page.tsx  # Education page
│   ├── projects/
│   │   ├── page.tsx        # Projects listing
│   │   └── [id]/page.tsx   # Project detail (dynamic routing)
│   ├── contact/page.tsx    # Contact page
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── Navbar.tsx          # Navigation with dark mode
│   └── Footer.tsx          # Footer
├── lib/
│   └── data.ts             # 📝 YOUR DATA - edit this!
└── public/
    └── resume.pdf          # 📄 Place your resume here
```
