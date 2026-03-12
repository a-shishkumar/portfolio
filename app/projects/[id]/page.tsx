'use client';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { portfolioData } from '@/lib/data';
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
  Tag,
  Share2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const project = portfolioData.projects.find(p => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Action */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-12 flex justify-between items-center">
          <Button variant="ghost" size="sm" className="group" asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-3 transition-transform group-hover:-translate-x-1" />
              BACK TO REPOSITORY
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="h-11 w-11 rounded-2xl">
            <Share2 className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Hero Meta Information */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-20"
        >
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="outline" className="px-6 py-2 rounded-full bg-primary/10 text-primary border-none text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
              <Tag className="w-3.5 h-3.5 mr-2" />
              {project.category}
            </Badge>
            <Badge className="px-6 py-2 rounded-full bg-green-500/10 text-green-600 border-none text-[11px] font-black uppercase tracking-[0.2em] animate-pulse">
              <CheckCircle2 className="w-3.5 h-3.5 mr-2" />
              DEPLOYED & STABLE
            </Badge>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-10 text-foreground tracking-tight leading-[0.9] md:max-w-4xl">
            {project.title}
          </h1>

          <p className="text-2xl leading-relaxed mb-12 text-muted-foreground max-w-3xl font-medium">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-5">
            {project.liveLink ? (
              <Button size="lg" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-6 h-6" />
                  LIVE DEPLOYMENT
                </a>
              </Button>
            ) : (
              <Badge variant="outline" className="h-14 px-10 rounded-3xl font-black text-[10px] uppercase tracking-widest bg-muted/40 text-muted-foreground border-border border-2 gap-3 shadow-none opacity-60">
                <ShieldAlert className="w-6 h-6" />
                ENTERPRISE PRIVATE REPO
              </Badge>
            )}

            {project.githubLink && (
              <Button size="lg" variant="outline" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                  SOURCE CODE
                </a>
              </Button>
            )}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Context - Detailed Exploration */}
          <div className="lg:col-span-8 space-y-20">
            {/* Detailed Brief */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 pt-10 border-t border-border/50"
            >
              <h2 className="text-3xl font-black text-foreground flex items-center gap-5">
                <div className="w-14 h-14 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-xl shadow-primary/10">
                  <Info className="w-7 h-7" />
                </div>
                The Architecture Brief
              </h2>
              <div className="space-y-6">
                {project.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-xl leading-relaxed text-muted-foreground font-medium">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Engineering Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-3xl font-black text-foreground flex items-center gap-5">
                <div className="w-14 h-14 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Zap className="w-7 h-7" />
                </div>
                Technical Deliverables
              </h2>
              <div className="grid gap-6">
                {project.highlights.map((h, i) => (
                  <Card key={i} className="rounded-[2rem] border-border bg-muted/20 shadow-none overflow-hidden group hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-8 flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-background border border-border/50 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <p className="text-lg font-bold text-muted-foreground group-hover:text-foreground transition-all leading-relaxed pt-2">
                        {h}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Lateral Specifications - Sidebar Info */}
          <div className="lg:col-span-4 space-y-12 pt-10 lg:pt-0">
            {/* Tech Matrix Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="rounded-[3rem] border-primary/10 bg-card/60 shadow-2xl shadow-primary/5 overflow-hidden">
                <CardHeader className="p-10 pb-6 border-b border-border/30">
                  <CardTitle className="text-xl font-black flex items-center gap-4 text-foreground tracking-tight">
                    <Code2 className="w-6 h-6 text-primary" />
                    Technology Stack
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-8">
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider bg-background text-muted-foreground border border-border/50 hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Performance Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="rounded-[3rem] border-border bg-muted/30 shadow-none overflow-hidden">
                <CardHeader className="p-10 pb-6">
                  <CardTitle className="text-xl font-black flex items-center gap-4 text-muted-foreground/80 tracking-tight">
                    <Layers className="w-6 h-6" />
                    Project Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-4 space-y-8">
                  <div className="flex justify-between items-center group">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Project Group</span>
                      <p className="text-base font-black text-foreground group-hover:text-primary transition-colors">{project.category}</p>
                    </div>
                  </div>
                  <Separator className="bg-border/50" />
                  <div className="flex justify-between items-center group text-right">
                    <div className="space-y-1 w-full flex justify-between items-center">
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Scale Size</span>
                      <p className="text-base font-black text-foreground group-hover:text-primary transition-colors">{project.techStack.length} Integrated Systems</p>
                    </div>
                  </div>
                  <Separator className="bg-border/50" />
                  <div className="flex justify-between items-center group">
                    <div className="space-y-1 w-full flex justify-between items-center">
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Timeline</span>
                      <p className="text-base font-black text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        2024–2025
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contribution & Support Tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <Rocket className="w-4 h-4" />
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-primary">Technical Tip</span>
              </div>
              <p className="text-sm font-bold text-muted-foreground leading-relaxed">
                Source documentation and advanced deployment manifests are available upon direct request for verified collaborations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Global Footer Navigation */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
            <h3 className="text-5xl font-black text-foreground tracking-tight">Discover<br />More <span className="text-primary">Engineering</span>.</h3>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                FULL EXPLORER
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {portfolioData.projects.filter(p => p.id !== project.id).slice(0, 2).map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`} className="group block h-full">
                <Card className="rounded-[3rem] border-primary/10 bg-card/40 hover:border-primary transition-all duration-500 hover:-translate-y-2 h-full shadow-none group-hover:shadow-2xl group-hover:shadow-primary/5 overflow-hidden">
                  <CardContent className="p-10 flex items-center gap-10">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-muted group-hover:bg-primary/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all duration-500 shadow-sm flex-shrink-0">
                      <Layers className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3 group-hover:text-primary transition-colors">{p.category}</p>
                      <h4 className="font-black text-3xl text-foreground tracking-tight group-hover:translate-x-2 transition-transform truncate">{p.title}</h4>
                    </div>
                    <ArrowRight className="w-8 h-8 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-2 flex-shrink-0" />
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
