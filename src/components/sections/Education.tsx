"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, BookOpen, Briefcase } from "lucide-react";

const timeline = [
  {
    year: "2025 - 2026",
    title: "Master of Designing in UI / UX",
    institution: "Red And White Multimedia Education",
    description: "Skill and certificate course specializing in advanced User Interface, User Experience methodologies, and design systems.",
    icon: Code2,
    active: true,
  },
  {
    year: "2023 - 2027",
    title: "Bachelor of Technology (B.Tech)",
    institution: "Darshan University",
    description: "Focus on Human-Computer Interaction and Digital Media Design. Bridging the gap between front-end logic and immersive visual aesthetics.",
    icon: GraduationCap,
    active: false,
  }
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-24 px-6 md:px-16 lg:px-24 flex items-center relative">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-4">
            Academic <span className="italic text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted font-sans text-lg max-w-md mx-auto">
            My progress pursuing B.Tech at Darshan University.
          </p>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-6 md:ml-10 space-y-16">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Stepper Node */}
              <div 
                className={`absolute w-12 h-12 rounded-full -left-6 flex items-center justify-center border-4 border-[#030303] transition-all duration-500 shadow-xl
                ${item.active ? "bg-white text-black shadow-white/20" : "bg-zinc-900 text-zinc-500 group-hover:bg-zinc-800 group-hover:text-zinc-300"}`}
              >
                <item.icon size={20} />
              </div>

              {/* Content */}
              <div className="glass p-8 rounded-3xl border border-white/5 relative group-hover:bg-white/5 transition-colors duration-500">
                <span className={`text-sm tracking-widest uppercase font-medium mb-3 block font-sans ${item.active ? "text-gold" : "text-zinc-500"}`}>
                  {item.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                  {item.title}
                </h3>
                <h4 className="text-lg text-zinc-400 font-sans mb-4">
                  {item.institution}
                </h4>
                <p className="text-zinc-300 font-sans font-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Future Endpoint */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.8 }}
             className="relative pl-12 md:pl-16"
          >
            <div className="absolute w-12 h-12 rounded-full -left-6 flex items-center justify-center border-4 border-[#030303] bg-zinc-900 text-zinc-600">
               <Briefcase size={20} />
            </div>
            <div className="pt-2">
              <span className="text-zinc-600 font-sans tracking-widest uppercase text-sm font-medium">Graduation & Beyond</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
