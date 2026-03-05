"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = NAV_LINKS.find((l) => l.href === `#${id}`);
            if (link) setActive(link.name);
          }
        });
      },
      { threshold: 0.3 }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (name: string, targetId: string) => {
    setActive(name);
    setOpen(false);

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (!el) {
        console.warn("Element not found:", targetId);
        return;
      }
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("Home", "home"); }}
          className="flex items-center gap-2"
        >
          <Code2 className="text-white w-5 h-5" />
          <span className="text-lg font-bold text-white font-display">
            <span className="text-accent">&lt;</span>DevAI
            <span className="text-accent">/&gt;</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.name, link.href.replace("#", "")); }}
              className={cn(
                "text-sm font-medium transition-colors relative pb-1",
                active === link.name
                  ? "text-accent"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              {link.name}
              {active === link.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick("Contact", "contact"); }}
          className="hidden lg:block px-6 py-2.5 rounded-full bg-gradient-to-r from-accent to-primary text-black text-sm font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
        >
          Hire Me ✦
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="lg:hidden p-2 text-white z-[70] relative"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.name, link.href.replace("#", ""));
                  }}
                  className={cn(
                    "text-lg font-medium transition-colors py-3 border-b border-white/5",
                    active === link.name ? "text-accent" : "text-neutral-400"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("Contact", "contact"); }}
                className="mt-3 px-6 py-4 rounded-full bg-gradient-to-r from-accent to-primary text-black text-sm font-bold text-center"
              >
                Hire Me ✦
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}