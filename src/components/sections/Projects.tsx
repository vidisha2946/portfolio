"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

type Category = "All" | "Figma" | "Photoshop" | "Logo Branding" | "CorelDRAW" | "Canva";

const projects = [
  // Figma
  {
    id: "f6", title: "CraftConnect App", category: "Figma",
    description: "A UI/UX design for an e-commerce app connecting users to India's traditional handcraft artisans and regional craft products.",
    image: "/images/craftconnect.jpg",
    link: "https://www.behance.net/gallery/247375437/CraftConnect-UIUX-Design"
  },
  {
    id: "f1", title: "CareerLeap Case Study", category: "Figma",
    description: "A complete UI/UX case study and application design focusing on career development and job hunting.",
    image: "/images/careerleap.png",
    link: "https://www.behance.net/gallery/239821229/CareerLeap"
  },
  {
    id: "f2", title: "Spendify Financial Management", category: "Figma",
    description: "Complex data visualization simplified into an accessible, premium dashboard interface for financial tracking and management.",
    image: "/images/spendify.png",
    link: "https://www.behance.net/gallery/237903863/Spendify-(Financial-Management)-UI-UX-Design"
  },
  
  {
    id: "f7", title: "Student Learning App", category: "Figma",
    description: "An interactive mobile app design for students featuring lessons, quizzes, progress tracking, and achievement badges — all in one intuitive interface.",
    image: "/images/student-learning-app.png",
  },
  {
    id: "f8", title: "Shoe - App", category: "Figma",
    description: "A sleek dark-themed sneaker shopping app design featuring product discovery, exclusive offers, and a smooth secure checkout experience.",
    image: "/images/shoe-app.png",
  },
  
  // Photoshop
  {
    id: "p1", title: "WorkFolio Composites", category: "Photoshop",
    description: "High-impact social media campaign graphics, digital composites, and creative editing pieces.",
    image: "/images/photoshop-workfolio.jpg",
    link: "https://www.behance.net/gallery/241376043/WorkFolio"
  },
  // Logo Branding
  {
    id: "l1", title: "STRYDE Urban Athletics", category: "Logo Branding",
    description: "A complete brand identity including energetic logo design, typography system, and physical merchandise mockups for an urban athletics brand.",
    image: "/images/stryde-branding.jpg",
  },

  // CorelDRAW
  {
    id: "c1", title: "Workfolio Graphic Design", category: "CorelDRAW",
    description: "A comprehensive showcase of vector layouts, typography, and print-ready graphic design materials.",
    image: "/images/coreldraw.png",
    link: "https://www.behance.net/gallery/245592911/Workfolio-Graphic-Design-(Corel-Draw)"
  },
  // Canva
  {
    id: "cv1", title: "My Canva Creations", category: "Canva",
    description: "A versatile suite of highly engaging, reusable social media templates designed WITH CREATIVITY for quick deployment by marketing teams.",
    image: "/images/canva2.jpg",
    link: "https://drive.google.com/drive/folders/1HHRxmYjhYAdMXYu9E2G4bwa5tpAIzM-z?usp=sharing"
  },
];

const categories: Category[] = ["All", "Figma", "Photoshop", "Logo Branding", "CorelDRAW", "Canva"];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // If "All", show only the first project from each category. Otherwise, show all projects of the selected category.
  const filteredProjects = filter === "All" 
    ? categories
        .filter(c => c !== "All")
        .map(cat => projects.find(p => p.category === cat))
        .filter((p): p is typeof projects[0] => p !== undefined)
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-4"
            >
              Selected <span className="italic text-muted">Works</span>
            </motion.h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 glass p-2 rounded-[2rem] md:rounded-full border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? "text-white" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-white/10 rounded-full z-0 border border-white/20"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {/* Ambient Glow for grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                layoutId={`project-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] glass border border-white/5"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image with grayscale to color effect */}
                <motion.img 
                  layoutId={`image-${project.id}`}
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <motion.div layoutId={`title-${project.id}`}>
                    <span className="text-xs uppercase tracking-wider text-gold mb-2 block font-sans">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                  </motion.div>
                  <div className="mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/30 rounded-full px-4 py-2 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors">
                      View Project <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 rounded-2xl overflow-hidden flex flex-col pointer-events-auto shadow-2xl border border-zinc-800"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative h-[50vh] md:h-[60vh] w-full shrink-0 flex items-center justify-center bg-black/40 p-4">
                <motion.img 
                  layoutId={`image-${selectedProject.id}`}
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
              </div>

              <div className="p-8 md:p-12 overflow-y-auto">
                <motion.div layoutId={`title-${selectedProject.id}`}>
                  <span className="text-sm uppercase tracking-wider text-gold mb-3 block font-sans">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">{selectedProject.title}</h3>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="prose prose-invert prose-lg max-w-none text-zinc-300 font-sans font-light"
                >
                  <p>{selectedProject.description}</p>
                  <p className="mt-4">
                    This project required deep understanding of the user journey, ensuring a seamless experience while maintaining the premium aesthetic requested by the stakeholders. High-fidelity prototypes were developed across multiple iterations, refining both the visual grammar and the interactive components.
                  </p>
                  
                  {/* @ts-ignore */}
                  {selectedProject.link && (
                    <div className="pt-6">
                      {/* @ts-ignore */}
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition-transform cursor-pointer"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
