"use client";

import { portfolioData } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Languages,
  Palette,
  Settings,
  Database,
  Wrench,
  Brain,
  Zap,
  ArrowRight
} from "lucide-react";

import Link from "next/link";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Languages className="w-4 h-4" />,
  Frontend: <Palette className="w-4 h-4" />,
  Backend: <Settings className="w-4 h-4" />,
  Databases: <Database className="w-4 h-4" />,
  "Tools & Platforms": <Wrench className="w-4 h-4" />,
  Concepts: <Brain className="w-4 h-4" />,
};

/* Skill proficiency levels */
const skillLevels: Record<string, number> = {
  JavaScript: 90,
  TypeScript: 80,
  Java: 75,
  C: 70,

  "React.js": 90,
  "Next.js": 85,
  HTML5: 95,
  CSS3: 90,
  "Tailwind CSS": 90,
  Redux: 80,
  Bootstrap: 85,

  "Node.js": 85,
  "Express.js": 80,
  NestJS: 70,
  "REST APIs": 90,
  "Socket.IO": 75,
};

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Technical <span className="text-primary italic">Stack</span>
          </h1>

          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
            Specialized tools and technologies used to build scalable,
            high-performance applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {Object.entries(portfolioData.skills).map(([category, items], ci) => (

            <motion.div
              key={category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.05 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 hover:shadow-lg transition"
            >

              {/* Card Header */}
              <div className="mb-6">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {categoryIcons[category] || <Zap className="w-4 h-4" />}
                  {category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                  {category === "Tools & Platforms" ? "Tools" : category}
                </h3>

                {/* Divider */}
                <div className="mt-3 h-px w-full bg-gray-200 dark:bg-gray-800"></div>

              </div>

              {/* Skills */}
              <div className="space-y-5">

                {items.map((skill: string, i: number) => {

                  const level = skillLevels[skill] || 70;

                  return (
                    <div key={i}>

                      {/* Skill Label */}
                      <div className="flex justify-between text-sm mb-1">

                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill}
                        </span>

                        <span className="text-xs text-gray-400">
                          {level}%
                        </span>

                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${level}%` }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-primary rounded-full"
                        />

                      </div>

                    </div>
                  );
                })}

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 text-center"
        >

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>

        </motion.div>

      </div>
    </div>
  );
}