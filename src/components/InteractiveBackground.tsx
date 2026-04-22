"use client";

import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#030303]">
      {/* Animated Glowing Orbs for Premium Look */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen animate-float" />
      <div className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] bg-amber-900/10 rounded-full blur-[150px] mix-blend-screen animate-float" style={{ animationDelay: '3s' }} />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
        }}
      />
      
      {/* Mouse following radial gradient */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
    </div>
  );
}
