"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowUpRight, Menu, X, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({
  dark,
  toggleTheme,
}: {
  dark: boolean;
  toggleTheme: () => void;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-700",
        scrolled ? "py-3 px-4" : "px-4",
      )}
    >
      <nav
        className={cn(
          "container mx-auto max-w-5xl rounded-2xl flex items-center justify-between transition-all duration-500 px-6",
          scrolled
            ? "h-14 bg-background/80 backdrop-blur-2xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
            : "h-16 bg-transparent",
        )}
      >
        {/* Brand - Modern & Clean */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xs transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg shadow-primary/20">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-tighter text-foreground leading-none">
              ASHISH<span className="text-primary italic">.K</span>
            </span>
            <span className="text-[7px] font-black uppercase tracking-[0.3em] text-muted-foreground mt-0.5 opacity-60">
              Architect
            </span>
          </div>
        </Link>

        {/* Desktop - Links with Border Bottom Styling */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all border-b-2",
                  active
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/30",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions - Refined Icons & Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-border/40 bg-background/50 hover:bg-primary/5 transition-all group"
          >
            {dark ? (
              <Sun className="w-4 h-4 text-primary" />
            ) : (
              <Moon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
            )}
          </button>

          <Button size="sm" className="hidden sm:flex" asChild>
            <Link href="/contact">
              Hire Me
              <Zap className="w-3.5 h-3.5 fill-current" />
            </Link>
          </Button>

          <button
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-border/40 bg-background/50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Premium Glassmorphism */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-24 inset-x-4 p-6 rounded-[2rem] bg-background/95 backdrop-blur-3xl border border-white/10 shadow-2xl z-[70]"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  onClick={() => setMenuOpen(false)}
                  href={link.href}
                  className={cn(
                    "px-6 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 transition-all",
                    pathname === link.href
                      ? "bg-primary text-black shadow-lg shadow-primary/20"
                      : "bg-muted/50 text-muted-foreground hover:bg-primary/5 hover:text-primary",
                  )}
                >
                  <div
                    className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      pathname === link.href ? "bg-black" : "bg-primary/30",
                    )}
                  />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border/50">
              <Button
                className="w-full h-14"
                asChild
                onClick={() => setMenuOpen(false)}
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  Start a Conversation <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
