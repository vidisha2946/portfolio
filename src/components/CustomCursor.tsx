"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 800, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 flex items-center justify-center drop-shadow-md mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
        }}
        transition={{
          scale: { duration: 0.2 },
          rotate: { repeat: isHovered ? Infinity : 0, duration: 0.5, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
          {/* Cute Cat Silhouette */}
          <path d="M12,8L10.6,6.3C10.2,5.8 9.5,5.6 8.9,5.9L5.4,7.5C4.6,7.9 4,8.7 4,9.6V15C4,18.3 6.7,21 10,21L14,21C17.3,21 20,18.3 20,15V9.6C20,8.7 19.4,7.9 18.6,7.5L15.1,5.9C14.5,5.6 13.8,5.8 13.4,6.3L12,8Z"/>
          {/* Cat Ears */}
          <path d="M5.5,3.5L8.5,5.5L4.5,7.5L5.5,3.5Z"/>
          <path d="M18.5,3.5L15.5,5.5L19.5,7.5L18.5,3.5Z"/>
          {/* Eyes & Nose */}
          <circle cx="9" cy="13" r="1.5" fill="black" />
          <circle cx="15" cy="13" r="1.5" fill="black" />
          <path d="M12,15 L11,16 L13,16 Z" fill="black" />
        </svg>
      </motion.div>
    </>
  );
}
