"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Profile Photo Wrapper */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-44 md:h-44 rounded-full p-2 glass z-10"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative bg-zinc-900 flex items-center justify-center border border-white/10">
              <img 
                src="/images/profile.jpg" 
                alt="Vidisha - UI/UX Designer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/5"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <p className="text-zinc-300 tracking-wider text-xs uppercase font-sans font-medium">
            Open for opportunities
          </p>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex items-center gap-6 mb-10"
        >
          <a href="https://www.linkedin.com/in/vidisha-bhagiya-6144522a5/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-all hover:scale-110 flex items-center gap-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.behance.net/vidishabhagiya1" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-all hover:scale-110 flex items-center gap-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h2.027c2.518 0 2.514-3.523 0-3.523h-2.027v3.523zm0 6.406h2.736c2.833 0 2.728-3.945 0-3.945h-2.736v3.945z"/></svg>
          </a>
          <a href="mailto:vidishabhagiya1@gmail.com" className="text-zinc-400 hover:text-white transition-all hover:scale-110 flex items-center gap-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
           className="mb-8 relative"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[1.1] tracking-tight">
            Crafting <span className="italic text-gradient-gold pr-2">Digital</span> <br className="hidden md:block"/>
            <span className="text-gradient">Experiences</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-lg md:text-2xl text-zinc-400 font-sans font-light max-w-3xl mx-auto leading-relaxed mt-4"
        >
          I am <strong className="text-white font-medium">Vidisha</strong>, a UI/UX & Graphic Designer bridging the gap between aesthetic brilliance and functional design.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-muted group-hover:text-white transition-colors duration-300" size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
