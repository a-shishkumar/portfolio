"use client";

import { portfolioData } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  ArrowRight,
  User,
  Briefcase,
  Code,
  BookOpen,
  GraduationCap,
  Building2,
  Trophy,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Frontend Developer",
    desc: "Crafting responsive, performance-driven web interfaces using React and Next.js.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Fullstack Engineer",
    desc: "Architecting end-to-end applications with the MERN stack and modern serverless technologies.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Backend Specialist",
    desc: "Building scalable REST APIs, microservices, and high-performance backend systems.",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Problem Solver",
    desc: "Implementing RBAC systems, caching strategies, and enterprise-grade solutions.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16 px-0 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-16"
        >
          <div className="w-14 h-1.5 bg-primary rounded-full mb-6" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Everything starts with{" "}
            <span className="text-primary italic">Passion</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl text-base">
            I'm a Full-Stack Developer focused on building modern web
            applications with performance, scalability and clean design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >

            <Card className="rounded-3xl border-border shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-6">

                <Avatar className="w-36 h-36 rounded-3xl">
                  <AvatarImage src="/profileImg.svg" alt="Ashish Kumar" className="object-cover" />
                  <AvatarFallback className="bg-primary text-white text-4xl font-bold">
                    AK
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h2 className="text-2xl font-bold">Ashish Kumar</h2>
                  <Badge className="mt-2 bg-primary/10 text-primary border-none">
                    Full-Stack Developer
                  </Badge>
                </div>

                <Separator />

                <div className="w-full space-y-3">

                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{portfolioData.email}</span>
                  </a>

                  <a
                    href={`tel:${portfolioData.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{portfolioData.phone}</span>
                  </a>

                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>

                  <a
                    href={portfolioData.github}
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>

                </div>
              </CardContent>
            </Card>

            <Button className="w-full h-12  font-semibold shadow-none hover:shadow-none" asChild>
              <a href="https://drive.google.com/file/d/1p7w7X78VVektBDVCsHzf8oAsLHM_Syfv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>

          </motion.div>

          {/* Main Section */}
          <div className="lg:col-span-8 space-y-14">

            {/* About */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-primary" />
                About Me
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {portfolioData.about}
              </p>

            </motion.div>

            {/* Core Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-2xl  font-bold flex items-center gap-3 mb-8">
                <Code className="w-5 h-5 text-primary" />
                Core Expertise
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">

                {services.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-xl border-border bg-card hover:shadow-md hover:border-primary/40 transition-all duration-300"
                  >
                    <CardContent className="p-6">

                      <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                        {item.icon}
                      </div>

                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>

                    </CardContent>
                  </Card>
                ))}

              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h2>

              <div className="space-y-4 max-w-4xl">

                {portfolioData.education.map((edu, i) => (
                  <Card key={i} className="rounded-xl border-border border-l-4 border-l-primary">
                    <CardContent className="p-5 flex gap-4">

                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>

                      <div className="flex-1">

                        <div className="flex justify-between">
                          <h3 className="font-semibold">
                            {edu.degree}
                          </h3>

                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {edu.percentage}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {edu.duration}
                        </p>

                      </div>

                    </CardContent>
                  </Card>
                ))}

              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-row flex-wrap w-full gap-2 sm:gap-4 pt-6">

              <Link
                href="/projects"
                className="inline-flex items-center justify-center flex-1 sm:flex-none px-4 h-12 rounded-md bg-primary text-black font-medium text-[10px] uppercase tracking-widest transition-colors duration-200"
              >
                Browse Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center flex-1 sm:flex-none px-4 h-12 rounded-md border border-primary text-primary font-medium text-[10px] uppercase tracking-widest bg-primary/10 transition-colors duration-200"
              >
                Work With Me
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}