'use client';
import Link from 'next/link';
import { portfolioData } from '@/lib/data';
import { Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-xs bg-primary">
                AK
              </div>
              <span className="font-black text-lg tracking-tighter text-foreground">
                ASHISH KUMAR
              </span>
            </Link>
            <p className="text-muted-foreground font-medium text-xs leading-relaxed max-w-xs">
              MERN Stack specialist building high-performance web applications and systems.
            </p>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" className="w-8 h-8 rounded-md hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4" /></a>
              </Button>
              <Button size="icon" variant="ghost" className="w-8 h-8 rounded-md hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4" /></a>
              </Button>
              <Button size="icon" variant="ghost" className="w-8 h-8 rounded-md hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                <a href={`mailto:${portfolioData.email}`}><Mail className="w-4 h-4" /></a>
              </Button>
            </div>
          </div>

          {/* Sitemap */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Sitemap</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Location</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                New Delhi, India
              </div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Available Globally</p>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">
            © {currentYear} ASHISH KUMAR. BUILT WITH SHADCN.
          </p>
          <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            WITH <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500 mx-0.5" /> FROM INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
