"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, Briefcase, Trophy, GraduationCap } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Awards", href: "#achievements", icon: Trophy },
  { name: "Journey", href: "#education", icon: GraduationCap },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="flex items-center gap-1 glass p-1.5 rounded-full border border-white/5 shadow-2xl bg-white/[0.02]">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            title={item.name}
            className={`relative p-3 rounded-full transition-all duration-300 group ${
              activeSection === item.href.substring(1)
                ? "text-white"
                : "text-white/30 hover:text-white/70"
            }`}
          >
            {activeSection === item.href.substring(1) && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/10 rounded-full z-0 border border-white/10"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <item.icon size={20} className="relative z-10" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 border border-white/10 rounded-md text-[10px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
