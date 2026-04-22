"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxHeadingProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}

export default function ParallaxHeading({ children, className = "", speed = 100, direction = "right" }: ParallaxHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const value = direction === "right" ? [speed, -speed] : [-speed, speed];
  const x = useTransform(scrollYProgress, [0, 1], value);

  return (
    <div ref={ref} className="overflow-hidden w-full max-w-full">
      <motion.div style={{ x }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}
