"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Medal, Trophy, Award, Camera, X } from "lucide-react";

const photos = [
  
  { src: "/images/indiaskills-3.jpg", caption: "Receiving the Bronze Medal at IndiaSkills 2025-26 Western Region" },
  { src: "/images/indiaskills-4.jpg", caption: "Medal moment at the IndiaSkills 2025-26 Regional Competition backdrop" },
  { src: "/images/indiaskills-1.jpg", caption: "Certificate of Achievement — Bronze Medal, Digital Interactive Media" },
  { src: "/images/indiaskills-5.jpg", caption: "Celebrating the achievement with the Certificate of Achievement" },
  { src: "/images/indiaskills-2.jpg", caption: "Competition in action at Helipad Exhibition Centre, Gandhinagar" },
  { src: "/images/techwar-1.jpg", caption: "TechWar 2026 — Double Win: Logo League Winner & AI Ad Master Runner Up" },
  { src: "/images/techwar-2.jpg", caption: "Certificate of Achievement — TechWar 2026, Logo League Winner" },
  { src: "/images/techwar-3.jpg", caption: "TechWar 2026 — It's a Double Win! Logo League & AI Ad Master" },
  { src: "/images/techwar-4.jpg", caption: "Both Certificates — Logo League Winner & AI Ad Master 1st Runner Up, TechWar 2026" },
  { src: "/images/zenith-1.jpg", caption: "Zenith 2026 — Holding the trophy at Darshan University" },
  { src: "/images/zenith-2.jpg", caption: "Zenith 2026 — Certificate of Recognition with trophy" },
  { src: "/images/zenith-3.jpg", caption: "Zenith 2026 — Admiring the Certificate of Recognition" },
  { src: "/images/zenith-4.jpg", caption: "Zenith 2026 — Certificate of Recognition, Darshan University" },
];

const PAGE_SIZE = 2;

export default function Achievements() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string } | null>(null);

  const totalPages = Math.ceil(photos.length / PAGE_SIZE);
  const pagePhotos = photos.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);


  return (
    <section id="achievements" className="min-h-screen py-24 px-6 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium mb-4">
            Awards & <span className="italic text-muted">Recognition</span>
          </h2>
          <p className="text-muted font-sans text-lg max-w-md">
            Milestones achieved through dedication to the craft of design.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] relative">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Main Large Tile - IndiaSkills */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group glass border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-black z-10" />
            <img 
              src="/images/indiaskills-4.jpg" 
              alt="IndiaSkills Ceremony"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-between">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center border border-gold/50 backdrop-blur-sm">
                <Medal className="text-gold" size={32} />
              </div>
              <div>
                <span className="text-gold font-sans font-medium tracking-widest uppercase text-sm mb-3 block">
                  National Excellence
                </span>
                <h3 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
                  IndiaSkills Regional <br />Bronze Medalist
                </h3>
                <p className="max-w-md text-zinc-300 font-light font-sans text-lg">
                  Recognized among the top design talents regionally, demonstrating exceptional proficiency in Graphic Design and UI/UX workflows under strict competition constraints.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Tile 1 - TechWar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden glass flex flex-col justify-between group transition-colors"
          >
            <img
              src="/images/techwar-5.jpg"
              alt="TechWar 1st Place"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
            <div className="relative z-20 p-8 flex flex-col justify-between h-full">
              <div className="w-12 h-12 rounded-full backdrop-blur-md bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Trophy className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-white mb-2">TechWar 1st Place</h4>
                <p className="text-zinc-400 font-sans font-light">Logo League Champion. Designed the winning brand identity system under a 2-hour hackathon time limit.</p>
              </div>
            </div>
          </motion.div>

          {/* Side Tile 2 - AI Ad Master */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden glass flex flex-col justify-between group transition-colors"
          >
            <img
              src="/images/techwar-4.jpg"
              alt="AI Ad Master Runner Up"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
            <div className="relative z-20 p-8 flex flex-col justify-between h-full">
              <div className="w-12 h-12 rounded-full backdrop-blur-md bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Award className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-white mb-2">AI Ad Master Runner Up</h4>
                <p className="text-zinc-400 font-sans font-light">Leveraged AI generative tools alongside traditional compositing to create a high-converting advertisement campaign.</p>
              </div>
            </div>
          </motion.div>

          {/* Zenith 2026 Tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="md:col-span-3 relative rounded-3xl overflow-hidden glass flex flex-col justify-between group transition-colors h-[300px]"
          >
            <img
              src="/images/zenith-2.jpg"
              alt="Zenith 2026"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <div className="relative z-20 p-8 md:p-10 flex flex-col justify-between h-full">
              <div className="w-12 h-12 rounded-full backdrop-blur-md bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                <Trophy className="text-amber-400" size={24} />
              </div>
              <div>
                <span className="text-amber-400 font-sans font-medium tracking-widest uppercase text-xs mb-2 block">Darshan University</span>
                <h4 className="text-3xl md:text-4xl font-serif text-white mb-2">Zenith 2026</h4>
                <p className="text-zinc-300 font-sans font-light max-w-lg">Awarded the Certificate of Recognition for active participation, commitment, and meaningful contribution in strengthening the culture of the program at Darshan University.</p>
              </div>
            </div>
          </motion.div>

          {/* Gallery Trigger Tile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsGalleryOpen(true)}
            className="md:col-span-3 h-[120px] rounded-3xl overflow-hidden glass flex items-center justify-between px-8 md:px-12 cursor-pointer group glass-hover transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Camera size={20} />
              </div>
              <h4 className="text-2xl font-serif text-white">Event Photography</h4>
            </div>
            <span className="text-muted font-sans text-sm uppercase tracking-widest hidden md:block group-hover:text-white transition-colors">
              View Gallery
            </span>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {isGalleryOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGalleryOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl flex flex-col pointer-events-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h3 className="text-2xl font-serif text-white">Event Captures</h3>
                  <p className="text-zinc-500 text-xs font-sans mt-1">Page {page + 1} of {totalPages}</p>
                </div>
                <button 
                  onClick={() => { setIsGalleryOpen(false); setPage(0); }}
                  className="p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 2×2 Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {pagePhotos.map((photo, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedPhoto(photo)}
                      className="relative rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 group cursor-pointer"
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-[55vh] object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs font-sans leading-snug line-clamp-2">{photo.caption}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-5">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-sans transition-colors"
                >
                  ← Prev
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === page ? "bg-white scale-125" : "bg-zinc-600 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page === totalPages - 1}
                  className="px-5 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm font-sans transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Single Photo Full-screen Viewer */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-4"
            >
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="self-end p-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-colors mb-2"
              >
                <X size={22} />
              </button>
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-zinc-300 text-sm font-sans text-center">{selectedPhoto.caption}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

