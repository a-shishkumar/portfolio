'use client';
import { portfolioData } from '@/lib/data';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Languages,
  Palette,
  Settings,
  Database,
  Wrench,
  Brain,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Languages className="w-5 h-5" />,
  Frontend: <Palette className="w-5 h-5" />,
  Backend: <Settings className="w-5 h-5" />,
  Databases: <Database className="w-5 h-5" />,
  'Tools & Platforms': <Wrench className="w-5 h-5" />,
  Concepts: <Brain className="w-5 h-5" />,
};

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter leading-none mb-6">
            Technical <span className="text-primary italic">Stack.</span>
          </h1>
          <p className="text-base text-muted-foreground font-medium max-w-xl mx-auto leading-tight">
            Specialized tools for high-performance development.
          </p>
        </motion.div>

        {/* Skills Grid - Tighter cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(portfolioData.skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: ci * 0.05 }}
            >
              <Card className="flex flex-col h-full rounded-2xl border border-border bg-card p-8 group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="mb-6">
                  <Badge className="bg-primary/5 text-primary border-primary/20 rounded-md px-3 py-1 text-[9px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                    {categoryIcons[category] || <Zap className="w-3.5 h-3.5" />}
                    {category}
                  </Badge>
                  <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:text-primary transition-colors leading-tight">
                    {category === 'Tools & Platforms' ? 'Tools' : category}
                  </h3>
                </div>

                <div className="space-y-2 mb-8 flex-1 border-t border-border/50 pt-6">
                  {items.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-[13px] font-bold text-secondary-foreground leading-tight">{skill}</p>
                    </div>
                  ))}
                </div>

                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 border-t border-border/50 pt-4 text-center">
                  Verified Skillset
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter">Mastery in Action.</h2>
            <p className="text-sm text-muted-foreground font-medium">Explore the real-world impact of these technologies.</p>
          </div>
          <Button size="lg" className="rounded-xl h-12 px-8 font-black text-xs gap-3 shadow-lg shadow-primary/10" asChild>
            <Link href="/projects">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
