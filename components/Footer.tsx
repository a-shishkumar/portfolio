"use client";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-10 pb-10 border-t-2 border-border/40">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm bg-primary shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                AK
              </div>
              <div>
                <div className="font-black text-base tracking-tighter text-foreground leading-none">
                  ASHISH<span className="text-primary italic">.K</span>
                </div>
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/70 mt-1.5">
                  Architect
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-sm">
              MERN Stack specialist building high-performance web applications
              and systems. Currently available for new projects.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button
                size="icon"
                variant="ghost"
                className="w-9 h-9 rounded-lg bg-primary/15 text-primary text-muted-foreground transition-all duration-300"
                asChild
              >
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-9 h-9 rounded-lg bg-primary/15 ext-primary text-muted-foreground transition-all duration-300"
                asChild
              >
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="w-9 h-9 rounded-lg bg-primary/15 text-primary text-muted-foreground transition-all duration-300"
                asChild
              >
                <a href={`mailto:${portfolioData.email}`} title="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Sitemap */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-primary">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/skills", label: "Skills" },
                { href: "/projects", label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="relative inline-block text-sm font-bold text-primary transition-colors duration-300 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-primary">
              Location
            </h4>
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sm font-bold text-foreground">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                New Delhi, India
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-wider bg-primary/5 hover:bg-primary/10 px-3 py-2 rounded-lg transition-all duration-300 border border-primary/20 hover:border-primary/40"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available Globally
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/10 mb-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest text-center sm:text-left">
            © {currentYear} ASHISH KUMAR. BUILT WITH SHADCN.
          </p>
          <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-muted-foreground">
            WITH <Heart className="w-3.5 h-3.5 text-primary fill-primary" />{" "}
            FROM ASHISH
          </div>
        </div>
      </div>
    </footer>
  );
}
