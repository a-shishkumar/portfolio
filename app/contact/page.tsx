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
import { toast } from "sonner";

const fadeIn = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        toast.success("Message Transmitted", {
          description: "An auto-reply has been sent to your email.",
        });
        setTimeout(() => setSent(false), 5000);
      } else {
        toast.error("Failed to send message", {
          description: "Please check your network and try again."
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Error", {
        description: "Something went wrong. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const contactOptions = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}`, desc: 'Drop a line' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone}`, desc: 'Direct call' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'Let\'s connect', href: portfolioData.linkedin, desc: 'Professional network' },
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: 'View work', href: portfolioData.github, desc: 'Open source' },
  ];

  return (
    <div className="pt-28 pb-20 px-0 sm:px-6 bg-background min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="mb-20"
        >
          <div className="w-16 h-1.5 bg-primary rounded-full mb-8" />
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
            Let's <span className="text-primary">Collaborate</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ready to bring your vision to life? Whether it's a new project, a job opportunity, or just a tech conversation, I'm just a message away.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left - Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm currently accepting new freelance projects and full-time opportunities.
              </p>
              
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-xs px-3 py-1 font-semibold uppercase tracking-wider mb-8">
                CURRENTLY ACCEPTING PROJECTS
              </Badge>
            </motion.div>

            <div className="grid gap-4">
              {contactOptions.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="shadow-sm group-hover:border-primary/40 transition-colors bg-card">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                            {item.label}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </p>
                          <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-sm bg-card border">
                <CardContent className="p-8 sm:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      Send a Message
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Fill out the form below to start a conversation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          required
                          placeholder="Jane Doe"
                          className="bg-background rounded-md"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          required
                          type="email"
                          placeholder="jane@example.com"
                          className="bg-background rounded-md"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        required
                        placeholder="Project Inquiry"
                        className="bg-background rounded-md"
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        placeholder="Write your message here..."
                        className="bg-background resize-none rounded-md"
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full sm:w-auto px-8 rounded-md"
                      disabled={loading || sent}
                    >
                      <AnimatePresence mode="wait">
                        {loading ? (
                          <motion.span
                            key="loading"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                          >
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                            Sending...
                          </motion.span>
                        ) : sent ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Message Sent!
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                          >
                            <Send className="w-4 h-4" />
                            Send Message
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
