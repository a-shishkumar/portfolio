'use client';
import { portfolioData } from '@/lib/data';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, Code2, Briefcase, CheckCircle2, Loader2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useMemo, useEffect } from 'react';

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Web App', 'AI Tool', 'Enterprise'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter(p => {
      const matchCategory = activeCategory === 'All' || p.category.toLowerCase().includes(activeCategory.toLowerCase());
      const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    setIsDataLoading(true);
    const timer = setTimeout(() => setIsDataLoading(false), 400);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header - Cleaner & Tighter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter leading-none mb-6">
            The <span className="text-primary italic">Showcase.</span>
          </h1>
          <p className="text-base text-muted-foreground font-medium max-w-xl mx-auto leading-tight mb-8">
            Specialized solutions for enterprise challenges.
          </p>

        </motion.div>

        {/* Category Filter - Slimmer */}

        {/* Project Grid - With Loader Overlay */}
        <div className="relative min-h-[400px]">
          <AnimatePresence>
            {isDataLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-3xl"
              >
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Syncing</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${isDataLoading ? 'blur-[2px] opacity-50' : ''}`}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <Card className="flex flex-col h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all group overflow-hidden">
                    <div className="mb-6">
                      <Badge className="bg-primary/5 text-primary border-primary/20 rounded-md px-3 py-1 text-[9px] font-black uppercase tracking-widest mb-4">
                        {p.category}
                      </Badge>
                      <h3 className="text-xl font-black tracking-tight mb-2 group-hover:text-primary transition-colors leading-tight">
                        {p.title}
                      </h3>
                      <p className="text-muted-foreground font-medium text-[11px] leading-tight mb-4 line-clamp-2">
                        {p.shortDesc}
                      </p>
                    </div>

                    <div className="space-y-1.5 mb-6 flex-1">
                      {p.highlights.slice(0, 3).map((high, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 bg-muted/20 p-2 rounded-xl border border-border/5">
                          <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-[10px] font-bold text-secondary-foreground leading-tight">{high}</p>
                        </div>
                      ))}
                    </div>

                    <Button size="sm" className="w-full h-11 rounded-xl" asChild>
                      <Link href={`/projects/${p.id}`}>
                        Explore Details
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
