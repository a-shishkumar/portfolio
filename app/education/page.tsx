'use client';
import { portfolioData } from '@/lib/data';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  School,
  Calendar,
  Target,
  Medal,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter leading-none mb-6">
            Academic <span className="text-primary italic">Journey.</span>
          </h1>
          <p className="text-base text-muted-foreground font-medium max-w-xl mx-auto leading-tight">
            Foundations of engineering and continuous learning.
          </p>
        </motion.div>

        {/* Education Grid - Tighter cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="flex flex-col h-full rounded-2xl border border-border bg-card p-8 group hover:border-primary/40 transition-all">
                <div className="mb-6">
                  <Badge className="bg-primary/5 text-primary border-primary/20 rounded-md px-3 py-1 text-[9px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {i === 0 ? 'University' : 'Schooling'}
                  </Badge>
                  <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-bold text-[12px] flex items-center gap-2">
                    <School className="w-3.5 h-3.5 text-primary" />
                    {edu.institution}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-1 border-t border-border/50 pt-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{edu.duration}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-primary" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Score: {edu.percentage}</p>
                  </div>
                </div>

                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: edu.percentage }}
                    transition={{ duration: 1 }}
                    className="h-full bg-primary"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications - Professional Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-border"
        >
          <h2 className="text-3xl font-black tracking-tighter mb-10">Verified <span className="text-primary italic">Expertise.</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.certificates.map((cert, i) => (
              <Card key={i} className="rounded-2xl border border-border bg-muted/20 p-8 hover:bg-card transition-all flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-3xl shadow-sm">
                  🏅
                </div>
                <div className="space-y-2">
                  <h4 className="font-black text-xl text-foreground leading-tight tracking-tight">{cert}</h4>
                  <Badge variant="outline" className="text-[8px] font-black uppercase tracking-[0.2em] bg-primary/5 text-primary border-primary/20 flex items-center gap-1.5 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
