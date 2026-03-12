'use client';
import { portfolioData } from '@/lib/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  ArrowRight,
  User,
  Briefcase,
  Award,
  CheckCircle2,
  Code,
  Globe,
  Database,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services = [
  { icon: <Code className="w-5 h-5 text-blue-500" />, title: 'Frontend Developer', desc: 'Crafting responsive, performance-driven web interfaces using React and Next.js.' },
  { icon: <Globe className="w-5 h-5 text-purple-500" />, title: 'Fullstack Engineer', desc: 'Architecting end-to-end applications with the MERN stack and modern serverless technologies.' },
  { icon: <Database className="w-5 h-5 text-emerald-500" />, title: 'Database Designer', desc: 'Building scalable data structures with MongoDB, SQL, and high-speed Redis caching.' },
  { icon: <ShieldCheck className="w-5 h-5 text-amber-500" />, title: 'Security Architect', desc: 'Implementing robust security layers, RBAC systems, and secure authentication flows.' },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-16"
        >
          <div className="w-16 h-2 bg-primary rounded-full mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-tight mb-6">
            Everything starts with <span className="text-primary">Passion</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            I'm a Full-Stack Developer with a relentless focus on creating premium web experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Sidebar - Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Identity Card */}
            <Card className="rounded-[3rem] border-primary/20 overflow-hidden bg-background shadow-2xl shadow-primary/5 p-4 group">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <Avatar className="w-40 h-40 rounded-[2.5rem] mb-8 shadow-2xl shadow-primary/20 ring-4 ring-primary/10">
                  <AvatarFallback className="bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white text-5xl font-black rounded-[2.5rem]">
                    AK
                  </AvatarFallback>
                </Avatar>

                <h2 className="text-3xl font-black text-foreground mb-2">Ashish Kumar</h2>
                <Badge variant="secondary" className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/5 text-primary border-none mb-8">
                  Full-Stack Innovator
                </Badge>

                <div className="w-full space-y-3">
                  {[
                    { icon: <Mail className="w-4 h-4" />, label: 'Direct Email', val: portfolioData.email, href: `mailto:${portfolioData.email}` },
                    { icon: <Phone className="w-4 h-4" />, label: 'Direct Call', val: portfolioData.phone, href: `tel:${portfolioData.phone}` },
                    { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', val: 'Profile', href: portfolioData.linkedin, ext: true },
                    { icon: <Github className="w-4 h-4" />, label: 'GitHub', val: 'Repos', href: portfolioData.github, ext: true },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target={item.ext ? "_blank" : undefined} rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-3xl bg-muted/40 hover:bg-primary/10 transition-all duration-300 group/link">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-background text-muted-foreground group-hover/link:text-primary transition-colors shadow-sm">
                        {item.icon}
                      </div>
                      <div className="text-left flex-1">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                        <p className="text-xs font-black text-foreground group-hover/link:text-primary transition-colors">{item.val}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button className="w-full h-16 rounded-[2rem] font-black text-base shadow-2xl shadow-primary/20 gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all" asChild>
              <a href="/resume.pdf" download="Ashish_Kumar_Resume.pdf">
                <Download className="w-5 h-5" />
                DOWLOAD FULL RESUME
              </a>
            </Button>
          </motion.div>

          {/* Main Content Areas */}
          <div className="lg:col-span-8 space-y-16">
            {/* Biography Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-black text-foreground flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-6 h-6" />
                </div>
                The Narrative
              </h2>
              <div className="space-y-6">
                {portfolioData.about.split('\n\n').map((para, i) => (
                  <p key={i} className="text-xl leading-relaxed text-muted-foreground font-medium">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Specializations - Expertise Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-3xl font-black text-foreground flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                Core Expertise
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {services.map((item) => (
                  <Card key={item.title} className="rounded-[2.5rem] border-border bg-muted/20 hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                    <CardContent className="p-10">
                      <div className="w-16 h-16 rounded-3xl flex items-center justify-center bg-background group-hover:bg-primary/10 transition-colors mb-8 shadow-sm">
                        {item.icon}
                      </div>
                      <h3 className="font-black text-2xl mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight">{item.title}</h3>
                      <p className="text-base font-medium leading-relaxed text-muted-foreground/80">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Work History Focused Segment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-3xl font-black text-foreground flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Building2 className="w-6 h-6" />
                </div>
                Professional Footprint
              </h2>
              <Card className="rounded-[3rem] border-primary/20 bg-primary/5 shadow-2xl shadow-primary/5 overflow-hidden group">
                <CardContent className="p-10">
                  <div className="flex flex-wrap items-start justify-between gap-8 mb-8">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-foreground tracking-tight">Software Engineer</h3>
                      <p className="text-2xl font-black text-primary flex items-center gap-3">
                        UXDLAB SOFTWARE
                        <Badge className="bg-green-500/20 text-green-700 border-none font-bold text-[10px] tracking-widest px-4">
                          ACTIVE
                        </Badge>
                      </p>
                    </div>
                    <div className="px-6 py-3 rounded-2xl bg-background border border-border shadow-sm flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm font-black text-muted-foreground uppercase tracking-widest">Aug 2025 – Now</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['MERN Stack', 'Redis Architecture', 'Redux State', 'RBAC Systems', 'Stripe Payments', 'Clerk Auth'].map(t => (
                      <Badge key={t} variant="secondary" className="px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider bg-background text-muted-foreground border border-border/50 hover:bg-primary hover:text-white transition-all shadow-sm">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-3xl font-black text-foreground flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                Validation
              </h2>
              <div className="grid gap-4">
                {portfolioData.certificates.map((cert, i) => (
                  <Card key={i} className="rounded-3xl border-border bg-card/60 hover:border-primary/40 transition-all duration-300 group">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-3xl flex-shrink-0 transition-transform group-hover:scale-110">
                        🏅
                      </div>
                      <div className="flex-1">
                        <p className="font-black text-xl text-foreground mb-1">{cert}</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                          Simplilearn Accredited
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-10"
            >
              <Button size="lg" className="h-16 px-10 rounded-3xl font-black text-base shadow-2xl shadow-primary/20 group hover:scale-[1.02] active:scale-[0.98] transition-all" asChild>
                <Link href="/projects">
                  BROWSE PROJECTS
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-3xl font-black text-base bg-muted/20 border-border hover:border-primary/50 transition-all" asChild>
                <Link href="/contact">
                  WORK WITH ME
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
