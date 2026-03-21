"use client";

import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Calendar,
  GraduationCap,
  Code2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

export default function ExperiencePage() {
  return (<div className="pt-28 pb-20 px-0 sm:px-6 bg-background min-h-screen">

    <div className="container mx-auto max-w-6xl">

      {/* Header */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="mb-20"
      >
        <div className="w-16 h-1.5 bg-primary rounded-full mb-8" />

        <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
          Experience & <span className="text-primary">Growth</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl">
          My professional journey building scalable full-stack applications,
          working with modern technologies and delivering production-grade
          web platforms.
        </p>
      </motion.div>


      {/* EXPERIENCE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >

        <h2 className="text-3xl font-bold flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-primary" />
          Work Experience
        </h2>


        {/* TIMELINE CONTAINER */}
        {/* TIMELINE CONTAINER */}
        <div className="relative flex flex-col space-y-6 before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary/40 before:via-border before:to-transparent">

          {/* CURRENT ROLE */}
          <div className="relative flex gap-4 md:gap-8 group">
            {/* Stepper Graphic */}
            <div className="flex flex-col items-center z-10 flex-shrink-0 w-8">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border-4 border-primary/20 shadow-sm shadow-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
              <div className="p-3 sm:p-4 rounded-2xl bg-transparent hover:bg-primary/[0.02] transition-colors duration-500">

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      MERN Stack Developer
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base font-semibold text-primary">
                        UXDLAB SOFTWARE
                      </span>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold px-2 py-0 uppercase tracking-widest text-[9px] md:text-[10px]">
                        CURRENT
                      </Badge>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-muted-foreground bg-muted/40 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-border/50">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    Nov 2024 – Present
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base max-w-3xl">
                  Working as a full-time MERN stack developer building
                  production-ready dashboards and web applications. Responsible
                  for developing scalable backend APIs, implementing RBAC
                  authentication systems, payment integrations and high
                  performance frontend interfaces.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB",
                    "Express.js",
                    "React",
                    "Node.js",
                    "Redux",
                    "Redis",
                    "RBAC",
                    "Stripe",
                    "Clerk Auth"
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold px-2 py-0 uppercase tracking-widest text-[9px] md:text-[10px]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </div>
          </div>


          {/* INTERNSHIP */}
          <div className="relative flex gap-4 md:gap-8 group">
            {/* Stepper Graphic */}
            <div className="flex flex-col items-center z-10 flex-shrink-0 w-8">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center border-4 border-muted shadow-sm group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary/50 transition-colors" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-1">
              <div className="p-3 sm:p-4 rounded-2xl bg-transparent hover:bg-muted/30 transition-colors duration-500">

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      MERN Stack Developer Intern
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base font-semibold text-muted-foreground">
                        UXDLAB SOFTWARE
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-muted-foreground bg-muted/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-transparent">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground/70" />
                    Aug 2024 – Nov 2024
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base max-w-3xl">
                  Completed internship focused on full-stack development using
                  MERN technologies. Contributed to building internal dashboards,
                  REST APIs, and implemented authentication workflows while
                  collaborating with the development team.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "REST API",
                    "Git",
                    "JWT Auth"
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold px-2 py-0 uppercase tracking-widest text-[9px] md:text-[10px]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </motion.div>


      {/* CERTIFICATIONS */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-20 space-y-10"
      >

        <h2 className="text-3xl font-bold flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-primary" />
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {portfolioData.certificates.map((cert, i) => (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" key={i}>
              <Card className="hover:border-primary/50 transition-colors group border-l-4 border-l-primary">
                <CardContent className="p-6 flex items-center gap-4">

                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="font-semibold group-hover:text-primary transition-colors">{cert.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 text-[11px] font-bold uppercase tracking-widest text-primary/70 flex items-center gap-1">
                      View Certificate
                    </p>
                  </div>

                </CardContent>
              </Card>
            </a>
          ))}

        </div>

      </motion.div>


      {/* SERVICES */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-20 space-y-10"
      >
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Code2 className="w-6 h-6 text-primary" />
          Offered Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Web Development",
              desc: "Building highly scalable, robust, and performant full-stack web applications tailored for your business using MERN and Next.js.",
            },
            {
              title: "UI/UX Design",
              desc: "Crafting modern, intuitive, and responsive user interfaces that provide an unparalleled aesthetic and functional user experience.",
            },
            {
              title: "App Development",
              desc: "Developing seamless and scalable mobile-first progressive web apps that run beautifully across all modern devices.",
            },
          ].map((service, i) => (
            <Card key={i} className="hover:border-primary/50 transition-all duration-300 bg-card hover:bg-muted/10 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>


      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mt-16 flex flex-wrap gap-4"
      >

        <Button className="rounded-md" size="default" asChild>
          <Link href="/projects">
            View My Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>

        <Button variant="outline" className="rounded-md text-primary hover:text-primary border-primary hover:border-primary hover:bg-primary/10" size="default" asChild>
          <Link href="/contact">
            Contact Me
          </Link>
        </Button>

      </motion.div>

    </div>

  </div>

  );
}
