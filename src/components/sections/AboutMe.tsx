"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<"bio" | "hobbies">("bio");

  return (
    <section id="about" className="min-h-screen py-24 px-6 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Header & Toggle */}
        <div className="space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 tracking-tight">
              Behind the <br />
              <span className="italic text-gradient-gold">Designs</span>
            </h2>
            <p className="text-zinc-400 font-sans text-lg max-w-md mt-4">
              A blend of strategic thinking, pixel-perfect execution, and an obsession with details.
            </p>
          </motion.div>

          {/* Custom Toggle inside Glass Pill */}
          <div className="flex flex-wrap glass rounded-[2rem] md:rounded-full p-2 w-max max-w-full border border-white/5 shadow-2xl">
            <button
              onClick={() => setActiveTab("bio")}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "bio" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeTab === "bio" && (
                <motion.div
                  layoutId="about-pill"
                  className="absolute inset-0 bg-white/10 rounded-full z-0 border border-white/20"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10 drop-shadow-md">Professional Bio</span>
            </button>
            <button
              onClick={() => setActiveTab("hobbies")}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === "hobbies" ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeTab === "hobbies" && (
                <motion.div
                  layoutId="about-pill"
                  className="absolute inset-0 bg-white/10 rounded-full z-0 border border-white/20"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10 drop-shadow-md">Beyond the Screen</span>
            </button>
          </div>
        </div>

        {/* Right Side: Content switching inside Glass Panel */}
        <div className="relative min-h-[400px] glass p-8 md:p-12 rounded-[2.5rem] overflow-hidden group">
          {/* Ambient inner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-gold/10 transition-colors duration-700" />
          
          <AnimatePresence mode="wait">
            {activeTab === "bio" ? (
              <motion.div
                key="bio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 space-y-6 text-lg md:text-xl tracking-wide font-light text-zinc-300 leading-relaxed font-sans"
              >
                <p>
                  I am a passionate UI/UX and Graphic Designer specializing in brand identity, web presence, and user-centric interfaces. My approach is rooted in the belief that good design solves business problems while delighting users.
                </p>
                <p>
                  With expertise across Figma, the Adobe Suite, and Canva, I bridge the gap between creative vision and technical feasibility. Every project is an opportunity to craft a unique digital narrative.
                </p>
                <div className="pt-6">
                  <a 
                    href="/Vidisha_Designer_CV.pdf" 
                    download
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                  >
                    Download CV
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="hobbies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 space-y-6 text-lg md:text-xl tracking-wide font-light text-zinc-300 leading-relaxed font-sans"
              >
                <p>
                  When I am not nudging pixels or structuring layouts, you can find me exploring the world through the lens of my camera. Photography teaches me about composition, lighting, and framing—skills that directly translate into my UI work.
                </p>
                <p>
                  I also actively participate in design hackathons and creative challenges to keep my skills sharp and stay inspired by the community.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
