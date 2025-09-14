'use client';

import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  footerText?: string;
  madeByText?: string;
}

export default function Footer({ footerText, madeByText }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const iconHover = {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    boxShadow: "0 0 8px rgba(130, 76, 252, 0.6)",
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop" as const // ✔ هذا صحيح مع TypeScript
    },
  };

  return (
    <footer className="w-full p-6 flex flex-col items-center justify-center bg-background/70 backdrop-blur-md mt-12">
      <p className="text-foreground/70 mb-2">{footerText || `© ${currentYear} QR-Space`}</p>
      <p className="text-foreground/50 mb-4">{madeByText || "Made with 💜 by Mohamed Ashraf"}</p>

      <div className="flex gap-6">
        <motion.a
          href="https://github.com/MohamedAshraf-a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
          whileHover={iconHover}
        >
          <Github size={28} />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/mohamedashraf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
          whileHover={iconHover}
        >
          <Linkedin size={28} />
        </motion.a>
      </div>
    </footer>
  );
}
