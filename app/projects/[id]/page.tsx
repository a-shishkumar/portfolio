'use client';

import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { portfolioData } from '@/lib/data';
import { MobilePreview } from '@/components/project/MobilePreview';
import { motion } from 'framer-motion';

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Code2,
  Info,
  Layers,
  Rocket,
  ShieldAlert,
  Calendar,
  Zap,
  Share2
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export default function ProjectDetailPage() {

  const params = useParams();
  const project = portfolioData.projects.find(p => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="pt-24 pb-16 px-0 sm:px-6 bg-background min-h-screen">

      <div className="container mx-auto max-w-6xl">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 flex justify-between items-center"
        >

          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>

          <Button variant="outline" size="icon" className="rounded-md">
            <Share2 className="w-4 h-4" />
          </Button>

        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-12"
        >

          <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-4">

            {project.liveLink ? (
              <>
                <MobilePreview
                  url={project.liveLink}
                  className="!rounded-md"
                  buttonText="Mobile Preview"
                />

                <Button
                  className="gap-2 h-10 sm:h-12 px-0 sm:px-6 sm:px-8 rounded-md font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  asChild
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </>
            ) : (
              <Badge className="px-4 py-2 rounded-md bg-muted text-muted-foreground border">
                <ShieldAlert className="w-4 h-4 mr-2" />
                Private Repository
              </Badge>
            )}

            {project.githubLink && (
              <Button
                size="lg"
                variant="outline"
                className="rounded-md"
                asChild
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </a>
              </Button>
            )}

          </div>

        </motion.div>


        <div className="grid lg:grid-cols-12 gap-10">

          {/* Left Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Info className="w-5 h-5 text-primary" />
                Architecture Overview
              </h2>

              <div className="space-y-4">
                
                {/* Desktop Overview */}
                <div className={project.descriptionMobile ? "hidden md:block space-y-4" : "space-y-4"}>
                  {project.description.split('\n\n').map((para, i) => (
                    <p
                      key={`desktop-${i}`}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Mobile Overview */}
                {project.descriptionMobile && (
                  <div className="md:hidden space-y-4">
                    {project.descriptionMobile.split('\n\n').map((para, i) => (
                      <p
                        key={`mobile-${i}`}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}

              </div>

            </motion.div>


            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary" />
                Technical Highlights
              </h2>

              <div className="grid gap-4">

                {project.highlights.map((h, i) => (

                  <Card key={i} className="border bg-card">

                    <CardContent className="p-6 flex items-start gap-4">

                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />

                      <p className="text-muted-foreground">
                        {h}
                      </p>

                    </CardContent>

                  </Card>

                ))}

              </div>

            </motion.div>

          </div>


          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">

            {/* Tech Stack */}
            <Card>

              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  Technology Stack
                </CardTitle>
              </CardHeader>

              <CardContent>

                <div className="flex flex-wrap gap-2">

                  {project.techStack.map((t) => (

                    <Badge
                      key={t}
                      className=" bg-primary/10 hover:bg-primary/10  text-primary border-none"
                    >
                      {t}
                    </Badge>

                  ))}

                </div>

              </CardContent>

            </Card>


            {/* Project Metrics */}
            <Card>

              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  Project Details
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                <div className="flex justify-between">

                  <span className="text-sm text-muted-foreground">
                    Category
                  </span>

                  <span className="font-semibold">
                    {project.category}
                  </span>

                </div>

                <Separator />

                <div className="flex justify-between">

                  <span className="text-sm text-muted-foreground">
                    Tech Count
                  </span>

                  <span className="font-semibold">
                    {project.techStack.length}
                  </span>

                </div>

                <Separator />

                <div className="flex justify-between items-center">

                  <span className="text-sm text-muted-foreground">
                    Timeline
                  </span>

                  <span className="flex items-center gap-2 font-semibold">
                    <Calendar className="w-3 h-3 text-primary" />
                    2024-2025
                  </span>

                </div>

              </CardContent>

            </Card>


            {/* Tip */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">

              <div className="flex items-center gap-2 mb-2">

                <Rocket className="w-4 h-4 text-primary" />

                <span className="text-sm font-semibold text-primary">
                  Technical Note
                </span>

              </div>

              <p className="text-sm text-muted-foreground">
                Documentation available upon request.
              </p>

            </div>

          </div>

        </div>


        {/* Footer Navigation */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t"
        >

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">

            <h3 className="text-3xl font-bold">
              Discover More Projects
            </h3>

            <Button variant="outline" className="rounded-md text-primary hover:bg-primary/10 bg-primary/10" asChild>
              <Link href="/projects">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            {portfolioData.projects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((p) => (

                <Link key={p.id} href={`/projects/${p.id}`}>

                  <Card className="hover:border-primary transition">

                    <CardContent className="p-6 flex items-center gap-4">

                      <Layers className="w-6 h-6 text-primary" />

                      <div>

                        <p className="text-xs text-muted-foreground">
                          {p.category}
                        </p>

                        <h4 className="font-semibold">
                          {p.title}
                        </h4>

                      </div>

                    </CardContent>

                  </Card>

                </Link>

              ))}

          </div>

        </motion.section>

      </div>

    </div>
  );
}