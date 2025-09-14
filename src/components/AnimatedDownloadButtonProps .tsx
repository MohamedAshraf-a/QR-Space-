"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";

interface AnimatedDownloadButtonProps {
  label: string;
  onClick: () => void;
  colorFrom?: string;
  colorTo?: string;
}

export default function AnimatedDownloadButton({
  label,
  onClick,
  colorFrom = "from-violet-500",
  colorTo = "to-purple-600",
}: AnimatedDownloadButtonProps) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const handleClick = () => {
    onClick();

    // Particles effect
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));

    setParticles(newParticles);

    // remove after animation
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <div className="relative flex justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg bg-gradient-to-r ${colorFrom} ${colorTo} relative overflow-hidden`}
      >
        <Download size={18} />
        {label}
      </motion.button>

      {/* Particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{
            opacity: 0,
            x: p.x,
            y: p.y,
            scale: 0.5,
          }}
          transition={{ duration: 1 }}
          className="absolute w-2 h-2 bg-white rounded-full pointer-events-none"
        />
      ))}
    </div>
  );
}
