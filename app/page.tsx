'use client';

import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Download,
  Briefcase,
  Cpu,
  Sparkles,
  Layers,
  Rocket,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Wrench,
  Lightbulb
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { useState, useEffect } from "react";

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
};

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

export default function HomePage() {

  const [isDataLoading, setIsDataLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("featured");

  useEffect(() => {
    setIsDataLoading(true);
    const timer = setTimeout(() => setIsDataLoading(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* HERO */}

      <section className="relative pt-24  px-6 overflow-hidden">

        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] -z-10 rounded-full" />

        <div className="container mx-auto max-w-6xl">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* LEFT */}

            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="lg:col-span-7 space-y-6"
            >

              <motion.div variants={fadeIn}>

                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-md 
  border border-primary/30 bg-primary/10 backdrop-blur-sm 
  text-primary text-[11px] font-semibold tracking-wide 
  shadow-sm shadow-primary/10">

                  <span className="relative flex h-2 w-2">

                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>

                  </span>

                  Available for new projects

                </div>

              </motion.div>

              <div className="space-y-4">

                <motion.h1
                  variants={fadeIn}
                  className="text-5xl sm:text-3xl  lg:text-6xl font-black leading-[1] tracking-tight"
                >

                  Building <span className="text-primary italic">Better</span><br />
                  Digital Worlds.

                </motion.h1>

                <motion.p
                  variants={fadeIn}
                  className="text-base text-muted-foreground max-w-lg leading-relaxed"
                >

                  I'm <span className="font-semibold text-foreground">Ashish Kumar</span>.
                  A MERN Stack Developer focused on building scalable web applications and high-performance systems.

                </motion.p>

              </div>


              {/* BUTTONS */}

              <motion.div
                variants={fadeIn}
                className="pt-1 flex items-center gap-2 flex-wrap"
              >

                <Button
                  size="lg"
                  className="h-11 px-6 rounded-lg font-semibold text-white shadow-none transition-all duration-300 active:scale-95"
                  asChild
                >
                  <Link href="/projects" className="flex items-center gap-2">

                    View My Work
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />

                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="flex items-center gap-2 px-5 h-11 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all shadow-sm shadow-primary/5 font-semibold"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2 text-primary">

                    <Mail className="w-4 h-4 text-primary" />
                    <span className="font-semibold">Get in Touch</span>

                  </Link>
                </Button>

              </motion.div>

              {/* SOCIAL */}

              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-6 pt-2">

                <div className="flex gap-5">

                  <a
                    href={portfolioData.github}
                    target="_blank"
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    title="GitHub"
                  >

                    <Github className="w-5 h-5" />

                  </a>

                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    title="LinkedIn"
                  >

                    <Linkedin className="w-5 h-5" />

                  </a>

                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    title="Email"
                  >

                    <Mail className="w-5 h-5" />

                  </a>

                </div>

                <div className="h-4 w-px bg-border/60" />

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors h-auto p-0"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all shadow-sm shadow-primary/5 font-bold">
                      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition" />
                      Download CV
                    </div>
                  </a>
                </Button>

              </motion.div>

            </motion.div>


            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 hidden lg:block"
            >

              <div className="relative aspect-square max-w-[320px] ml-auto">

                <div className="rounded-3xl border border-border bg-card shadow-lg flex items-center justify-center h-full">

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center text-3xl font-black shadow-lg"
                  >

                    AK

                  </motion.div>

                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* PROJECTS */}

      <section className="pt-10 bg-muted/5 border-y border-border/40">

        <div className="container mx-auto max-w-6xl px-6">

          <div className="flex justify-between items-end mb-4">

            <div>

              <Badge variant="outline" className="text-[10px] uppercase font-semibold tracking-wider text-primary border-primary/30 bg-primary/5">

                Portfolio

              </Badge>

              <h2 className="text-3xl font-black mt-2">

                Selected Works

              </h2>

            </div>

            <Link
              href="/projects"
              className="flex items-center gap-2 text-primary text-sm font-medium"
            >

              See All
              <ArrowRight className="w-4 h-4" />

            </Link>

          </div>


          <Tabs defaultValue="featured" onValueChange={setActiveTab}>

            <TabsList className="mb-3">

              <TabsTrigger value="featured">Projects</TabsTrigger>

              <TabsTrigger value="experiments">Labs</TabsTrigger>

            </TabsList>


            <div className="relative min-h-[280px]">

              <AnimatePresence>

                {isDataLoading && (

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >

                    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />

                  </motion.div>

                )}

              </AnimatePresence>


              <TabsContent value="featured">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {portfolioData.projects.slice(0, 3).map((project, i) => (

                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >

                      <Card className="flex flex-col p-6 h-full rounded-2xl 
        border bg-card 
      border-primary/40 hover:shadow-xl hover:shadow-primary/10
        transition-all duration-300 group">

                        {/* TITLE */}

                        <h3 className="text-lg font-semibold tracking-tight mb-2 
         text-primary transition-colors">

                          {project.title}

                        </h3>

                        {/* DESCRIPTION */}

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">

                          {project.shortDesc}

                        </p>

                        {/* TECH STACK */}

                        <div className="flex flex-wrap gap-2 mb-5">

                          {project.techStack?.slice(0, 3).map(t => (

                            <Badge
                              key={t}
                              variant="secondary"
                              className="text-[10px] px-2.5 py-0.5 
                border border-primary/30 rounnded-sm
                bg-primary/5 text-primary 
                hover:bg-primary/10 
                transition-colors pointer-events-none font-medium"
                            >

                              {t}

                            </Badge>

                          ))}

                        </div>

                        {/* HIGHLIGHTS */}

                        <div className="space-y-2 mb-5 flex-1">

                          {project.highlights.slice(0, 2).map((h, idx) => (

                            <div key={idx} className="flex gap-2.5 text-sm items-start">

                              <CheckCircle2 className="w-4 h-4 text-primary mt-[2px]" />

                              <p className="text-muted-foreground font-medium leading-snug">

                                {h}

                              </p>

                            </div>

                          ))}

                        </div>

                        {/* BUTTON */}

                        <Button
                          asChild
                          size="sm"
                          className="w-full h-10 rounded-xl font-semibold mt-auto 
            shadow-sm hover:shadow-lg hover:shadow-primary/20
            transition-all duration-300 group/btn"
                        >

                          <Link href={`/projects/${project.id}`} className="flex items-center justify-center">

                            Case Study

                            <ExternalLink className="w-4 h-4 ml-2 
              group-hover/btn:translate-x-0.5 
              group-hover/btn:-translate-y-0.5 
              transition-transform" />

                          </Link>

                        </Button>

                      </Card>

                    </motion.div>

                  ))}

                </div>

              </TabsContent>


              <TabsContent value="experiments">

                <div className="flex flex-col items-center justify-center h-56 border-2 border-dashed rounded-2xl">

                  <Rocket className="w-8 h-8 text-muted-foreground" />

                  <p className="text-muted-foreground mt-3">

                    Open Source Labs Coming Soon

                  </p>

                </div>

              </TabsContent>

            </div>

          </Tabs>

        </div>

      </section>


      {/* CORE STACK */}

      <section className="pt-20 pb-10  px-6">

        <div className="container mx-auto max-w-6xl">

          <div className="flex justify-between items-center mb-12">

            <h2 className="text-3xl font-black">

              Core <span className="text-primary">Stack</span>

            </h2>

            <Button variant="ghost" asChild>

              <Link href="/skills">

                All Technologies

              </Link>

            </Button>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { title: "Languages", icon: <Code2 className="w-6 h-6" /> },
              { title: "Frontend", icon: <Layers className="w-6 h-6" /> },
              { title: "Backend", icon: <Cpu className="w-6 h-6" /> },
              { title: "Databases", icon: <Database className="w-6 h-6" /> },
              { title: "Tools & Platforms", icon: <Wrench className="w-6 h-6" /> },
              { title: "Concepts", icon: <Lightbulb className="w-6 h-6" /> },
            ].map((cat) => (

              <Card
                key={cat.title}
                className="flex items-center justify-between 
      p-6 rounded-2xl border border-border/60 
      bg-card hover:border-primary/30 
      hover:shadow-lg hover:shadow-primary/10 
      transition-all duration-300 group"
              >

                {/* Title */}

                <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground group-hover:text-primary transition-colors">

                  {cat.title}

                </h3>

                {/* Icon */}

                <div className="text-primary opacity-80 group-hover:scale-110 transition-transform">

                  {cat.icon}

                </div>

              </Card>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-15 px-6 pb-32">

        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A0A0A] via-[#0C0C0C] to-[#0F0A14] border border-primary/20 px-12 py-4 md:p-20 text-center shadow-2xl shadow-primary/5">

            {/* Powerful glowing orbs with primary color */}
            <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />

            {/* Animated lines */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            {/* Floating particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping opacity-75" />
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-ping delay-300 opacity-75" />
            <div className="absolute top-40 right-40 w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-500 opacity-50" />
            <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-1000 opacity-50" />

            <div className="relative z-10 space-y-8">
              {/* Impact badge with primary gradient */}
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">Available for work</span>
              </div>

              {/* Main heading with maximum impact */}
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]">
                <span className="block text-white">Ready to start</span>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-primary [text-shadow:0_0_30px_rgba(168,85,247,0.5)]">
                    your next project?
                  </span>
                  <span className="absolute -inset-3 bg-primary/20 blur-3xl rounded-full" />
                </span>
              </h2>

              {/* Powerful description */}
              <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                I'm currently open to collaborations and new opportunities.
                <span className="block mt-3 text-white font-semibold text-2xl bg-gradient-to-r from-gray-100 to-primary/80 bg-clip-text text-transparent">
                  Let's build something extraordinary together.
                </span>
              </p>

              {/* High-impact CTA buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
                <Button
                  size="lg"
                  className="group relative h-16 px-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-[0_10px_40px_-10px_rgba(168,85,247,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-110 border-0 overflow-hidden"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    <span className="relative z-10">Start Project</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group relative h-16 px-12 rounded-full bg-transparent border-2 border-primary/40 hover:border-primary text-white font-bold text-lg backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 hover:scale-105 overflow-hidden"
                  asChild
                >
                  <Link href="/about" className="flex items-center gap-3">
                    <span className="relative z-10">My Experience</span>
                    <span className="relative z-10 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center gap-3 pt-6">
                <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
              </div>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

      </section>

    </div>
  );
}