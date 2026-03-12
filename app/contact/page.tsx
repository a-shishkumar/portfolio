'use client';
import { useState } from 'react';
import { portfolioData } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Globe
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${portfolioData.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactOptions = [
    { icon: <Mail className="w-5 h-5 text-blue-500" />, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}`, desc: 'Primary professional channel' },
    { icon: <Phone className="w-5 h-5 text-emerald-500" />, label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone}`, desc: 'Direct technical consultation' },
    { icon: <Linkedin className="w-5 h-5 text-indigo-500" />, label: 'LinkedIn', value: 'Connect Now', href: portfolioData.linkedin, desc: 'Professional network' },
    { icon: <Github className="w-5 h-5 text-slate-500" />, label: 'GitHub', value: 'View Repos', href: portfolioData.github, desc: 'Open source contribution' },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-20"
        >
          <div className="w-16 h-2 bg-primary rounded-full mb-8 shadow-xl shadow-primary/20" />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-tight mb-8">
            Let's <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent underline decoration-primary/20">Collaborate.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
            Ready to bring your vision to life? Whether it's a new project, a job opportunity, or just a tech conversation, I'm just a message away.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left - Contact Methods */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-black text-foreground flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                The Availability
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                I'm currently accepting new freelance projects and full-time opportunities. Let's discuss how my expertise can serve your goals.
              </p>

              <Badge variant="outline" className="px-6 py-2.5 rounded-full bg-green-500/10 text-green-600 border-none text-[11px] font-black uppercase tracking-widest shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse"></span>
                CURRENTLY ACCEPTING PROJECTS
              </Badge>
            </motion.div>

            <div className="grid gap-4">
              {contactOptions.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="rounded-[2.5rem] border-primary/10 bg-muted/20 group-hover:border-primary/50 group-hover:bg-background transition-all duration-500 shadow-none overflow-hidden h-full">
                      <CardContent className="p-8 flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-background shadow-xl shadow-primary/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1 group-hover:translate-x-1 transition-transform">{item.label}</p>
                          <p className="font-black text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-2 truncate">
                            {item.value}
                            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </p>
                          <p className="text-xs font-bold text-muted-foreground/60 line-clamp-1">{item.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Direct Connect Tip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 rounded-[3rem] bg-gradient-to-br from-indigo-500/10 via-background to-primary/10 border border-primary/20 shadow-none"
            >
              <div className="flex items-center gap-4 mb-4 text-indigo-600">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-black text-xs uppercase tracking-[0.2em]">Global Connect</span>
              </div>
              <p className="text-base font-bold text-muted-foreground/80 leading-relaxed mb-6 italic">
                "I build bridges between complex technical logic and seamless user experiences, regardless of the time zone."
              </p>
              <div className="h-px w-full bg-border/50 mb-6" />
              <p className="text-sm font-black text-foreground">
                Avg. Response Time: <span className="text-primary font-black">&lt; 2 Hours</span>
              </p>
            </motion.div>
          </div>

          {/* Right - Interactive Communication Portal */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="rounded-[4rem] border-primary/10 bg-card/60 shadow-2xl shadow-primary/5 overflow-hidden group">
                <CardContent className="p-10 lg:p-16">
                  <div className="flex justify-between items-start mb-12">
                    <div className="space-y-3">
                      <h2 className="text-4xl font-black text-foreground tracking-tight flex items-center gap-5 leading-tight">
                        The Portal
                      </h2>
                      <p className="text-lg text-muted-foreground font-medium max-w-md">
                        Fill out the form below to start a formal communication thread.
                      </p>
                    </div>
                    <MessageSquare className="w-12 h-12 text-primary/20 group-hover:text-primary/50 transition-colors" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <Label htmlFor="name" className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground flex justify-between items-center group-focus-within:text-primary transition-colors">
                          Identity
                          <span className="text-primary/50">*</span>
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder="Full Name"
                          className="h-16 rounded-3xl bg-background border-border/50 focus:border-primary focus:ring-primary/10 transition-all font-bold text-lg px-8 shadow-sm"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="email" className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground flex justify-between items-center group-focus-within:text-primary transition-colors">
                          Return Channel
                          <span className="text-primary/50">*</span>
                        </Label>
                        <Input
                          id="email"
                          required
                          type="email"
                          placeholder="Email Address"
                          className="h-16 rounded-3xl bg-background border-border/50 focus:border-primary focus:ring-primary/10 transition-all font-bold text-lg px-8 shadow-sm"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="subject" className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground flex justify-between items-center group-focus-within:text-primary transition-colors">
                        Reference
                        <span className="text-primary/50">*</span>
                      </Label>
                      <Input
                        id="subject"
                        required
                        placeholder="Project Architecture / Career Talk"
                        className="h-16 rounded-3xl bg-background border-border/50 focus:border-primary focus:ring-primary/10 transition-all font-bold text-lg px-8 shadow-sm"
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="message" className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground flex justify-between items-center group-focus-within:text-primary transition-colors">
                        Briefing Summary
                        <span className="text-primary/50">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        placeholder="Describe your requirements or goals in detail..."
                        className="rounded-[2.5rem] bg-background border-border/50 focus:border-primary focus:ring-primary/10 transition-all font-bold text-lg px-8 py-6 shadow-sm resize-none"
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      />
                    </div>

                    <Button
                      type="submit"
                      className={cn(
                        "w-full h-20 rounded-[2.5rem] font-black text-xl shadow-2xl transition-all duration-700 hover:scale-[1.01] active:scale-[0.99] gap-4 tracking-tight",
                        sent ? "bg-green-600 hover:bg-green-700 shadow-green-500/20" : "bg-primary hover:bg-primary/90 shadow-primary/20"
                      )}
                    >
                      <AnimatePresence mode="wait">
                        {sent ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            className="flex items-center gap-4"
                          >
                            <CheckCircle2 className="w-7 h-7" />
                            MESSAGE TRANSMITTED!
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            className="flex items-center gap-4"
                          >
                            <Send className="w-7 h-7" />
                            SEND BRIEFING
                            <ArrowRight className="w-6 h-6 animate-pulse" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
