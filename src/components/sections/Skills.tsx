"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

const skills = [
  { name: "Figma", color: "group-hover:text-purple-400 group-hover:border-purple-500/50", url: "https://www.figma.com", desc: "UI/UX & Prototyping" },
  { name: "Photoshop", color: "group-hover:text-blue-400 group-hover:border-blue-500/50", url: "https://www.adobe.com/products/photoshop.html", desc: "Image Editing & Compositing" },
  { name: "Illustrator", color: "group-hover:text-orange-400 group-hover:border-orange-500/50", url: "https://www.adobe.com/products/illustrator.html", desc: "Vector Graphics" },
  { name: "CorelDRAW", color: "group-hover:text-green-400 group-hover:border-green-500/50", url: "https://www.coreldraw.com", desc: "Print & Illustration" },
  { name: "Canva", color: "group-hover:text-cyan-400 group-hover:border-cyan-500/50", url: "https://www.canva.com", desc: "Social Media & Templates" },
  { name: "Next.js", color: "group-hover:text-white group-hover:border-zinc-400", url: "https://nextjs.org", desc: "React Framework" },
  { name: "React", color: "group-hover:text-sky-400 group-hover:border-sky-500/50", url: "https://react.dev", desc: "Frontend Library" },
  { name: "Tailwind CSS", color: "group-hover:text-teal-400 group-hover:border-teal-500/50", url: "https://tailwindcss.com", desc: "Utility-first Styling" },
  { name: "TypeScript", color: "group-hover:text-blue-500 group-hover:border-blue-600/50", url: "https://www.typescriptlang.org", desc: "Type-safe JS" },
  { name: "Framer Motion", color: "group-hover:text-pink-400 group-hover:border-pink-500/50", url: "https://www.framer.com/motion/", desc: "Complex Animations" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-4">
            The <span className="italic text-muted">Toolkit</span>
          </h2>
          <p className="text-muted font-sans text-lg max-w-md">
            The software and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          {skills.map((skill) => (
            <motion.a
              key={skill.name}
              variants={itemVariants}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-6 rounded-2xl glass glass-hover transition-all duration-300 ${skill.color}`}
            >
              <div>
                <h3 className="font-sans font-medium text-lg text-zinc-200 transition-colors duration-300 group-hover:text-inherit">
                  {skill.name}
                </h3>
                <p className="text-sm font-light text-zinc-500 mt-1">
                  {skill.desc}
                </p>
              </div>
              <ExternalLink size={18} className="text-zinc-600 transition-colors duration-300 group-hover:text-inherit" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
